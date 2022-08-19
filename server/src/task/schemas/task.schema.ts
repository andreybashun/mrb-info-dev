import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import mongoose from "mongoose";
import {TaskRevision} from "./taskRevision.schema";


export type TaskDocument = Task & Document;

@Schema ()
export class Task {
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

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'TaskRevision'}]})
    taskRevisions: TaskRevision[];
}

export const TaskSchema = SchemaFactory.createForClass (Task);