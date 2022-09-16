import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MainLayout from "../../../layouts/MainLayout";
import Credentials from "../../../components/Tasks/Credentials";
import TaskDescription from "../../../components/Tasks/TaskDescription";
import FileUpload from "../../../components/FileUpload";
import {useInput} from "../../../hooks/useInput";
import Box from "@mui/material/Box";
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {useRouter} from "next/router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import DocStepWrapper from "../../../components/Docs/DocStepWraper";


const CreateDraft = () => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState (null)
    const type = useInput ('')
    const name = useInput ('')
    const author = useInput ('')
    const status = useInput ('')
    const router = useRouter ()

    const [open, setOpen] = React.useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const next = () => {
        if (activeStep !== 1) {
            setActiveStep (prev => prev + 1)
        } else {
            axios.post ('http://localhost:5000/document/', {
                type: type.value,
                name: name.value,
                author: author.value,
                status: status.value,
            })
                .then (resp => {
                    setOpen(true)
                    router.push ('/docs/drafts')
                })
                .catch (e => console.log (e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <DocStepWrapper activeStep={activeStep}>
                {activeStep === 0 &&

                    <Box>
                        <FormControl fullWidth sx={{p: 1}}>
                            <TextField
                                {...type}
                                id={"task_type"}
                                label={"тип"}
                                variant="outlined"
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}}>
                            <TextField id="task_id" label="идентификатор" variant="outlined" size="small"/>
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}}>
                            <TextField
                                {...name}
                                id="task_name"
                                label={"имя"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl sx={{p: 1, width: '50ch'}}>
                            <TextField
                                {...author}
                                id={"task_author"}
                                label={"автор"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>
                        <FormControl sx={{p: 1, marginLeft: 10, width: '25ch',}}>
                            <TextField id="task_author" label="дата создания" variant="outlined" size="small"/>
                        </FormControl>
                        <FormControl sx={{p: 1, width: '50ch'}}>
                            <TextField
                                {...status}
                                id="task_author"
                                label="статус"
                                variant="outlined"
                                size="small"/>
                        </FormControl>
                        <FormControl sx={{p: 1, marginLeft: 10, width: '25ch',}}>
                            <TextField id="task_author" label="дата модификации" variant="outlined"
                                       size="small"/>
                        </FormControl>

                    </Box>
                }
                {activeStep === 1 && <TaskDescription/>}
            </DocStepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 2} onClick={next}> вперед </Button>
            </Grid>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </div>
        </MainLayout>
    );
};

export default CreateDraft;