import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { UserValidationPipe } from './user.validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new UserValidationPipe())
  addUser(@Body() user: UserDto) {
    this.usersService.addUser(
      user.name,
      user.gender,
      user.phone,
      user.email,
      user.address,
      user.nationality,
      user.dob,
      user.educationBackground,
      user.modeOfContact,
    );

    return { message: 'user added successfuly' };
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }
}
