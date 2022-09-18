import React, {useState} from 'react';
import MainLayout from "../../../../layouts/MainLayout";

import DocRevisionList from "../../../../components/Docs/DocRevisionList";
import {IDoc, IDocRevision} from "../../../../types/doc";
import {GetServerSideProps} from "next";
import axios from "axios";

interface DocItemProps {
    doc: IDoc;
}

const Index = ({docRevisions}) => {

    return (
        <MainLayout>
            <DocRevisionList docRevisions={docRevisions} />
        </MainLayout>
    );

};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const response = await axios.get ('http://localhost:5000/document/' + params.draft)

    return {
        props: {
            docRevisions: response.data.docRevisions
        }
    }
}

