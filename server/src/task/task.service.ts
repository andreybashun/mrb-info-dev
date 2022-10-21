import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Doc, DocDocument} from "../document/schemas/document.schema";
import {Model, ObjectId} from "mongoose";
import {DocRevision, DocRevisionDocument} from "../document/schemas/docrevision.schema";
import {S3Service} from "../s3/s3.service";
import {Task, TaskDocument} from "./schemas/task.schema";
import {TaskStageRevision, TaskStageRevisionDocument} from "./schemas/taskStageRevision.schema";
import {CreateTaskDto} from "./dto/create-task.dto";
import {CreateTaskStageRevisionDto} from "./dto/create-taskStageRevision.dto";
import {TaskStage, TaskStageDocument} from "./schemas/taskStage.schema";
import {CreateTaskStageDto} from "./dto/create-taskStage.dto";

@Injectable()
export class TaskService {

    constructor (@InjectModel (Doc.name) private docModel: Model<DocDocument>,
                 @InjectModel (DocRevision.name) private docRevisionModel: Model<DocRevisionDocument>,
                 @InjectModel (Task.name) private taskModel: Model<TaskDocument>,
                 @InjectModel (TaskStage.name) private taskStageModel: Model<TaskStageDocument>,
                 @InjectModel (TaskStageRevision.name) private taskStageRevisionModel: Model<TaskStageRevisionDocument>,
                 private s3Servise: S3Service
    ) {
    }

    async create (dto: CreateTaskDto): Promise<Task> {
        return await this.taskModel.create ({...dto});
    }

    // получние задачи

    async getOne (id: ObjectId): Promise<Task> {
        return this.taskModel.findById (id).populate ('taskStages');
    }

    async getAll (): Promise<Task[]> {
        return this.taskModel.find ();
    }

    // удаление задачи

    async delete (id: ObjectId): Promise<ObjectId> {
        const task = await this.taskModel.findByIdAndDelete (id)
        return task._id
    }


    //создание этапа
    async createTaskStage(dto:CreateTaskStageDto):Promise<TaskStage>{
        const task = await  this.taskModel.findById(dto.taskId);
        const taskStage = await  this.taskStageModel.create({...dto});
        task.taskStages.push(taskStage);
        await  task.save();
        return taskStage;
    }

    //получние этапа
     async  getTaskStage(id:ObjectId):Promise<TaskStage>{
        return this.taskStageModel.findById(id).populate('taskStageRevisions')
     }

    //удаление этапа

    async deleteTaskStage(id: ObjectId):Promise<ObjectId>{
        return this.taskStageModel.findByIdAndDelete(id)
    }



    // создание ревизии
    async createRevision (dto: CreateTaskStageRevisionDto): Promise<TaskStageRevision>{
        const  taskStage = await  this.taskStageModel.findById(dto.taskStageId);
        // const taskId = taskStage.taskId;
        const  docRevForSign = await  this.docModel.findById(dto.docRevForSignId);
        const  docRevForAttach = await  this.docModel.findById(dto.docRevForAttachId);
        const taskStageRevision =  await this.taskStageRevisionModel.create({...dto, docRevForSign, docRevForAttach});
        taskStage.taskStageRevisions.push(taskStageRevision._id);
        await  taskStage.save();
        return taskStageRevision;
    }

    // получение ревизии
    async getRevision (id: ObjectId): Promise<TaskStageRevision> {
        return this.taskStageRevisionModel.findById (id);
    }


    // удаление ревизии
    async deleteRevision (id: ObjectId): Promise<ObjectId> {

        const revision = await this.taskStageRevisionModel.findByIdAndDelete (id)
        const taskStage = await this.taskStageModel.findById (revision.taskStageId)
        taskStage.taskStageRevisions.pop ();
        await taskStage.save ();
        return revision._id
    }

}
