import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

  @Prop()
  name: string;

  @Prop()
  user: string;

  @Prop()
  birthdate: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  profile_photo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
