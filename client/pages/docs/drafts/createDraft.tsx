import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MainLayout from "../../../layouts/MainLayout";
import StepWrapper from "../../../components/Tasks/StepWrapper";
import Credentials from "../../../components/Tasks/Credentials";
import TaskDescription from "../../../components/Tasks/TaskDescription";
import FileUpload from "../../../components/FileUpload";
import {useInput} from "../../../hooks/useInput";
import Box from "@mui/material/Box";
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {useRouter} from "next/router";
import {router} from "next/client";




const CreateDraft = () => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState(null)
    const  type = useInput('')
    const  name = useInput('')
    const  author = useInput('')
    const status = useInput('')
    // const  router = useRouter()

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep (prev => prev + 1)
        } else  {
            // const  formData = new FormData()
            // formData.append('type', type.value)
            // formData.append('name', name.value)
            // formData.append('author', author.value)
            // formData.append('status', status.value)
            axios.post('http://server:5000/document', {
                type: type.value,
                name: name.value,
                author: author.value,
                status: status.value
            })
                .then(resp => router.push('/docs/drafts'))
                .catch(e => console.log(e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&

                    <Box>
                        <FormControl fullWidth sx={{p:1}}>
                            <TextField
                                {...type}
                                id={"task_revision_type"}
                                label={"тип"}
                                variant="outlined"
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ p: 1}}>
                            <TextField id="task_revision_id" label="идентификатор" variant="outlined" size="small"/>
                        </FormControl>
                        <FormControl fullWidth sx={{ p: 1}}>
                            <TextField
                                {...name}
                                id="task_revision_name"
                                label={"имя"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl  sx={{ p: 1, width: '50ch' }}>
                            <TextField
                                {...author}
                                id={"task_revision_author"}
                                label={"автор"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl  sx={{ p: 1, marginLeft:10, width: '25ch',}}>
                            <TextField id="task_revision_author" label="дата создания" variant="outlined" size="small"/>
                        </FormControl>
                        <FormControl  sx={{ p: 1, width: '50ch' }}>
                            <TextField
                                {...status}
                                id="task_revision_author"
                                label="статус"
                                variant="outlined"
                                size="small"/>
                        </FormControl>
                        <FormControl  sx={{ p: 1, marginLeft:10, width: '25ch',}}>
                            <TextField id="task_revision_author" label="дата модификации" variant="outlined" size="small"/>
                        </FormControl>

                    </Box>

                }
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

export default CreateDraft;