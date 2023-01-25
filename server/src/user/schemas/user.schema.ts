import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from "mongoose";
import {TaskStageRevision} from "../../task/schemas/taskStageRevision.schema";



export type UserDocument = User & Document;
@Schema()

export class User {

    @Prop ()
    email: string

    @Prop ()
    password: string

    @Prop ()
    firstName: string

    @Prop ()
    secondName: string

    @Prop ()
    organization: string

    @Prop ()
    position: string

    @Prop ()
    avatar: string

    @Prop ({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'TaskStageRevision'}]})
    taskInBox: TaskStageRevision[];

}

    export const UserSchema = SchemaFactory.createForClass (User);




