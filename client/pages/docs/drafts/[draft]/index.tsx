import React, {useState} from 'react';
import MainLayout from "../../../../layouts/MainLayout";

import DocRevisionList from "../../../../components/Docs/DocRevisionList";
import {IDoc, IDocRevision} from "../../../../types/doc";
import {GetServerSideProps} from "next";
import axios from "axios";
import Breadcrumbs from "nextjs-breadcrumbs";

interface DocItemProps {
    doc: IDoc;
}

const Index = ({docRevisions, document}) => {

    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'docs', to: 'мои документы'},
                    {from: 'drafts', to: 'проекты'},
                    {from: document, to: 'документ'},
                ]
                }
            />
            <DocRevisionList docRevisions={docRevisions} />
        </MainLayout>
    );

};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const response = await axios.get ('http://localhost:5000/document/' + params.draft);
    return {
        props: {
            docRevisions: response.data.docRevisions,
            document: params.draft
        }
    }
}

