import React from 'react';
import MainLayout from "../../../layouts/MainLayout";
import TaskList from "../../../components/Tasks/TaskList";
import {ITasks} from "../../../types/task";
import {useTypedSelector} from "../../../hooks/useTypedSelector";




const Index = () => {
    const tasks:  ITasks[] = [
        {    _id: '1',
            name: 'Задача согласования 0123',
            type: 'Sign',
            author: 'Bashun',
            status: 'Open',
            key: '123',
            taskRevisions:[],
            lastchangedate:'22.07.2022'
        },
        {    _id: '2',
            name: 'Задача согласования 0154',
            type: 'Sign',
            author: 'Bashun',
            status: 'Closed',
            key: '3456',
            taskRevisions:[],
            lastchangedate:'22.07.2022'
        },
        {    _id: '3',
            name: 'Задача согласования 764312',
            type: 'Sign',
            author: 'Andrey',
            status: 'Pause',
            key: '9456',
            taskRevisions:[],
            lastchangedate:'22.07.2022'
        }
    ]
    return (
        <MainLayout>
           <TaskList tasks={tasks}/>
        </MainLayout>
    );
};

export default Index;