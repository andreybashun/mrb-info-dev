export interface ITaskRevision{
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

    // task: Task;
    // docRevisionInherit: DocRevision;
    // docRevForSignId: DocRevision[];
    // docRevForAttachId: DocRevision[];
}

export  interface ITasks{
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    taskRevisions: ITaskRevision[];
    lastchangedate:string;
}
