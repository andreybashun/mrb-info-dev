import React from 'react';
import MainLayout from "../../../../layouts/MainLayout";
import DocList from "../../../../components/Docs/DocList";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../../../store";
import {fetchDocs} from "../../../../store/actions-creators/doc";
import Breadcrumbs from "nextjs-breadcrumbs";
import axios from "axios";



const Index = (props) => {

    const {docs, error} = useTypedSelector(state => state.doc)

    if (error){
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'docs', to: 'мои документы'},
                        {from: 'drafts', to: 'проекты'},
                    ]
                    }
                />
            </div>
            <DocList docs={docs} user={props.user}/>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store, params}) => {
    const  dispatch = store.dispatch as NextThunkDispatch
    const response = await axios.get ('http://localhost:5000/user/' + params.user);
    await dispatch(await fetchDocs())
    return {
        props: {
            user: response.data,
        }
    }
})
