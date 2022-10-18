import React from 'react';
import {ITasks} from "../../types/task";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AssignmentIcon from '@mui/icons-material/Assignment';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemButton from "@mui/material/ListItemButton";
import {useRouter} from "next/router";
import TaskOptionMenu from "./TaskOptionMenu";



const TaskItem= ({task}) => {
    const router = useRouter();
    console.log('/tasks/outbox/' + task._id)

    return (
        <Grid container spacing={2}>
            <ListItemButton>
            <Grid xs={5} container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center">
                <IconButton color="info"  onClick={() => router.push ('/tasks/outbox/' + task._id)}>
                    <AssignmentIcon/>
                </IconButton>
                {task.name}
            </Grid>
            <Grid xs={4}  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {task.author}
            </Grid>
            <Grid xs={2} container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {task.lastChangeDate}
            </Grid>
            <Grid xs={1} container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center">

                    <TaskOptionMenu task={task}/>

            </Grid>
            <Divider/>
                </ListItemButton>
        </Grid>

    );
};

export default TaskItem;
