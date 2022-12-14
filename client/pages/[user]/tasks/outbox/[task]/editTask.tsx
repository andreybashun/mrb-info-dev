import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useInput} from "../../../../../hooks/useInput";
import Box from "@mui/material/Box";
import {FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {useRouter} from "next/router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import DocStepWrapper from "../../../../../components/Docs/DocStepWraper";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Breadcrumbs from "nextjs-breadcrumbs";
import {GetServerSideProps} from "next";
import MLayout from "../../../../../layouts/MLayout";


const EditTask = (props) => {
    const [activeStep, setActiveStep] = useState (0);
    const name = useInput (props.task.name);
    const author = useInput (props.task.author);
    const discription = useInput (props.task.discription);
    const decId = useInput (props.task.decId);
    const lastChangeDate = useInput (props.task.lastChangeDate);
    const organization = useInput (props.task.organization);
    const ata = useInput (props.task.ata);
    const creationDate = useInput (props.task.creationDate);
    const router = useRouter ();


    const [open, setOpen] = useState (false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen (false);
    };

    const [type, setType] = React.useState (props.task.type);

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType (event.target.value);
    };

    const [status, setStatus] = React.useState (props.task.status);

    const handleStatusChange = (event: SelectChangeEvent) => {
        console.log ('document status', event.target.value);

        setStatus (event.target.value);

        console.log ('document status', event.target.value);
    };

    const [aircraftType, setAircraftType] = React.useState (props.task.aircraftType);

    const handleAircraftChange = (event: SelectChangeEvent) => {
        setAircraftType (event.target.value);
    };

    const [engineType, setEngineType] = React.useState (props.task.engineType);

    const handleEngineChange = (event: SelectChangeEvent) => {
        setEngineType (event.target.value);
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

            axios.put (props.path + props.taskId, {
                type: type,
                name: name.value,
                author: author.value,
                status: status,
                description: discription.value,
                decId: decId.value,
                lastChangeDate: date.toLocaleDateString (),
                organization: organization.value,
                ata: ata.value,
                aircraftType: aircraftType,
                engineType: engineType,
                creationDate: date.toLocaleDateString (),
            })
                .then (resp => {
                    setOpen (true)
                    router.push ({pathname: '/' + props.user._id + '/tasks/outbox/' + resp.data._id})
                })
                .catch (e => console.log (e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MLayout user={props.user}>
            <Breadcrumbs
                useDefaultStyle
                replaceCharacterList={[
                    {from: 'tasks', to: '?????? ????????????'},
                    {from: 'outbox', to: '?????????????????? ????????????'},
                    {from: 'createTask', to: '???????????????? ????????????'},
                    {from: props.user._id, to: props.user.firstName[0] + '.' + props.user.secondName},
                ]
                }
            />
            <DocStepWrapper activeStep={activeStep}>
                {activeStep === 0 &&

                    <Box sx={{p: 1}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>?????? ????????????</InputLabel>
                            <Select
                                onChange={handleTypeChange}
                                labelId="select-small"
                                id="select-small"
                                value={type}
                                label="?????? ????????????"
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
                                label={"?????????????????????? ??????????"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...name}
                                id={"name"}
                                label={"???????????????????????? ????????????"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        {/*<DocDescription/>*/}

                        <Box sx={{p: 1, width: '95ch'}}>
                            <TextField
                                {...discription}
                                id="task_revision_name"
                                label="???????????????? ????????????"
                                multiline
                                fullWidth
                                rows={3}
                                sx={{marginRight: 1, display: 'flex'}}
                            />
                        </Box>

                        <FormControl sx={{paddingBottom: 2, paddingTop: 2, width: '25ch'}}>
                            <TextField
                                {...creationDate}
                                id={"creationDate"}
                                label={"???????? ????????????????"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl sx={{paddingBottom: 2, paddingTop: 2, marginLeft: 10, width: '25ch',}}>
                            <TextField
                                {...lastChangeDate}
                                id={"creationDate"}
                                label={"???????? ???????????????????? ??????????????????"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>???????????? ????????????</InputLabel>
                            <Select
                                onChange={handleStatusChange}
                                labelId="select-small"
                                id="select-small"
                                value={status}
                                label="???????????? ????????????"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Archived"}>Archived</MenuItem>
                                <MenuItem value={"Active"}>Active</MenuItem>

                            </Select>

                        </FormControl>

                    </Box>
                }
                {activeStep === 1 &&
                    <Box sx={{p: 1, width: '800px'}}>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...author}
                                id={"author"}
                                label={"??????????"}
                                variant={"outlined"}
                                size={"small"}
                                value={"Bashun"}
                                //disabled={true}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...organization}
                                id={"organization"}
                                label={"??????????????????????"}
                                variant={"outlined"}
                                size={"small"}
                                value={"FRS"}
                                // disabled={true}
                            />
                        </FormControl>
                    </Box>
                }
                {activeStep === 2 &&
                    <Box sx={{p: 1, width: '800px'}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>?????? ????????????????</InputLabel>
                            <Select
                                labelId="select-small"
                                id="select-small"
                                label="?????? ????????????????"
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
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>?????? ??????????????????</InputLabel>
                            <Select
                                onChange={handleEngineChange}
                                labelId="select-small"
                                id="select-small"
                                label="?????? ??????????????????"
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
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> ?????????? </Button>
                <Button size="small" variant="contained" disabled={activeStep === 3} onClick={next}> ???????????? </Button>
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
        </MLayout>
    );
};

export default EditTask;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get (process.env.SERVER_HOST + 'task/' + params.task);
    const resUser = await axios.get (process.env.SERVER_HOST + 'user/' + params.user);
    return {
        props: {
            task: response.data,
            taskId: params.task,
            user: resUser.data,
            serverHost:process.env.SERVER_HOST,
        }
    }
}