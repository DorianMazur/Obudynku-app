import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
export class GenerateEmailCodeDTO {
  @IsEmail()
  email: string;
}

export class VerifyEmailCodeDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  code: number;
}

export class GeneratePhoneCodeDTO {
  @IsPhoneNumber('PL')
  phone: string;
}

export class VerifyPhoneCodeDTO {
  @IsPhoneNumber('PL')
  phone: string;

  @IsNotEmpty()
  code: number;
}

export class FinishRegistrationDTO {
  @IsNotEmpty()
  password: string;
}
