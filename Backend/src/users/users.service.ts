import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user';
import { Model } from 'mongoose';
import { CreateUser } from './create-update-user/create-user';
import { UpdateUser } from './create-update-user/update-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>
  ) {}

  async findALL(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.UserModel.findById(id).exec();
  }


  async create(User: CreateUser): Promise<User> {
    const createUser = new this.UserModel(User);
    return createUser.save();
  }


  async update(id: string, User: UpdateUser): Promise<User> {
    return this.UserModel.findByIdAndUpdate(
    id,
    {$set: User},
    {new: true},
    ).exec();
  }

  async delete(id: string): Promise<any> {
    return this.UserModel.deleteOne({_id: id,}).exec();
  }

  async findByUsernameAndPassword(user: string, password: string): Promise<User | null> {
    return this.UserModel.findOne({ user, password }).exec();
  }
}
