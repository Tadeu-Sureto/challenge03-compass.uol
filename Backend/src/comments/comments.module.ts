import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './comment';
import { Comment, CommentSchema } from './comment';
import { CommentsService } from './comment';
import { CommentsController } from './comment';

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
export class PostsModule {}
