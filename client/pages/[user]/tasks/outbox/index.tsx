import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import {GetServerSideProps} from "next";
import axios from "axios";
import TaskList from "../../../../components/Tasks/TaskList";
import Breadcrumbs from "nextjs-breadcrumbs";


const Index =  ({tasks}) => {
   console.log(tasks)
    return (

        <MainLayout>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'tasks', to: 'мои задачи'},
                        {from: 'outbox', to: 'исходящие задачи'},
                    ]
                    }
                />
            </div>
           <TaskList tasks={tasks}/>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (req) => {

    const response = await axios.get ('http://localhost:5000/task/');
    return {
        props: {
            tasks: response.data,
        }
    }
}