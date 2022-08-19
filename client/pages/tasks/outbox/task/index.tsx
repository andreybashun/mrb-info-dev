import React from 'react';
import {ITaskRevision, ITasks} from "../../../../types/task";
import MainLayout from "../../../../layouts/MainLayout";
import TaskList from "../../../../components/Tasks/TaskList";
import {useRouter} from "next/router";
import TaskRevisionList from "../../../../components/Tasks/TaskRevisionList";

const Index = () => {
    const router = useRouter ()
    const taskRevisions:  ITaskRevision[] = [
        {    _id: '1',
            name: 'Рвизия 1',
            type: 'Sign',
            author: 'Bashun',
            status: 'cancel',
            key: '123',
            task: '1',
            duedate:'22.07.2022',
            revNum:1,
            signer:'ФАВТ'
        },
        {    _id: '2',
            name: 'Ревизия 2',
            type: 'Sign',
            author: 'Bashun',
            status: 'cancel',
            key: '3456',
            task: '2',
            duedate:'22.07.2022',
            revNum:2,
            signer:'ФАВТ'
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
            signer:'ФАВТ'
        }
    ]
    return (
        <MainLayout>
            <TaskRevisionList taskRevisions={taskRevisions}/>
        </MainLayout>
    );
};

export default Index;