import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from "mongoose";
import {Task} from "./task.schema";
import {DocRevision} from "../../document/schemas/docrevision.schema";
import {TaskService} from "../task.service";
import {TaskStage} from "./taskStage.schema";


export type TaskStageRevisionDocument = TaskStageRevision & Document;

@Schema ()
export class TaskStageRevision {
    @Prop ()
    name: string;

    @Prop ()
    type: string;

    @Prop ()
    author: string;

    @Prop ()
    status: string;

    @Prop ()
    key: string;

    @Prop ()
    revNum: number;

    @Prop ()
    taskStageId: string;


    // @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'Task'})
    // task: Task;

    @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'TaskStage'})
    taskStage: TaskStage;

    @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'})
    docRevisionInherit: DocRevision;

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'}]})
    docRevForSignId: DocRevision[];

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'}]})
    docRevForAttachId: DocRevision[];

}

export const TaskStageRevisionSchema = SchemaFactory.createForClass (TaskStageRevision);