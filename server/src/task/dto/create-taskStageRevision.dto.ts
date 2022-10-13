import {ObjectId} from "mongoose";

export  class CreateTaskStageRevisionDto{
    readonly name;
    readonly type;
    readonly author;
    readonly status;
    readonly taskStageId: ObjectId;
    readonly docRevForSignId: ObjectId;
    readonly docRevForAttachId: ObjectId;
}