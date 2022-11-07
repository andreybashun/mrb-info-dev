export  interface ITasks{
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    taskStages: ITaskStage[];
    lastchangedate:string;
}

export interface ITaskStage{
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    taskStageRevisions: ITaskStageRevision[];
    lastchangedate:string;
}


export interface ITaskStageRevision{
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    revNum: number;
    signer:string;
    task:string;
    duedate:string;
    taskId:string;
    taskStageId:string;

    // task: Task;
    // docRevisionInherit: DocRevision;
    // docRevForSignId: DocRevision[];
    // docRevForAttachId: DocRevision[];
}



