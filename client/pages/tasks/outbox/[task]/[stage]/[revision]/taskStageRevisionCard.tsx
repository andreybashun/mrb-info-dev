import React from 'react';
import MainLayout from "../../../../../../layouts/MainLayout";
import Breadcrumbs from "nextjs-breadcrumbs";
import {GetServerSideProps} from "next";
import axios from "axios";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const TaskStageRevisionCard = (props) => {
    const router = useRouter ()
    const {draft} = router.query;
    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'tasks', to: 'задачи'},
                    {from: 'outbox', to: 'исходящие задачи'},
                    {from: props.task._id, to: props.task.name},
                    {from: props.stage._id, to: props.stage.name},
                    {from: props.revision._id, to: props.revision.name},
                    {from: 'taskStageRevisionCard', to: 'карточка ревизии'}
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
                Учетные данные ревизии этапа задачи
                <Divider/>


                <Grid container spacing={1}  sx={{padding: 1, marginTop:0, marginBottom:1}}>
                    <Grid item xs={4} fontSize={12}>
                        ID
                    </Grid>
                    <Grid item xs={8} fontSize={12}>
                        {props.revision._id}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Децимальный номер ревизии этапа задачи
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.decId}
                    </Grid>


                    <Grid item xs={4} fontSize={12} >
                        Наименование ревизии этапа задачи
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.name}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Тип задачи
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.type}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Описнаие ревизии этапа задачи
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.discription}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Дата создаия
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.creationDate}
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Дата последнего изменения
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.lastChangeDate}
                    </Grid>
                </Grid>
                Учетные данные пользователя
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5,marginBottom:1}}>

                    <Grid item xs={4} fontSize={12}>
                        Автор
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        <Link href="/repository/Cards/persons/a_bashun">{props.revision.author}</Link>
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Организация
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.organization}
                    </Grid>
                </Grid>

                Применимость документа
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5}}>

                    <Grid item xs={4} fontSize={12}>
                        АТА
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.ata}
                    </Grid>
                    <Grid item xs={4} fontSize={12}>
                        Тип воздушного судна
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        <Link href="/repository/Cards/AircraftType/rrj-95new">{props.revision.aircraftType}</Link>
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Тип двигателя
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.revision.engineType}
                    </Grid>
                </Grid>

                Входит
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5}}>

                    <Grid item xs={4} fontSize={12}>
                        Этап
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.stage.name}
                    </Grid>
                    <Grid item xs={4} fontSize={12}>
                        Задача
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        {props.task.name}
                    </Grid>
                </Grid>
            </Stack>
        </MainLayout>
    )
};

export default TaskStageRevisionCard;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const resTask = await axios.get ('http://localhost:5000/task/' + params.task);
    const resStage = await axios.get ('http://localhost:5000/task/stage/' + params.stage);
    const resRevision = await axios.get ('http://localhost:5000/task/revision/' + params.revision);
    return {
        props: {
            task: resTask.data,
            stage: resStage.data,
            revision: resRevision.data
        }
    }
}