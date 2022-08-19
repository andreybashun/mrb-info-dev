import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Doc, DocDocument} from "../document/schemas/document.schema";
import {Model} from "mongoose";
import {DocRevision, DocRevisionDocument} from "../document/schemas/docrevision.schema";
import {S3Service} from "../s3/s3.service";
import {Task, TaskDocument} from "./schemas/task.schema";
import {TaskRevision, TaskRevisionDocument} from "./schemas/taskRevision.schema";
import {CreateTaskDto} from "./dto/create-task.dto";
import {CreateTaskRevisionDto} from "./dto/create-taskRevision.dto";

@Injectable()
export class TaskService {

    constructor (@InjectModel (Doc.name) private docModel: Model<DocDocument>,
                 @InjectModel (DocRevision.name) private docRevisionModel: Model<DocRevisionDocument>,
                 @InjectModel (Task.name) private taskModel: Model<TaskDocument>,
                 @InjectModel (TaskRevision.name) private taskRevisionModel: Model<TaskRevisionDocument>,
                 private s3Servise: S3Service
    ) {
    }

    async create (dto: CreateTaskDto): Promise<Task> {
        return await this.taskModel.create ({...dto});
    }

    async getOne () {
    }

    async getAll (): Promise<Task[]> {
        return this.taskModel.find ();
    }

    async delete () {

    }

    async createRevision (dto: CreateTaskRevisionDto): Promise<TaskRevision>{
        const  task = await  this.taskModel.findById(dto.taskId);
        const  docRevForSign = await  this.docModel.findById(dto.docRevForSignId);
        const  docRevForAttach = await  this.docModel.findById(dto.docRevForAttachId);
        const taskRevision =  await this.taskRevisionModel.create({...dto,  docRevForSign, docRevForAttach});
        task.taskRevisions.push(taskRevision._id);
        await  task.save();
        return taskRevision;
    }

}
