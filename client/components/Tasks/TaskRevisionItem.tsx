import React from 'react';
import {ITaskRevision} from "../../types/task";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import {router} from "next/client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


interface TaskRevisionItemProps{
    taskRevision: ITaskRevision;
}

const TaskRevisionItem:React.FC<TaskRevisionItemProps> = ({taskRevision}) => {
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    { taskRevision.status === 'cancel' &&
                        <IconButton color="warning"  onClick={() => router.push ('/tasks/outbox/task/revisions')}>
                            <CancelIcon/>
                        </IconButton>
                    }
                    { taskRevision.status === 'approved' &&
                        <IconButton color="success"  onClick={() => router.push ('/tasks/outbox/task/revisions')}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    }
                    {taskRevision.name}
                </Grid>
                <Grid xs={2}  container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskRevision.author}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskRevision.signer}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {taskRevision.duedate}
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

export default TaskRevisionItem;
