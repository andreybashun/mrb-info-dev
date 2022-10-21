import React, {useEffect} from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import Breadcrumbs from "nextjs-breadcrumbs";
import DocRevisionList from "../../../../components/Docs/DocRevisionList";
import {GetServerSideProps} from "next";
import axios from "axios";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const taskCard = (props) => {
    const router = useRouter ()
    const {draft} = router.query;
    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'tasks', to: 'мои задачи'},
                    {from: 'outbox', to: 'исходящие задачи'},
                    {from: props.taskId, to: 'задача'},
                    {from: 'taskCard', to: 'карточка задачи'}
                ]
                }

            />
            <Stack direction={"column"} spacing={0} sx={{
                padding: 5,
            }}>
                <Stack direction="row" spacing={2}>
                    <Button size="small" sx={{marginBottom:2}} variant="contained" onClick={() =>
                        router.push ('/docs/drafts/' + draft + '/editDraft/')}
                    >
                        Редактировать
                    </Button>
                </Stack>
                Учетные данные задачи
                <Divider/>


                <Grid container spacing={1}  sx={{padding: 1, marginTop:0, marginBottom:1}}>
                    <Grid item xs={4} fontSize={12}>
                        ID
                    </Grid>
                    <Grid item xs={8} fontSize={12}>
                        {props.task._id}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Децимальный номер документа
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.decId}
                    </Grid>


                    <Grid item xs={4} fontSize={12} >
                        Наименование документа
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.name}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Тип документа
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.type}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Описнаие документа
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.discription}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Дата создаия
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.creationDate}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Дата последнего изменения
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.lastChangeDate}
                    </Grid>
                </Grid>
                Учетные данные пользователя
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5,marginBottom:1}}>

                    <Grid item xs={4} fontSize={12}>
                        Автор
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.author}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Организация
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.organization}
                    </Grid>
                </Grid>
                Применимость задачи
                <Divider/>
                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5}}>

                    <Grid item xs={4} fontSize={12}>
                        АТА
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.ata}
                    </Grid>
                    <Grid item xs={4} fontSize={12}>
                        Тип воздушного судна
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.aircraftType}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Тип двигателя
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.engineType}
                    </Grid>
                </Grid>

            </Stack>
        </MainLayout>
    )
};

export default taskCard;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const response = await axios.get ('http://localhost:5000/task/' + params.task);
    return {
        props: {
            task: response.data,
            taskId: params.task
        }
    }
}