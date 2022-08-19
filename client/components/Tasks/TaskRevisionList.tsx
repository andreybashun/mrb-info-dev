import React from 'react';
import {ITaskRevision} from "../../types/task";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TaskRevisionItem from "./TaskRevisionItem";
import AddCardIcon from '@mui/icons-material/AddCard';

interface TaskRevisionListProps{
    taskRevisions:ITaskRevision[]
}

const TaskRevisionList: React.FC<TaskRevisionListProps> = ({taskRevisions}) => {
    return (
        <Stack direction={"column"} spacing={2} sx={{
            padding: 5,
        }}>
            <Stack direction="row" spacing={2}>
                <Button size="small" variant="contained" startIcon={<AddCardIcon />}>
                    Создать ревизию
                </Button>
            </Stack>
            <List  sx={{padding:1, border: '1px  solid grey', borderRadius: 2}}>
                <Grid container spacing={2}>
                    <Grid xs={5} container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          fontSize={'0.75rem'}>
                        <Box sx={{marginTop:2, marginLeft:12}}>
                            Имя ревизии
                        </Box>
                        <Divider/>

                    </Grid>
                    <Grid xs={2} container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          fontSize={'0.75rem'}
                    >
                        <Box sx={{marginTop:2}}>
                            автор
                        </Box>

                    </Grid>
                    <Grid xs={2} container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          fontSize={'0.75rem'}>
                        <Box sx={{marginTop:2}}>
                            Согласующий
                        </Box>
                    </Grid>
                    <Grid xs={2} container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          fontSize={'0.75rem'}>
                        <Box sx={{marginTop:2}}>
                            Дата изменнеия
                        </Box>
                    </Grid>
                    <Grid xs={1} container></Grid>
                </Grid>
                <Divider/>
                <Box p={2}>
                    {taskRevisions.map(taskRevisions =>
                        <TaskRevisionItem key={taskRevisions._id} taskRevision={taskRevisions}/>
                    )}
                </Box>
            </List>
        </Stack>
    );
};

export default TaskRevisionList;
