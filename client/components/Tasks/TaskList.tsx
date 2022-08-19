import React from 'react';
import {ITasks} from "../../types/task";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TaskItem from "./TaskItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import AddTaskIcon from '@mui/icons-material/AddTask';

interface TaskListProps {
    tasks: ITasks[]
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return (
        <Stack direction={"column"} spacing={2} sx={{
            padding: 5,
        }}>
            <Stack direction="row" spacing={2}>
                <Button size="small" variant="contained" startIcon={<AddTaskIcon/>}>
                    Создать задачу
                </Button>
            </Stack>
            <List sx={{padding: 1, border: '1px  solid grey', borderRadius: 2}}>
                <Grid container spacing={2}>
                    <Grid xs={5} container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          fontSize={'0.75rem'}>
                        <Box sx={{marginTop: 2, marginLeft: 12}}>
                            Имя задачи
                        </Box>
                        <Divider/>

                    </Grid>
                    <Grid xs={4} container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          fontSize={'0.75rem'}
                    >
                        <Box sx={{marginTop: 2}}>
                            автор
                        </Box>

                    </Grid>
                    <Grid xs={2} container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          fontSize={'0.75rem'}>
                        <Box sx={{marginTop: 2}}>
                            Дата изменения
                        </Box>
                    </Grid>
                    <Grid xs={1} container></Grid>
                </Grid>
                <Divider/>

                <Box p={2}>
                    {tasks.map (tasks => {
                            if (tasks.author === 'Bashun') {
                                return (<TaskItem key={tasks._id} tasks={tasks}/>)
                            }
                        }
                    )}
                </Box>
            </List>
        </Stack>
    );
};

export default TaskList;