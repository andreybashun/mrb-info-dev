import React, {useState} from 'react';
import MainLayout from "../../../../../../layouts/MainLayout";
import TaskStageStepWrapper from "../../../../../../components/Tasks/TaskStageStepWrapper";
import Credentials from "../../../../../../components/Tasks/Credentials";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FileUpload from "../../../../../../components/FileUpload";
import TaskDescription from "../../../../../../components/Tasks/TaskDescription";


const Create = () => {
    const [activeStep, setActiveStep] = useState (0)
    const [setFile] = useState(null)
    const next = () => {
        setActiveStep (prev => prev + 1)
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <TaskStageStepWrapper activeStep={activeStep}>
                {activeStep === 0 && <Credentials/>}
                {activeStep === 1 && <TaskDescription/>}
                {activeStep === 2 &&
                    <FileUpload next={next} setFile={setFile}>
                        <Button>Загрузите</Button>
                    </FileUpload>}

                {activeStep === 3 && <h1>step3</h1>}
                {activeStep === 4 && <h1>step4</h1>}

            </TaskStageStepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 5} onClick={next}> вперед </Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;

