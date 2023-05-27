import { Controller, Delete, Get, Param, Body, Post as PostDecorator, Put } from '@nestjs/common';
import { Post } from './post';
import { PostsService } from './posts.service';
import { CreateComment } from 'src/comments/create-update-comment/create-comment';
import { UpdateComment } from 'src/comments/create-update-comment/update-comment';

@Controller('Posts')
export class PostsController {
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

  // rotas dos comments

  @Get(':id/comments')
  getPostComments(@Param('id') postId: string) {
    return this.postsService.getPostComments(postId);
  }

  @PostDecorator(':id/comments')
  async addComment(@Param('id') id: string, @Body() createComment: CreateComment){
    return this.postsService.addComment(id, createComment);
  }

  @Delete(':id/comments/:idcomment')
  async removeComment(@Param('id') id: string, @Param('idcomment') idComment: string){
    return this.postsService.removeComment(id, idComment);
  }

  @Put(':id/comments/:idcomment')
  async updateComment(@Param('id') id: string, @Param('idcomment') idComment: string, @Body() updateComment: UpdateComment){
    return this.postsService.updateComment(id, idComment, updateComment);
  }
}
