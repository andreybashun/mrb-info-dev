import {ObjectId, Schema} from "mongoose";


export class CreateDocDto {
    readonly name;
    readonly type;
    readonly author;
    readonly status;
}