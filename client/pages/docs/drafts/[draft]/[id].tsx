import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {router} from "next/client";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArticleIcon from "@mui/icons-material/Article";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GradingIcon from "@mui/icons-material/Grading";

const RevisionPage = () => {
    return (
        <MainLayout>
            <Stack direction={"column"} spacing={2} sx={{
                padding: 5,

            }}>
                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="contained" onClick={() =>
                        router.push ('/docs/drafts/draft/revision/create')}
                    >
                        Редактировать
                    </Button>
                    <Button size="small" variant="contained">
                        Создать УЛ
                    </Button>
                    <Button size="small" variant="contained">
                        Согласовать
                    </Button>
                </Stack>
                <List sx={{padding: 1, border: '1px  solid grey', borderRadius: 2}}>
                    <Grid container spacing={2}>
                        <Grid xs={7} container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                              fontSize={'0.75rem'}>
                            <Box sx={{marginTop: 2, marginLeft: 10}}>
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
                              justifyContent="flex-start"
                              alignItems="center"
                              fontSize={'0.75rem'}
                              marginLeft={4}
                        >
                            <Box sx={{marginTop: 2}}>
                                Данные
                            </Box>

                        </Grid>
                        <Grid xs={1} container
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
                                <Grid xs={7} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center"
                                >
                                    <IconButton color="info">
                                        <SummarizeIcon/>
                                    </IconButton>
                                    Карточка документа
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
                                      justifyContent="center"
                                      alignItems="center"
                                >
                                    <IconButton color="default">
                                        <SummarizeIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid xs={1} container
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
                                <Grid xs={7} container
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center">
                                    <IconButton color="info" onClick={() => router.push ('/docs/drafts')}>
                                        <ArticleIcon/>
                                    </IconButton>
                                    Техническое описание изменения
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
                                      justifyContent="center"
                                      alignItems="center"
                                >
                                    <IconButton color="warning">
                                        <PictureAsPdfIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid xs={1} container
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
                                <Grid xs={7} container
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
                                      justifyContent="center"
                                      alignItems="center"
                                >
                                    <IconButton color="warning">
                                        <PictureAsPdfIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid xs={1} container
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

    export default RevisionPage;