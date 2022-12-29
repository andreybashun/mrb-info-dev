import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FileUpload from "../../../../../components/FileUpload";
import {useInput} from "../../../../../hooks/useInput";
import {useRouter} from "next/router";
import axios from "axios";
import Box from "@mui/material/Box";
import {FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import {jsPDF} from "jspdf";
import {GetServerSideProps} from "next";
import MLayout from "../../../../../layouts/MLayout";
import Breadcrumbs from "nextjs-breadcrumbs";
import DocRevisionStepWrapper from "../../../../../components/Docs/DocRevisionStepWraper";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CreateRevision = ({user, serverHost, draft}) => {
    const [activeStep, setActiveStep] = useState (0);
    const [file, setFile] = useState (null);
    const name = useInput ('');
    const description = useInput ('');
    const author = user._id;
    const router = useRouter ();
    const [certificateFile, setCertificateFile] = useState (null);
    const [hash, setHash] = useState (null);
    const decId = useInput ('');
    const lastChangeDate = useInput ('');
    const creationDate = useInput ('');
    const organization = user.organization;
    const ata = draft.ata;
    const aircraftType = draft.aircraftType;
    const engineType = draft.engineType;
    const type = draft.type;


    const next = () => {

        if (activeStep !== 4) {
            setActiveStep (prev => prev + 1)
        } else {
            const formData = new FormData ()
            formData.append ('type', type);
            formData.append ('name', name.value);
            formData.append ('author', author);
            formData.append ('organization', user.organization);
            formData.append ('status', status);
            formData.append ('docId', draft._id);
            formData.append ('file', file);
            formData.append ('hash', hash);
            formData.append ('certificateList', certificateFile);
            formData.append ('ata', ata);
            formData.append ('aircraftType', draft.aircraftType);
            formData.append ('engineType', draft.engineType);
            formData.append ('description', description.value);
            formData.append ('lastChangeDate ',date.toLocaleDateString ());
            formData.append ('creationDate', date.toLocaleDateString ());
            axios.post (serverHost + 'document/revision', formData)
                .then (() => router.push ('/' + user._id + '/docs/drafts/' + draft._id))
                .catch (e => console.log (e))
        }
    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }
    const date = new Date ();

    const [certificateSheet, setCertificateSheet] = useState (false);
    const handleCertificateSheet = () => {
        axios.post (serverHost + 'crypto/sha256', file)
            .then (resp => {
                setHash (resp.data)
                const doc = new jsPDF ();
                const date = new Date ();
                doc.text (resp.data, 10, 10);
                doc.text ("Certificate released:", 10, 20)
                doc.text ("id: " + Date.now (), 10, 30)
                doc.text ("date: " + date.toLocaleDateString () + " " + date.toLocaleTimeString (), 10, 40);
                doc.text ("file: " + file.name, 10, 50);
                doc.cell (10, 280, 190, 10, "Creation Request                    MRB Platform                https://mrb-info.ru", 1, "")
                setCertificateFile (doc)
                setCertificateSheet (true)
            })
            .catch (e => console.log (e))
    }

    const [status, setStatus] = React.useState ('');

    const handleStatusChange = (event: SelectChangeEvent) => {
        console.log ('document status', event.target.value);

        setStatus (event.target.value);

        console.log ('document status', event.target.value);
    };

    return (
        <MLayout user={user}>
            <div>
                <Breadcrumbs
                    useDefaultStyle
                    replaceCharacterList={[
                        {from: 'docs', to: 'мои документы'},
                        {from: 'drafts', to: 'проекты'},
                        {from: user._id, to: user.firstName[0] + '.' + user.secondName},
                        {from: 'createRevision', to: 'создание ревизии'},
                        {from: draft._id, to: draft.name}
                    ]
                    }
                />
            </div>
            <DocRevisionStepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Box sx={{p: 1, width: '800px'}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...aircraftType}
                                id={"type"}
                                label={"тип воздушного судна"}
                                variant={"outlined"}
                                size={"small"}
                                value={draft.aircraftType}
                                disabled={true}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...engineType}
                                id={"type"}
                                label={"тип двигателя"}
                                variant={"outlined"}
                                size={"small"}
                                value={draft.engineType}
                                disabled={true}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 0}} size="small">
                            <TextField
                                {...ata}
                                id={"ata"}
                                label={"ATA"}
                                variant={"outlined"}
                                size={"small"}
                                value={draft.ata}
                                disabled={true}
                            />
                        </FormControl>

                    </Box>
                }
                {activeStep === 1 &&

                    <Box sx={{p: 1}}>
                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...type}
                                id={"Тип ревизии"}
                                label={"Тип ревизии"}
                                variant={"outlined"}
                                size={"small"}
                                value={draft.type}
                                disabled={true}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...decId}
                                id={"decId"}
                                label={"Децимальный номер ревизии"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
                            <TextField
                                {...name}
                                id={"name"}
                                label={"Наименование ревизии"}
                                variant={"outlined"}
                                size={"small"}
                            />
                        </FormControl>

                        <Box sx={{p: 1, width: '95ch'}}>
                            <TextField
                                {...description}
                                id="task_revision_name"
                                label="описание ревизии"
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
                                label={"дата создания"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl sx={{paddingBottom: 2, paddingTop: 2, marginLeft: 10, width: '25ch',}}>
                            <TextField
                                {...lastChangeDate}
                                id={"creationDate"}
                                label={"дата последнего изменения"}
                                variant={"outlined"}
                                size={"small"}
                                value={date.toLocaleDateString ()}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{paddingBottom: 2}} size="small">
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
                                <MenuItem value={"open"}>Open</MenuItem>
                                <MenuItem value={"approved"}>Approved</MenuItem>
                                <MenuItem value={"canceled"}>Canceled</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                }
                {activeStep === 2 &&
                    <Box sx={{p: 1, width: '800px'}}>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...author}
                                id={"author"}
                                label={"автор"}
                                variant={"outlined"}
                                size={"small"}
                                value={user.firstName[0] + '.' + user.secondName}
                                disabled={true}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{p: 1}} size="small">
                            <TextField
                                {...organization}
                                id={"organization"}
                                label={"организация"}
                                variant={"outlined"}
                                size={"small"}
                                value={user.organization}
                                disabled={true}
                            />
                        </FormControl>
                    </Box>
                }

                {activeStep === 3 &&
                    <Box>
                        <FileUpload setFile={setFile} next={next}>
                            <Button onClick={handleCertificateSheet}>Загрузите Файл</Button>
                        </FileUpload>
                    </Box>

                }
                {activeStep === 4 &&
                    <Box>
                        <Button>Выпустить удостоверяющий лист</Button>
                    </Box>

                }


            </DocRevisionStepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 5} onClick={next}> вперед </Button>
            </Grid>
        </MLayout>
    );
};

export default CreateRevision;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get (process.env.SERVER_HOST + 'user/' + params.user);
    const respDoc = await axios.get (process.env.SERVER_HOST + 'document/' + params.draft);
    return {
        props: {
            user: response.data,
            draft: respDoc.data,
            serverHost: process.env.SERVER_HOST,
        }
    }
}