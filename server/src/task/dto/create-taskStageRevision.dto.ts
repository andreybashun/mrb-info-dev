import {ObjectId} from "mongoose";

export  class CreateTaskStageRevisionDto{
    readonly name: string;
    readonly type: string;
    readonly author: string;
    readonly status: string;

    readonly discription: string;
    readonly decId: string;
    readonly lastChangeDate: string;
    readonly organization: string;
    readonly ata: string;
    readonly aircraftType: string;
    readonly engineType: string;
    readonly creationDate: string;

    readonly signer: string;

    readonly taskStageId;
    readonly taskId;

    readonly docForSignId;
    readonly docRevForSignId;
    readonly docRevForAttachId;
    readonly docRevisionInherit;
}