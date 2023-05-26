import { Module } from '@nestjs/common';
import { Post, PostSchema } from './post';
import { Comment, CommentSchema } from '../comments/comment';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from 'src/comments/comments.controller';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema
      },
      {
        name: 'Comment',
        schema: CommentSchema
      }
    ])
  ],
  exports: [],
  controllers: [PostsController, CommentsController],
  providers: [PostsService, CommentsService]
})
export class PostsModule {}
