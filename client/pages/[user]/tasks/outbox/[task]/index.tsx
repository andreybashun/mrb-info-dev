import React from 'react';
import MainLayout from "../../../../../layouts/MainLayout";
import TaskStageList from "../../../../../components/Tasks/TaskStageList";
import {GetServerSideProps} from "next";
import axios from "axios";
import Breadcrumbs from "nextjs-breadcrumbs";

const Index = ({taskStage, taskId, task}) => {
    return (
        <MainLayout>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'tasks', to: 'мои задачи'},
                        {from: 'outbox', to: 'исходящие задачи'},
                        {from: task._id, to: 'задача: ' + task.name}
                    ]
                    }
                />
            </div>
            <TaskStageList taskStage={taskStage} taskId={taskId}/>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

    const response = await axios.get ('http://localhost:5000/task/' + params.task);
    return {
        props: {
            taskStage: response.data.taskStages,
            task:response.data,
            taskId: params.task
        }
    }
}