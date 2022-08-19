import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateDocRevisionDto} from "../document/dto/create-docRevision.dto";
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskService} from "./task.service";
import {CreateTaskRevisionDto} from "./dto/create-taskRevision.dto";

@Controller('task')
export class TaskController {

    constructor (private taskService: TaskService) {
    }

    @Post()
    create (@Body () dto: CreateTaskDto) {
        return this.taskService.create(dto);
    }

    getOne () {

    }

    @Get ()
    getAll () {
        return this.taskService.getAll ();
    }

    delete () {

    }

    @Post('/[revision]')
    createRevision (@Body () dto: CreateTaskRevisionDto) {
        return this.taskService.createRevision(dto);
    }
}
