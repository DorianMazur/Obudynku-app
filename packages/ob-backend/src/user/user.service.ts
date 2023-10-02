import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { ChangePasswordDto, CreateUserDto } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async checkIfExist(email: string) {
    const userEmail = await this.usersRepository.findOne({ email });
    if (userEmail) {
      throw new HttpException(
        'Użytkownik z tym adresem email już istnieje',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      email,
    });
    return user;
  }

  async create(userData: CreateUserDto) {
    await this.checkIfExist(userData.email);
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async changePassword(userID: string, userData: ChangePasswordDto) {
    const user = await this.usersRepository.findOne({ id: userID });
    if (!user) {
      throw new HttpException(
        'Użytkownik nie istnieje',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.password = await hash(userData.newPassword, 10);
    await this.usersRepository.save(user);
    return user;
  }
}
