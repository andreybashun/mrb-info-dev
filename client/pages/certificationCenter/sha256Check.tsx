import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import axios from "axios";
import {IDoc} from "../../types/doc";
import {useInput} from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import FileUpload from "../../components/FileUpload";
import ShaCheckStepWraper from "../../components/CertificationCenter/ShaCheckStepWraper";



interface DocItemProps {
    doc: IDoc;
}

const Sha256Check: React.FC<DocItemProps> = ({doc}) => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState (null)
    const type = useInput ('')
    const name = useInput ('')
    const author = useInput ('')
    const status = useInput ('')
    const router = useRouter ()
    const {draft} = router.query
    const docId = draft + ''


    const next = () => {
        if (activeStep !== 1) {
            setActiveStep (prev => prev + 1)
        } else {
            const formData = new FormData ()
            console.log ('path:', docId)
            formData.append ('type', type.value)
            formData.append ('name', name.value)
            formData.append ('author', author.value)
            formData.append ('status', status.value)
            formData.append ('docId', docId)
            formData.append ('file', file)
            axios.post ('http://localhost:5000/document/revision', formData)
                // axios.post('http://localhost:5000/document/revision', {
                //     type: type.value,
                //     name: name.value,
                //     author: author.value,
                //     status: status.value,
                //     docId: draft,
                //     file: file
                // })
                .then (resp => router.push ('/docs/drafts/' + draft))
                .catch (e => console.log (e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <ShaCheckStepWraper activeStep={activeStep}>
                {activeStep === 0 && <FileUpload setFile={setFile}>
                    <Button>Загрузите Файл</Button>
                </FileUpload>}
                {activeStep === 1 &&
                    <FileUpload setFile={setFile}>
                        <Button>Загрузите Сертификат</Button>
                    </FileUpload>}

            </ShaCheckStepWraper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 1} onClick={next}> вперед </Button>
            </Grid>
        </MainLayout>
    );
};

export default Sha256Check;