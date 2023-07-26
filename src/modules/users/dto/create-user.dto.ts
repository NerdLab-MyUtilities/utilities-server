import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'must be a string' })
  @IsEmail({}, { message: 'must be email type' })
  readonly email: string;
  @IsString({ message: 'must be a string' })
  @Length(3, 16, { message: 'mast have min 3 and max 16 symbols' })
  readonly password: string;
}
