export class CreateUserDto {
  email: string;
  phone: string;
  password: string;
}

export class ChangePasswordDto {
  newPassword: string;
}
