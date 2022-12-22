import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';
import MLayout from "../../layouts/MLayout";
import {GetServerSideProps} from "next";
import axios from "axios";

const Index = (props) => {
    return (
        <>
            <MLayout user = {props.user}>
                <div>
                    <Breadcrumbs useDefaultStyle rootLabel="Home"/>
                </div>
                <div>
                    <h2>DASHBOARD</h2>
                </div>
            </MLayout>
        </>

    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const response = await axios.get ('http://localhost:5000/user/' + params.user);
    console.log(response.data)
    return {
        props: {
            user: response.data,
        }
    }
}