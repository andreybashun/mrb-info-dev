import React from 'react';
import MainLayout from "../../../../../../layouts/MainLayout";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Folder} from "@mui/icons-material";
import GradingIcon from "@mui/icons-material/Grading";
import {GetServerSideProps} from "next";
import axios from "axios";
import Breadcrumbs from "nextjs-breadcrumbs";
import {useRouter} from "next/router";


const Index = ({task, stage, revision}) => {
    const router = useRouter()
    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'tasks', to: 'мои задачи'},
                    {from: 'outbox', to: 'исходящие задачи'},
                    {from: task._id, to: 'задача: ' + task.name},
                    {from: stage._id, to: 'этап: ' + stage.name},
                    {from: revision._id, to: 'ревизия: ' + revision.name}
                ]
                }
            />
            <Stack direction={"column"} spacing={2} sx={{
                padding: 5,

            }}>
                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="contained"
                           >
                        Редактировать
                    </Button>
                    <Button size="small" variant="contained" >
                        Отозвать
                    </Button>
                    <Button size="small" variant="contained" >
                        Направить
                    </Button>
                </Stack>
                <List sx={{padding: 1, border: '1px  solid grey', borderRadius: 2}}>
                    <Grid container spacing={2}>
                        <Grid xs={8} container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                              fontSize={'0.75rem'}>
                            <Box sx={{marginTop: 2, marginLeft: 12}}>
                                Имя
                            </Box>

                        </Grid>
                        <Grid xs={2} container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              fontSize={'0.75rem'}
                        >
                            <Box sx={{marginTop: 2}}>
                                Дата изменения
                            </Box>

                        </Grid>
                        <Grid xs={2} container
                              direction="row"
                              justifyContent="flex-end"
                              alignItems="center">
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Box p={2}>
                        <Grid container spacing={2}
                              justifyContent="space-between"
                              alignItems="center">

                            <ListItemButton>
                                <Grid xs={8} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center"
                                >
                                    <IconButton color="info">
                                        <SummarizeIcon/>
                                    </IconButton>
                                    Карточка задачи
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center"
                                      fontSize={'0.8rem'}
                                >
                                    21.07.2022
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="flex-end"
                                      alignItems="center">
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </Grid>
                            </ListItemButton>
                        </Grid>
                        <Grid container spacing={2}>

                            <ListItemButton>
                                <Grid xs={8} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center">
                                    <IconButton color="info" onClick={() => router.push ('/tasks/outbox')}>
                                        <Folder/>
                                    </IconButton>
                                    Документы на подпись
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center"
                                      fontSize={'0.8rem'}
                                >
                                    21.07.2022
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="flex-end"
                                      alignItems="center">
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </Grid>
                            </ListItemButton>
                        </Grid>
                        <Grid container spacing={2}>
                            <ListItemButton>
                                <Grid xs={8} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center">
                                    <IconButton color="info">
                                        <Folder/>
                                    </IconButton>
                                    Сопроводительные документы
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center"
                                      fontSize={'0.8rem'}
                                >
                                    21.07.2022
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="flex-end"
                                      alignItems="center">
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </Grid>
                            </ListItemButton>
                        </Grid>
                        <Grid container spacing={2}>
                            <ListItemButton>
                                <Grid xs={8} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center">
                                    <IconButton color="info">
                                        <GradingIcon/>
                                    </IconButton>
                                    Удостоверяющий лист
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center"
                                      fontSize={'0.8rem'}
                                >
                                    21.07.2022
                                </Grid>
                                <Grid xs={2} container
                                      direction="row"
                                      justifyContent="flex-end"
                                      alignItems="center">
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </Grid>
                            </ListItemButton>
                        </Grid>
                    </Box>
                </List>
            </Stack>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

    const resTask = await  axios.get('http://localhost:5000/task/' + params.task)
    const resStage = await  axios.get('http://localhost:5000/task/stage/' + params.stage)
    const resRevision = await  axios.get('http://localhost:5000/task/revision/' + params.revision)
    return {
        props: {
            task: resTask.data,
            stage: resStage.data,
            revision: resRevision.data

        }
    }
}