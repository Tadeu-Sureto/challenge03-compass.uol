import { Controller, Delete, Get, Param, Body, Post as PostDecorator, Put } from '@nestjs/common';
import { Post } from './post';
import { PostsService } from './posts.service';

@Controller('Users')
export class UsersController {
  constructor(
    private readonly postsService: PostsService
  ) {}

@PostDecorator()
  async create(@Body() createPost: Post){
    return this.postsService.create(createPost);
}

@Get()
  async findALL() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Post> {
    return this.postsService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePost: Post): Promise<Post> {
    return this.postsService.update(id, updatePost);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.postsService.delete(id);
  }

}
