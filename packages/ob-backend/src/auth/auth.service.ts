import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
import { createTransport } from 'nodemailer';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { HttpService } from '@nestjs/axios';

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT as unknown as number,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private jwtService: JwtService,
    private userService: UserService,
    private httpService: HttpService,
  ) {}

  generateCode() {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  async generateEmailCode(email: string) {
    await this.userService.checkIfExist(email);
    const auth = await this.authRepository.create({
      identificator: email,
      code: this.generateCode(),
    });
    await this.authRepository.save(auth);
    await transporter.sendMail({
      from: '"Obudynku.pl" <no-reply@obudynku.pl>',
      to: email,
      subject: 'One Time Password',
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #5db075;text-decoration:none;font-weight:600">Obudynku.pl</a>
        </div>
        <p>Użyj podanego poniżej kodu aby przejść do następnego etapu rejestracji. Kod jest ważny przez 24h.</p>
        <h2 style="background: #5db075;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${auth.code}</h2>
        <hr style="border:none;border-top:1px solid #eee" />
      </div>
    </div>`,
    });
    return auth;
  }

  async verifyEmailCode(code: number, email: string) {
    let token;
    const auth = await this.authRepository.findOne({
      code,
      identificator: email,
    });
    if (auth) {
      token = this.jwtService.sign({ email });
    }
    return { token };
  }

  async verifyPhoneCode(code: number, phone: string, email: string) {
    let token;
    const auth = await this.authRepository.findOne({
      code,
      identificator: phone,
    });
    if (auth) {
      token = this.jwtService.sign({ email, phone });
    }
    return { token };
  }

  async finishUserRegistration(email: string, password: string) {
    let token;
    const auth = await this.userService.create({ phone: '', password, email });
    if (auth) {
      token = this.jwtService.sign({ id: auth.id }, { expiresIn: '365d' });
    }
    return { token, email };
  }

  async login(email: string, password: string) {
    let token;
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      const passwordMatch = await compare(password, user.password);
      if (passwordMatch) {
        token = this.jwtService.sign({ id: user.id }, { expiresIn: '365d' });
      }
    }
    return { token, email: user.email };
  }
}
