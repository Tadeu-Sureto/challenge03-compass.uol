import { Module } from '@nestjs/common';
import { Post, PostSchema } from './posts';
import { Comment, CommentSchema } from 'comments';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post.name',
        schema: PostSchema
      }
      {
        name: 'Comment.name',
        schema: CommentSchema
      }
    ])
  ],
  exports: [],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
