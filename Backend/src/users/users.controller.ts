import { Controller, Delete, Get, Param, Body, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('Users')
export class UsersController {
  constructor(
    private readonly UsersService: UsersService
  ) {}

@Post()
  async create(@Body() createUsersService: User){
    return this.UsersService.create(createUsersService);
}

@Get() 
  async findALL() {
    return this.UsersService.findALL();
  }

  @Get(':id') 
  async getById(@Param('id') id: string): Promise<User> {
    return this.UsersService.getById(id); 
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateUser: User): Promise<User> {
    return this.UsersService.update(id, UpdateUser);
  }

  @Delete(':id') 
  async delete(@Param('id') id: string) {
    this.UsersService.delete(id);
  }

  @Post('login')
  async loginUser(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.UsersService.findByUsernameAndPassword(username, password);

    if (user) {
      return {
        id: user._id
      };
    } else {
      return { message: 'Fail to log in' };
    }
  }

}
