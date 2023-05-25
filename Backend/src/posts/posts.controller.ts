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

@Get() // aq retorna todos os users...
  async findALL() {
    return this.UsersService.findALL();
  }

  @Get(':id') // aq ele retorna só o user com o id q passamos :)  opa, id é sempre string em mongo ta
  async getById(@Param('id') id: string): Promise<User> {
    return this.UsersService.getById(id); // sempre q mudar no controller, muda service tbm e vice e versa!
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateUser: User): Promise<User> {
    return this.UsersService.update(id, UpdateUser);
  }

  @Delete(':id') // repara q pra deletar precisamos o id do user.....
  async delete(@Param('id') id: string) {
    this.UsersService.delete(id);
  }

}
