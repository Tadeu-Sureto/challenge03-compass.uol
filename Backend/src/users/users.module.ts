import { Module } from '@nestjs/common';
import { User, UserSchema } from './user';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema
      }
    ])
  ],
  exports: [],
  controllers: [UsersController],
  providers: [UsersService,]
})
export class UsersModule {}
