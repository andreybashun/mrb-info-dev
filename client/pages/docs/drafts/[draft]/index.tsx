import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import {useRouter} from "next/router";
import DocRevisionList from "../../../../components/Docs/DocRevisionList";
import {IDocRevision} from "../../../../types/doc";

const Index = () => {
    const router = useRouter ()
    const docRevisions:  IDocRevision[] = [
        {    _id: '1',
            name: 'Рвизия 1',
            type: 'Sign',
            author: 'Bashun',
            status: 'canceled',
            key: '123',
            task: '1',
            duedate:'22.07.2022',
            revNum:1,
            doc:{_id: '62be13bffb627cc932eebe10',name: 'Рвизия 1',author: 'Bashun',status: 'canceled',key: '123',type: 'Sign',docRevisions:[], lastChangeDate:'20'}
        },
        {    _id: '2',
            name: 'Ревизия 2',
            type: 'Sign',
            author: 'Bashun',
            status: 'canceled',
            key: '3456',
            task: '2',
            duedate:'22.07.2022',
            revNum:2,
            doc:{_id: '62be13bffb627cc932eebe10',name: 'Рвизия 1',author: 'Bashun',status: 'canceled',key: '123',type: 'Sign',docRevisions:[], lastChangeDate:'20'}
        },
        {    _id: '3',
            name: 'Ревизия 3',
            type: 'Sign',
            author: 'Bashun',
            status: 'approved',
            key: '9456',
            task: '3',
            duedate:'22.07.2022',
            revNum:3,
            doc:{_id: '62be13bffb627cc932eebe10',name: 'Рвизия 1',author: 'Bashun',status: 'canceled',key: '123',type: 'Sign',docRevisions:[], lastChangeDate:'20'}
        }
    ]
    return (
        <MainLayout>
            <DocRevisionList docRevisions={docRevisions}/>
        </MainLayout>
    );
};

export default Index;