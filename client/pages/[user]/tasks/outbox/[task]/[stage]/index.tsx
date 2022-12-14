import React from 'react';
import MainLayout from "../../../../../../layouts/MainLayout";
import {GetServerSideProps} from "next";
import axios from "axios";
import TaskStageRevisionList from "../../../../../../components/Tasks/TaskStageRevisionList";
import Breadcrumbs from "nextjs-breadcrumbs";

const Index = ({taskStageRevision, taskId, stageId, stage, task}) => {
    return (
        <MainLayout>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'tasks', to: 'мои задачи'},
                        {from: 'outbox', to: 'исходящие задачи'},
                        {from: taskId, to: 'задача: ' + task.name},
                        {from: stageId, to: 'этап:' + stage.name},
                    ]
                    }
                />
            </div>
            <TaskStageRevisionList taskStageRevision={taskStageRevision} taskId={taskId} stageId={stageId}/>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

    const response = await axios.get ('http://localhost:5000/task/stage/' + params.stage);
    const res = await  axios.get('http://localhost:5000/task/' + response.data.taskId)

    return {
        props: {
            taskStageRevision: response.data.taskStageRevisions,
            taskId: params.task,
            stageId: params.stage,
            stage:response.data,
            task: res.data

        }
    }
}