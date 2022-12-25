import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';
import MLayout from "../../layouts/MLayout";
import {GetServerSideProps} from "next";
import axios from "axios";

const Index = (props) => {
    return (
        <>
            <MLayout user={props.user}>
                <div>
                    <Breadcrumbs
                        useDefaultStyle
                        replaceCharacterList={[
                            {from: 'tasks', to: 'мои задачи'},
                            {from: 'Home', to: 'Login'},
                            {from: props.user._id, to: props.user.firstName[0] + '.' + props.user.secondName},
                            {from: 'drafts', to: 'проекты'},
                        ]
                        }
                    />
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
    const response = await axios.get (process.env.SERVER_HOST + 'user/' + params.user);
    console.log (response.data)
    return {
        props: {
            user: response.data,
        }
    }
}