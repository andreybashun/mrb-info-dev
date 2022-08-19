import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import mongoose from "mongoose";
import {DocRevision} from "./docrevision.schema";

export type DocDocument = Doc & Document;

@Schema ()
export class Doc {

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
    lastChangeDate: string;

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'DocRevision'}]})
    docRevisions: DocRevision[];
}

export const DocSchema = SchemaFactory.createForClass (Doc);