import React from 'react';
import MainLayout from "../../../../../layouts/MainLayout";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import {Folder} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {router} from "next/client";
import GradingIcon from '@mui/icons-material/Grading';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {GetServerSideProps} from "next";
import axios from "axios";
import TaskStageRevisionList from "../../../../../components/Tasks/TaskStageRevisionList";
import Breadcrumbs from "nextjs-breadcrumbs";

const Index = ({taskStageRevision, taskId, stageId}) => {
    return (
        <MainLayout>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'tasks', to: 'мои задачи'},
                        {from: 'outbox', to: 'исходящие задачи'},
                        {from: taskId, to: 'этапы задачи'},
                        {from: stageId, to: 'ревизии этапа'},
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
    console.log('данные таски',response.data.taskStages, params.task, params.stage)
    return {
        props: {
            taskStageRevision: response.data.taskStageRevisions,
            taskId: params.task,
            stageId: params.stage
        }
    }
}