import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MainLayout from "../../../layouts/MainLayout";
import Credentials from "../../../components/Tasks/Credentials";
import FileUpload from "../../../components/FileUpload";
import {useInput} from "../../../hooks/useInput";
import Box from "@mui/material/Box";
import {FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {useRouter} from "next/router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import DocStepWrapper from "../../../components/Docs/DocStepWraper";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import DocDescription from "../../../components/Docs/docDescription";


const CreateDraft = () => {
    const [activeStep, setActiveStep] = useState (0);
    const [file, setFile] = useState (null);

    const type = useInput ('');
    const name = useInput ('');
    const author = useInput ('Bashun');
    const discription = useInput ('');
    const decId = useInput ('');
    const lastChangeDate = useInput ('');
    const organization = useInput ('');
    const ata = useInput ('');
    const aircraftType = useInput ('');
    const engineType = useInput ('');
    const creationDate = useInput ('');

    const router = useRouter ();


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

    const [documentType, setType] = React.useState ('');

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType (event.target.value);
    };

    const [status, setStatus] = React.useState ('');

    const handleStatusChange = (event: SelectChangeEvent) => {
        console.log('document status',event.target.value);

          setStatus (event.target.value);

        console.log('document status',event.target.value);
    };

    const [aircraft, setAircraft] = React.useState ('');

    const handleAircraftChange = (event: SelectChangeEvent) => {
        setAircraft(event.target.value);
    };

    const [engine, setEngine] = React.useState ('');

    const handleEngineChange = (event: SelectChangeEvent) => {
        setEngine(event.target.value);
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

            axios.post ('http://localhost:5000/document/', {
                type: type.value,
                name: name.value,
                author: author.value,
                status: {status},
                discription: discription.value,
                decId: decId.value,
                lastChangeDate: date.toLocaleDateString (),
                organization: organization.value,
                ata: ata.value,
                aircraftType: aircraftType.value,
                engineType: engineType.value,
                creationDate:  date.toLocaleDateString (),
            })
                .then (resp => {
                    setOpen (true)
                    router.push ({pathname: '/docs/drafts/' + resp.data._id})
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

                    <Box sx={{p: 1}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип документа</InputLabel>
                            <Select
                                {...type}
                                labelId="select-small"
                                id="select-small"
                                value={documentType}
                                label="Тип документа"
                                onChange={handleTypeChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>MSG-3</MenuItem>\
                                <MenuItem value={10}>Tech-doc</MenuItem>
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
                                label={"Наименование документа"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        <DocDescription/>

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
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Статус документа</InputLabel>
                            <Select
                                onChange={handleStatusChange}
                                labelId="select-small"
                                id="select-small"
                                value={status}
                                label="Статус документа"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Archived"}>Archived</MenuItem>
                                <MenuItem  value={"Active"}>Active</MenuItem>

                            </Select>

                            {status}
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
                                //disabled={true}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...organization}
                                id={"organization"}
                                label={"организация"}
                                variant={"outlined"}
                                size={"small"}
                                value={"ФРС"}
                               // disabled={true}
                            />
                        </FormControl>
                    </Box>
                    }
                {activeStep === 2 &&
                    <Box sx={{p:1, width:'800px'}}>
                        <FormControl fullWidth sx={{ paddingBottom:2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип самолета</InputLabel>
                            <Select
                                {...aircraftType}
                                labelId="select-small"
                                id="select-small"
                                label="Тип самолета"
                                onChange={handleAircraftChange}
                                value={aircraft}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>RRJ</MenuItem>\
                                <MenuItem value={10}>RRJ-NEW</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ paddingBottom:2}} size="small">
                            <InputLabel id="select-small" sx={{paddingRight: 1}}>Тип двигателя</InputLabel>
                            <Select
                                {...engineType}
                                labelId="select-small"
                                id="select-small"
                                value={engine}
                                label="Тип самолета"
                                onChange={handleEngineChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>PD-8</MenuItem>\
                                <MenuItem value={10}>CFM56</MenuItem>
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

export default CreateDraft;