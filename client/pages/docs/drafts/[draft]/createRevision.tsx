import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MainLayout from "../../../../layouts/MainLayout";
import StepWrapper from "../../../../components/Tasks/StepWrapper";
import TaskDescription from "../../../../components/Tasks/TaskDescription";
import Credentials from "../../../../components/Tasks/Credentials";
import FileUpload from "../../../../components/FileUpload";
import {useInput} from "../../../../hooks/useInput";
import {useRouter} from "next/router";


const CreateRevision: React.FC = () => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState(null)
    const  type = useInput('')
    const  name = useInput('')
    const  author = useInput('')
    const status = useInput('')
    const  router = useRouter()

    const next = () => {
        setActiveStep (prev => prev + 1)
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && <Credentials/>}
                {activeStep === 1 && <TaskDescription/>}
                {activeStep === 2 &&
                    <FileUpload file={''} setFile={setFile}>
                        <Button>Загрузите</Button>
                    </FileUpload>}

                {activeStep === 3 && <h1>step3</h1>}
                {activeStep === 4 && <h1>step4</h1>}

            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 5} onClick={next}> вперед </Button>
            </Grid>
        </MainLayout>
    );
};

export default CreateRevision;