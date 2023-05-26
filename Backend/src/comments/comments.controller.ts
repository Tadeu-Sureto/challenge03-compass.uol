import { Controller, Delete, Get, Param, Body, Post, Put } from '@nestjs/common';
import { Comment } from './comment';
import { CommentsService } from './comments.service';

@Controller('Comments')
export class CommentsController {
  constructor(
    private readonly commentService: CommentsService
  ) {}

@Post()
  async create(@Body() createComment: Comment){
    return this.commentService.create(createComment);
}

@Get()
  async findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Comment> {
    return this.commentService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateComment: Comment): Promise<Comment> {
    return this.commentService.update(id, updateComment);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.commentService.delete(id);
  }

}
