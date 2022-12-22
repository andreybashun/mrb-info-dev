import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";



@Injectable()
export class UserService {
    constructor (@InjectModel (User.name) private userModel: Model<UserDocument>
    ) {

    }
    async create (dto: CreateUserDto): Promise<User> {
        return await this.userModel.create ({...dto});
    }

    // получние пользователя

    async getOne (id: ObjectId): Promise<User> {
        return this.userModel.findById (id);
    }
    // получение всех пользователей

    async getAll (): Promise<User[]> {
        return this.userModel.find ();
    }

  //  удаление пользователя

    async delete (id: ObjectId): Promise<ObjectId>{
        return this.userModel.findByIdAndDelete (id);

    }

}
