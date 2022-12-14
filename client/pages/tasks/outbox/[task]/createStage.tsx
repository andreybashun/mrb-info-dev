import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MainLayout from "../../../../layouts/MainLayout";
import Credentials from "../../../../components/Tasks/Credentials";
import FileUpload from "../../../../components/FileUpload";
import {useInput} from "../../../../hooks/useInput";
import Box from "@mui/material/Box";
import {FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {useRouter} from "next/router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import DocStepWrapper from "../../../../components/Docs/DocStepWraper";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import DocDescription from "../../../../components/Docs/docDescription";
import Breadcrumbs from "nextjs-breadcrumbs";
import {GetServerSideProps} from "next";


const CreateSatge = (props) => {
    const [activeStep, setActiveStep] = useState (0);
    const [file, setFile] = useState (null);
    const name = useInput ('');
    const author = useInput ('A.Bashun');
    const discription = useInput ('');
    const decId = useInput ('');
    const lastChangeDate = useInput ('');
    const organization = useInput ('ФРС');
    const ata = useInput ('');
    const creationDate = useInput ('');
    const router = useRouter ();
    const {task} = router.query;
    const taskId = task + '';

    const [open, setOpen] = useState (false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen (false);
    };


    const [documentName, setName] = React.useState ('');

    const handleNameChange = (event: SelectChangeEvent) => {
        setName (event.target.value);
    };

    const [type, setType] = React.useState ('');

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType (event.target.value);
    };

    const [status, setStatus] = React.useState ('');

    const handleStatusChange = (event: SelectChangeEvent) => {
        console.log('document status',event.target.value);

        setStatus (event.target.value);

        console.log('document status',event.target.value);
    };

    const [aircraftType, setAircraftType] = React.useState ('');

    const handleAircraftChange = (event: SelectChangeEvent) => {
        setAircraftType(event.target.value);
    };

    const [engineType, setEngineType] = React.useState ('');

    const handleEngineChange = (event: SelectChangeEvent) => {
        setEngineType(event.target.value);
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
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
    const date = new Date ();


    const next = () => {

        if (activeStep !== 2) {
            setActiveStep (prev => prev + 1)
        } else {

            axios.post ('http://localhost:5000/task/stage', {
                type: type,
                name: name.value,
                author: author.value,
                status: status,
                discription: discription.value,
                decId: decId.value,
                lastChangeDate: date.toLocaleDateString (),
                organization: organization.value,
                ata: ata.value,
                aircraftType: aircraftType,
                engineType: engineType,
                creationDate:  date.toLocaleDateString (),
                taskId:taskId
            })
                .then (resp => {
                    setOpen (true)
                    router.push ({pathname: '/tasks/outbox/' + resp.data.taskId + '/' + resp.data._id})
                })
                .catch (e => console.log (e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'tasks', to: 'мои задачи'},
                    {from: 'outbox', to: 'исходящие задачи'},
                    {from: taskId, to: 'задача: ' + props.task.name},
                    {from: 'createStage', to: 'создание этапа'}
                ]
                }
            />
            <DocStepWrapper activeStep={activeStep}>
                {activeStep === 0 &&

                    <Box sx={{p: 1}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип этапа</InputLabel>
                            <Select
                                onChange={handleTypeChange}
                                labelId="select-small"
                                id="select-small"
                                value={type}
                                label="Тип этапа"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"MSG-3"}>MSG-3</MenuItem>\
                                <MenuItem value={"Tech-doc"}>Tech-doc</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...decId}
                                id={"decId"}
                                label={"Децимальный номер"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...name}
                                id={"name"}
                                label={"Наименование этапа"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        {/*<DocDescription/>*/}

                        <Box  sx={{p:1, width:'95ch'}}>
                            <TextField
                                {...discription}
                                id="task_revision_name"
                                label="описание документа"
                                multiline
                                fullWidth
                                rows={3}
                                sx={{marginRight:1, display:'flex'}}
                            />
                        </Box>

                        <FormControl sx={{paddingBottom: 2, paddingTop: 2,width: '25ch'}}>
                            <TextField
                                {...creationDate}
                                id={"creationDate"}
                                label={"дата создания"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl sx={{paddingBottom: 2,  paddingTop: 2, marginLeft: 10, width: '25ch',}}>
                            <TextField
                                {...lastChangeDate}
                                id={"creationDate"}
                                label={"дата последнего изменения"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl  fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Статус этапа</InputLabel>
                            <Select
                                onChange={handleStatusChange}
                                labelId="select-small"
                                id="select-small"
                                value={status}
                                label="Статус этапа"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Archived"}>Archived</MenuItem>
                                <MenuItem  value={"Active"}>Active</MenuItem>

                            </Select>

                        </FormControl>

                    </Box>
                }
                {activeStep === 1 &&
                    <Box sx={{p:1, width:'800px'}}>
                        <FormControl fullWidth sx={{p:1}} size="small">
                            <TextField
                                {...author}
                                id={"author"}
                                label={"автор"}
                                variant={"outlined"}
                                size={"small"}
                                value={"Bashun"}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...organization}
                                id={"organization"}
                                label={"организация"}
                                variant={"outlined"}
                                size={"small"}
                                value={"FRS"}
                            />
                        </FormControl>
                    </Box>
                }
                {activeStep === 2 &&
                    <Box sx={{p:1, width:'800px'}}>
                        <FormControl fullWidth sx={{ paddingBottom:2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип самолета</InputLabel>
                            <Select
                                labelId="select-small"
                                id="select-small"
                                label="Тип самолета"
                                onChange={handleAircraftChange}
                                value={aircraftType}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"RRJ"}>RRJ</MenuItem>\
                                <MenuItem value={"RRJ-NEW"}>RRJ-NEW</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ paddingBottom:2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип двигателя</InputLabel>
                            <Select
                                onChange={handleEngineChange}
                                labelId="select-small"
                                id="select-small"
                                label="Тип двигателя"
                                value={engineType}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"PD-8"}>PD-8</MenuItem>\
                                <MenuItem value={"CFM56"}>CFM56</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{p: 0}} size="small">
                            <TextField
                                {...ata}
                                id={"ata"}
                                label={"ATA"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                    </Box>
                }
            </DocStepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 3} onClick={next}> вперед </Button>
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

export default CreateSatge;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const resTask = await  axios.get('http://localhost:5000/task/' + params.task)
    return {
        props: {
            task: resTask.data
        }
    }
}