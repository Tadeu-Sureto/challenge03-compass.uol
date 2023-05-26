import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDocument, Comment } from './comment';
import { CreateComment } from './create-update-comment/create-comment';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async getById(id: string): Promise<Comment> {
    return this.commentModel.findById(id).exec();
  }

  async create(createComment: CreateComment): Promise<Comment> {
    const comment = new this.commentModel(createComment);
    return comment.save();
  }


  async update(id: string, updateComment: Comment): Promise<Comment> {
    return this.commentModel.findByIdAndUpdate(
    id,
    {$set: updateComment},
    {new: true},
    ).exec();
  }

  async delete(id: string): Promise<any> {
    return this.commentModel.deleteOne({_id: id,}).exec();
  }
}