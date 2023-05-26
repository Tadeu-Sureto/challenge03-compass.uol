import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post';
import { CreatePost } from './create-update-post/create-post';
import { UpdatePost } from './create-update-post/update-post';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async getById(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async create(createPost: CreatePost): Promise<Post> {
    const post = new this.postModel(createPost);
    return post.save();
  }


  async update(id: string, updatePost: UpdatePost): Promise<Post> {
    return this.postModel.findByIdAndUpdate(
    id,
    {$set: updatePost},
    {new: true},
    ).exec();
  }

  async delete(id: string): Promise<any> {
    return this.postModel.deleteOne({_id: id,}).exec();
  }
}