import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'must be a string' })
  readonly role: string;
  @IsNumber({}, { message: 'must be a number' })
  readonly userId: number;
}
