import { PartialType } from '@nestjs/mapped-types';
import { CreatePost } from './create-post';

export class UpdatePost extends PartialType(CreatePost) {}