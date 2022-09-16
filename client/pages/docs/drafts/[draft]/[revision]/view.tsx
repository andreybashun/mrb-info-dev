import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";

const DocViewer=({docRevision}) => {
    console.log('ключ', docRevision.key)
    const  path = 'https://storage.yandexcloud.net/mrb-doc/' + docRevision.key

    return (
            <iframe  src={path} height="760px" width="100%"/>
    )
}
export default DocViewer

export const getServerSideProps: GetServerSideProps = async ({params}) =>{

    const response = await  axios.get('http://localhost:5000/document/revision/' + params.revision)
    return {
        props:{
            docRevision: response.data
        }
    }
}