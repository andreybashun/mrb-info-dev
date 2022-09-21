import React from 'react';
import Navbar from "../components/Navbar";
import {myTheme} from "../MyTheme";
import { Paper, ThemeProvider} from "@mui/material";
import Appbar from "../components/Appbar";
import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import StyledBreadcrumb from "../components/Tasks/StyledBreadcrumb";
import Calendar from "../components/Calendar";


type Props = {
    children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <Grid container spacing={2} columns={20}>
                    <Grid item xs={20}>
                            <Appbar/>
                    </Grid>
                    <Grid item xs={3} md={3.7} sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Navbar/>
                    </Grid>
                    <Grid item xs={20} sm={12} md={12.5}>
                        <List>
                            {/*<Box sx={{*/}
                            {/*    height: 30*/}
                            {/*}}>*/}
                            {/*    <StyledBreadcrumb/>*/}
                            {/*</Box>*/}
                            <div>
                                {children}
                            </div>
                        </List>

                    </Grid>
                    <Grid item xs={3} sm={4} md={3.8} sx={{display: {xs: 'none', sm: 'block'}}}>
                        <List>
                            <Calendar/>
                        </List>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default MainLayout;
