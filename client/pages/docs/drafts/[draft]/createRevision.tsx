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
import axios from "axios";
import Box from "@mui/material/Box";
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import {IDoc, IDocRevision} from "../../../../types/doc";
import {renderToString} from "react-dom/server";
import {string} from "prop-types";


interface DocItemProps {
    doc: IDoc;
}

const CreateRevision: React.FC<DocItemProps> = ({doc}) => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState(null)
    const  type = useInput('')
    const  name = useInput('')
    const  author = useInput('')
    const status = useInput('')
    const  router = useRouter()
    const {draft} = router.query
    const docId = draft + ''



    const next = () => {
        if (activeStep !== 2) {
            setActiveStep (prev => prev + 1)
        } else  {
            const  formData = new FormData()
            formData.append('type', type.value)
            formData.append('name', name.value)
            formData.append('author', author.value)
            formData.append('status', status.value)
            formData.append('docId',docId)
            formData.append('file', file)
            axios.post('http://localhost:5000/document/revision', formData)
            // axios.post('http://localhost:5000/document/revision', {
            //     type: type.value,
            //     name: name.value,
            //     author: author.value,
            //     status: status.value,
            //     docId: draft,
            //     file: file
            // })
                .then(resp => router.push('/docs/drafts/' + draft))
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
                            <TextField

                                id="task_revision_id"
                                label="идентификатор"
                                variant="outlined"
                                size="small"/>
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
                    <FileUpload setFile={setFile}>
                        <Button>Загрузите Файл</Button>
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