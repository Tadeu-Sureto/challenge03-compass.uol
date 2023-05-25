import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/db_desafio'),
    // MongooseModule.forRoot('mongodb://admin:admin@localhost:27017',
    MongooseModule.forRoot('mongodb://127.0.0.1:27017',
    {dbName: 'db_desafio'}),
    UsersModule // aq nos imports sempre vai os modules q vai ter, por enquanto temos users
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


