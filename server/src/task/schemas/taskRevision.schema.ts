import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from "mongoose";
import {Task} from "./task.schema";
import {DocRevision} from "../../document/schemas/docrevision.schema";


export type TaskRevisionDocument = TaskRevision & Document;

@Schema ()
export class TaskRevision {
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


    @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'Task'})
    task: Task;

    @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'})
    docRevisionInherit: DocRevision;

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'}]})
    docRevForSignId: DocRevision[];

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'}]})
    docRevForAttachId: DocRevision[];

}

export const TaskRevisionSchema = SchemaFactory.createForClass (TaskRevision);