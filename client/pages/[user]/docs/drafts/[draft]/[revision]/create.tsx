import React, {useState} from 'react';
import TaskStageStepWrapper from "../../../../../../components/Tasks/TaskStageStepWrapper";
import Credentials from "../../../../../../components/Tasks/Credentials";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FileUpload from "../../../../../../components/FileUpload";
import TaskDescription from "../../../../../../components/Tasks/TaskDescription";
import {GetServerSideProps} from "next";
import axios from "axios";
import MLayout from "../../../../../../layouts/MLayout";


const Create = ({user}) => {
    const [activeStep, setActiveStep] = useState (0)
    const [setFile] = useState(null)
    const next = () => {
        setActiveStep (prev => prev + 1)
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MLayout user={user}>
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
        </MLayout>
    );
};

export default Create;

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const resUser = await axios.get (process.env.SERVER_HOST + 'user/' + params.user);
    return {
        props: {
            user: resUser.data
        }
    }
}