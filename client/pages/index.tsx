import React from 'react';
import Navbar from "../components/Navbar";
import {ThemeProvider} from "@mui/material";
import {myTheme} from "../MyTheme";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div>
                    <h2>DASHBOARD</h2>
                </div>
            </MainLayout>
        </>

    );
};

export default Index;