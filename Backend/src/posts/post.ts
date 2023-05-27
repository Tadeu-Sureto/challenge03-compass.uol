import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comment } from 'src/comments/comment';


@Schema()
export class Post extends Document {

  @Prop()
  user: string;

    @Prop()
  description: string;

  @Prop({default: 0})
  likes?: number;

  @Prop({ type: [{ user: String, comment: String }], required: false })
  comments?: { user: string, comment: string }[];

  @Prop()
  post_date: string;

  @Prop()
  url_imagem?: string;

  
}

export const PostSchema = SchemaFactory.createForClass(Post);
