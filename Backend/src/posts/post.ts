import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {

  @Prop()
  user: string;

    @Prop()
  description: string;

  @Prop()
  like: number;

  @Prop()
  comments: Array<Comment>;

  @Prop()
  post_date: string;

  @Prop()
  url_imagem: string;
}

export const UserSchema = SchemaFactory.createForClass(Post);
