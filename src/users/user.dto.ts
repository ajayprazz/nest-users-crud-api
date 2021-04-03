import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  name: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  gender: string;

  @IsString({ always: true })
  @IsNotEmpty({ groups: ['phoneRequired'] })
  phone: string;

  @IsEmail({})
  @IsNotEmpty({ groups: ['emailRequired'] })
  email: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  address: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  nationality: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  dob: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  educationBackground: string;

  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  modeOfContact: string;
}
