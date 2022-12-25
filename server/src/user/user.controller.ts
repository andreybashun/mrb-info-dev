import {Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ObjectId} from "mongoose";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {
    }

    @Post()
    @UseInterceptors (
        FileInterceptor ('file'))
    create (@UploadedFile () file, @Body () dto: CreateUserDto) {
        return this.userService.create (dto, file);
    }

    @Get(':id')
    getOne (@Param('id') id:ObjectId) {
        return this.userService.getOne(id)
    }

    @Get ()
    getAll () {
        return this.userService.getAll ();
    }

    @Delete(':id')
    delete (@Param('id') id:ObjectId) {
        return this.userService.delete(id);
    }


}
