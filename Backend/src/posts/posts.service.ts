import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePost } from './create-update-post/create-post';
import { UpdatePost } from './create-update-post/update-post';
import { Model } from 'mongoose';
import { Post } from '../posts/post';
import { CreateComment } from '../comments/create-update-comment/create-comment';
import { Comment } from 'src/comments/comment';
import { UpdateComment } from 'src/comments/create-update-comment/update-comment';


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
    {_id: id},
    {$set: updatePost},
    {new: true},
    ).exec();
  }

  async delete(id: string): Promise<any> {
    return this.postModel.deleteOne({_id: id,}).exec();
  }

  getPostComments(postId: string) {
    return this.postModel.findById(postId).select('comments');
  }
  
  addComment(postId: string, createComment: CreateComment) {
    const commentToAdd = createComment as Comment;

    return this.postModel.findByIdAndUpdate(
      postId,
      { $push: { comments: commentToAdd } },
      { new: true },
    );
  }

  removeComment(postId: string, commentId: string) {
    /*return this.postModel
      .findByIdAndUpdate(
        postId,
        { $pull: { comments: { id: commentId } } },
        { new: true },
      )
      .populate('comments');*/
  }

  updateComment(postId: string, commentId: string, updatedComment: UpdateComment) {
    return this.postModel
      .findOneAndUpdate(
        { _id: postId, 'comments._id': commentId },
        { $set: { 'comments.$': updatedComment } },
        { new: true },
      )
      .populate('comments');
  }

}