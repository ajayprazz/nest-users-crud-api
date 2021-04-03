import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(
    // @Body() completeBody,
    @Body('name') name: string,
    @Body('gender') gender: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('nationality') nationality: string,
    @Body('dob') dob: string,
    @Body('educationBackground') educationBackground: string,
    @Body('modeOfContact') modeOfContact: string,
  ) {
    this.usersService.addUser(
      name,
      gender,
      phone,
      email,
      address,
      nationality,
      dob,
      educationBackground,
      modeOfContact,
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
