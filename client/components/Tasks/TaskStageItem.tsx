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



const TaskStageItem = ({taskStage: taskStage}) => {
    const router = useRouter();
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    { taskStage.status === 'cancel' &&
                        <IconButton color="warning"  onClick={() => router.push ('/tasks/outbox/task/revisions')}>
                            <CancelIcon/>
                        </IconButton>
                    }
                    { taskStage.status === 'approved' &&
                        <IconButton color="success"  onClick={() => router.push ('/tasks/outbox/task/revisions')}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    }
                    {taskStage.name}
                </Grid>
                <Grid xs={2}  container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStage.author}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStage.signer}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStage.duedate}
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
