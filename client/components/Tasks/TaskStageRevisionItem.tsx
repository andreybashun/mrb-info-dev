import React from 'react';
import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskStageRevisionOptionMenu from "./TaskStageRevisionOptionMenu";
import {IUser} from "../../types/user";
import {ITasks, ITaskStage, ITaskStageRevision} from "../../types/task";

interface TaskStageRevisionItemProps {
    user: IUser;
    task: ITasks;
    taskStage: ITaskStage;
    taskStageRevision:ITaskStageRevision;
    serverHost:string
}

const TaskStageRevisionItem:React.FC<TaskStageRevisionItemProps> = ({taskStageRevision, task, user, serverHost}) => {
    const router = useRouter();
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                        <IconButton color="info"  onClick={() => router.push ('/' +
                            user._id + '/tasks/outbox/' + task._id + '/'+ taskStageRevision.taskStageId + '/' + taskStageRevision._id)}>
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
                    <TaskStageRevisionOptionMenu taskStageRevision={taskStageRevision} user={user} serverHost={serverHost}/>
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default TaskStageRevisionItem;