export interface IDocRevision{
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    revNum: number;
    task:string;
    duedate:string;

    // task: Task;
    // docRevisionInherit: DocRevision;
    // docRevForSignId: DocRevision[];
    // docRevForAttachId: DocRevision[];
}

export  interface IDoc {
    _id: string;
    name: string;
    type: string;
    author: string;
    status: string;
    key: string;
    docRevisions: IDocRevision[];
    lastChangeDate:string;
}

export  interface DocState{
    docs: IDoc[];
    error: string;
}

export  enum DocActionTypes{
    FETCH_DOCS = 'FETCH_DOC',
    FETCH_DOCS_ERROR = 'FETCH_DOCS_ERROR',
}

interface FetchDocsAction{
    type: DocActionTypes.FETCH_DOCS;
    payload: IDoc[];
}

interface FetchDocsErrorAction{
    type: DocActionTypes.FETCH_DOCS_ERROR;
    payload: string;
}

export type DocAction = FetchDocsAction | FetchDocsErrorAction
