import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ObjectId} from "mongoose";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {
    }

    @Post()
    create (@Body () dto: CreateUserDto) {
        return this.userService.create (dto);
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
