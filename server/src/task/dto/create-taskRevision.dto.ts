import {ObjectId} from "mongoose";

export  class CreateTaskRevisionDto{
    readonly name;
    readonly type;
    readonly author;
    readonly status;
    readonly taskId: ObjectId;
    readonly docRevForSignId: ObjectId;
    readonly docRevForAttachId: ObjectId;
}