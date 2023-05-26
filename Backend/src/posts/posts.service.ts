import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, Post } from './posts';
import { CreatePost } from './create-post';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>
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


  async update(id: string, updatePost: Post): Promise<Post> {
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