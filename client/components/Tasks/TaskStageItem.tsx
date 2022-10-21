import React from 'react';
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import {router} from "next/client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useRouter} from "next/router";
import AssignmentIcon from "@mui/icons-material/Assignment";




const TaskStageItem = ({taskStage, taskId}) => {
    const router = useRouter();
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">

                        <IconButton color="info"  onClick={() => router.push ('/tasks/outbox/' + taskId + '/' + taskStage._id)}>
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
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default TaskStageItem;