import {ObjectId} from "mongoose";


export class CreateDocRevisionDto{
    readonly name;
    readonly type;
    readonly author;
    readonly status;
    readonly docId: ObjectId;
}