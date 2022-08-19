import React from 'react';
import {useRouter} from "next/router";
import {IDocRevision} from "../../../types/doc";
import MainLayout from "../../../layouts/MainLayout";
import DocRevisionList from "../../../components/Docs/DocRevisionList";

const DraftPage = () => {
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
        }
    ]
    return (
        <MainLayout>
            <DocRevisionList docRevisions={docRevisions}/>
        </MainLayout>
    );
};

    export default DraftPage;
