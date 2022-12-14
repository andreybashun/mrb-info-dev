import React from 'react';
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import {useRouter} from "next/router";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskStageOptionMenu from "./TaskStageOptionMenu";




const TaskStageItem = ({taskStage, taskId}) => {
    const router = useRouter();
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">

                        <IconButton color="info"  onClick={() => router.push ('/user/tasks/outbox/' + taskId + '/' + taskStage._id)}>
                            <AssignmentIcon/>
                        </IconButton>

                    {taskStage.name}
                </Grid>
                <Grid xs={3}  container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStage.author}
                </Grid>

                <Grid xs={3} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStage.creationDate}
                </Grid>
                <Grid xs={1} container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                    <TaskStageOptionMenu taskStage={taskStage}/>
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default TaskStageItem;
