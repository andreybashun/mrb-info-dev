import React from 'react';
import {GetServerSideProps} from "next";
import axios from "axios";

const CertificateViewer=({docRevision}) => {

    const  path = 'https://storage.yandexcloud.net/mrb-doc/' + docRevision.certificateFile

    return (
        <iframe  src={path} height="760px" width="100%"/>
    )
}
export default CertificateViewer

export const getServerSideProps: GetServerSideProps = async ({params}) =>{

    const response = await  axios.get('http://localhost:5000/document/revision/' + params.revision)
    return {
        props:{
            docRevision: response.data
        }
    }
}