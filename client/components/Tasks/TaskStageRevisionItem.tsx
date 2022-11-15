import React from 'react';
import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListItemIcon from "@mui/material/ListItemIcon";
import DocRevisionOptionMenu from "./TaskStageRevisionOptionMenu";
import TaskStageRevisionOptionMenu from "./TaskStageRevisionOptionMenu";


const TaskStageRevisionItem = ({taskStageRevision, taskId}) => {
    const router = useRouter();
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                        <IconButton color="info"  onClick={() => router.push ('/tasks/outbox/' + taskId + '/'+ taskStageRevision.taskStageId + '/' + taskStageRevision._id)}>
                            <AssignmentIcon/>
                        </IconButton>
                    {taskStageRevision.name}
                </Grid>
                <Grid xs={2}  container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStageRevision.author}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStageRevision.signer}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskStageRevision.duedate}
                </Grid>
                <Grid xs={1} container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                    <TaskStageRevisionOptionMenu taskStageRevision={taskStageRevision}/>
                    {/*<IconButton>*/}
                    {/*    <MoreVertIcon/>*/}
                    {/*</IconButton>*/}
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default TaskStageRevisionItem;