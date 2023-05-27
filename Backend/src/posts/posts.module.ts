import { Module } from '@nestjs/common';
import { Post, PostSchema } from './post';
import { Comment, CommentSchema } from '../comments/comment';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';

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
  
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
