import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import CreateUserDto from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async checkIfExist(email: string) {
    const userEmail = await this.usersRepository.findOne({ email });
    //const userPhone = await this.usersRepository.findOne({ phone });
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
}
