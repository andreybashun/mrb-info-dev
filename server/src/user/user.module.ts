import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {S3Controller} from "../s3/s3.controller";
import {S3Service} from "../s3/s3.service";

@Module({
  imports:[ MongooseModule.forFeature([{name:User.name, schema:UserSchema}])

  ],
  controllers: [UserController,S3Controller],
  providers: [UserService, S3Service]
})
export class UserModule {}
