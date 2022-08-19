import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from "mongoose";
import {Doc} from "./document.schema";

export type DocRevisionDocument = DocRevision & Document;

@Schema ()
export class DocRevision {
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

    @Prop ({type: mongoose.Schema.Types.ObjectId, ref: 'Doc'})
    doc: Doc;
}

export const DocRevisionSchema = SchemaFactory.createForClass (DocRevision);