import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../posts/post';
import { Comment, CommentSchema } from './comment';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

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
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
