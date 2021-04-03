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
  async getAllUsers() {
    try {
      const users = await this.usersService.getUsers();

      return { users };
    } catch (err) {
      throw new Error('error getting users');
    }
  }

  @Get(':id')
  async getUser(@Param('id') userId: string) {
    try {
      const user = await this.usersService.getUserById(userId);
      return { user };
    } catch (err) {
      throw new Error('error getting user');
    }
  }
}
