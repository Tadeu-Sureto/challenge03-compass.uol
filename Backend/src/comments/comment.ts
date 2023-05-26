import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Comment' })
  postId: string;

  @Prop()
  user: string;

  @Prop()
  comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
