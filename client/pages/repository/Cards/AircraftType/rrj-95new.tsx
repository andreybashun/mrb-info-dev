import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import Breadcrumbs from "nextjs-breadcrumbs";
import {Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";


const Rrj95New = () => {

    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'repository', to: 'репозиторий'},
                    {from: 'Cards', to: 'карточки'},
                    {from: 'AircraftType', to: 'типы водушных судов'},
                    {from: 'rrj-95new', to: 'RRJ-95NEW'}
                ]
                }

            />
            <Stack direction={"column"} spacing={0} sx={{
                padding: 5,
            }}>

                Учетные данные пользовател
                <Divider/>
                <Grid container spacing={1}  sx={{padding: 1, marginTop:0, marginBottom:1}}>
                    <Grid item xs={4} fontSize={12}>
                        ID
                    </Grid>
                    <Grid item xs={8} fontSize={12}>
                        infodba
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Фамилия
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        Башун
                    </Grid>

                    <Grid item xs={4} fontSize={12} >
                        Имя
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                       Андрей
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Отчество
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        Аркадьевич
                    </Grid>

                </Grid>

                Оргнаизация
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5,marginBottom:1}}>


                    <Grid item xs={4} fontSize={12}>
                        Организация
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        ФРС
                    </Grid>

                    <Grid item xs={4} fontSize={12}>
                        Позиция
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        Главный специалист
                    </Grid>
                </Grid>

                Контакты
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5}}>


                    <Grid item xs={4} fontSize={12}>
                        email
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        a.a.bashun@gmail.com
                    </Grid>
                    <Grid item xs={4} fontSize={12}>
                        телефон
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        8916-243-0316
                    </Grid>
                </Grid>

                активность
                <Divider/>

                <Grid container spacing={1}  sx={{padding: 1, marginTop:0.5}}>


                    <Grid item xs={4} fontSize={12}>
                        Дата регистрации
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        20.11.2022
                    </Grid>
                    <Grid item xs={4} fontSize={12}>
                        Дата последнего входа в систему
                    </Grid>
                    <Grid item xs={8}  fontSize={12}>
                        20.11.2022
                    </Grid>
                </Grid>
            </Stack>
        </MainLayout>
    )
};

export default Rrj95New;