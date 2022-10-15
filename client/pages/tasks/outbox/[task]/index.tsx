import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import TaskStageList from "../../../../components/Tasks/TaskStageList";
import {GetServerSideProps} from "next";
import axios from "axios";

const Index = ({taskStage, taskId}) => {
    return (
        <MainLayout>
            <TaskStageList taskStage={taskStage} taskId={taskId}/>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

    const response = await axios.get ('http://localhost:5000/task/' + params.task);
    console.log('данные таски',response.data.taskStages)
    return {
        props: {
            taskStage: response.data.taskStages,
            taskId: params.task
        }
    }
}