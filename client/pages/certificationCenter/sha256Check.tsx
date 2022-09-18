import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import axios from "axios";
import {IDoc} from "../../types/doc";
import {useInput} from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import FileUpload from "../../components/FileUpload";
import ShaCheckStepWraper from "../../components/CertificationCenter/ShaCheckStepWraper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";





interface DocItemProps {
    doc: IDoc;
}

const Sha256Check: React.FC<DocItemProps> = ({doc}) => {
    const [activeStep, setActiveStep] = useState (0)
    const [file, setFile] = useState (null)
    const [certificate, setCertificate] = useState(null)
    const router = useRouter ()

    const [SuccessModalOpen, setSuccessModalOpen] = React.useState (false);
    const handleSuccessModalOpen = () => setSuccessModalOpen (true);
    const handleSuccessModalClose = () => setSuccessModalOpen (false);

    const [FailModalOpen, setFailModalOpen] = React.useState (false);
    const handleFailModalOpen = () => setFailModalOpen (true);
    const handleFailModalClose = () => setFailModalOpen (false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        bgcolor: 'background.paper',
        border: '1px solid #757575',
        boxShadow: 24,
        p: 2,
        borderRadius: 2
    };

    const next = () => {

        if (activeStep !== 2) {
            setActiveStep (prev => prev + 1)
        } else {
            const  HashData = new FormData()
            HashData.append('file', certificate)
            axios.post('http://localhost:5000/crypto/hash', HashData)
                .then(resp => {
                    const uploadedHash = resp.data
                    const  SHA256Data = new FormData()
                    SHA256Data.append('file', file)
                    axios.post('http://localhost:5000/crypto/sha256', SHA256Data)
                        .then(resp =>  {
                            const calculatedHash = resp.data
                            if (uploadedHash === calculatedHash){
                                setSuccessModalOpen(true)
                            }
                            else {
                                setFailModalOpen(true)
                            }
                        })
                })
        }

    }
    const back = () => {
        setActiveStep (prev => prev - 1)
    }

    return (
        <MainLayout>
            <ShaCheckStepWraper activeStep={activeStep}>
                {activeStep === 0 && <FileUpload setFile={setFile}>
                    <Button>Загрузите Файл</Button>
                </FileUpload>}
                {activeStep === 1 && <FileUpload setFile={setCertificate}>
                        <Button>Загрузите Сертификат</Button>
                    </FileUpload>}
                {activeStep === 2 && <Box sx={{padding:1}}>
                    Нажмите далее для проверки сертификата
                </Box>}

            </ShaCheckStepWraper>
            <Grid container justifyContent={"space-between"}>
                <Button size="small" variant="contained" disabled={activeStep === 0} onClick={back}> назад </Button>
                <Button size="small" variant="contained" disabled={activeStep === 3} onClick={next}> вперед </Button>
            </Grid>
            <Modal
                open={SuccessModalOpen}
                onClose={handleSuccessModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align={"center"}>
                        Внимание
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}} align={"center"}>
                        Действительный сертификат
                    </Typography>
                    <Typography id="modal-modal-description" variant="subtitle2" sx={{mt: 2}} align={"center"}>
                        Вы можете сформировать и выгрузить протокол проверки сертификата
                    </Typography>
                    <Button onClick={() => {
                        handleSuccessModalClose()
                    }
                    }
                            variant="outlined" color={"info"} sx={{mt: 2, marginTop: 2, marginLeft: 22,}}>Ок
                    </Button>
                </Box>
            </Modal>
            <Modal
                open={FailModalOpen}
                onClose={handleFailModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align={"center"}>
                        Внимание
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}} align={"center"}>
                        Сертификат не прошел проверкую. Возможно используется другой алгоритм шифрования.
                    </Typography>
                    <Typography id="modal-modal-description" variant="subtitle2" sx={{mt: 2}} align={"center"}>
                        Сформировать и выгрузить протокол проверки сертификата
                    </Typography>
                    <Button onClick={() => {
                        handleFailModalClose()
                    }
                    }
                            variant="outlined" color={"info"} sx={{mt: 2, marginTop: 2, marginLeft: 22,}}>Ок
                    </Button>
                </Box>
            </Modal>
        </MainLayout>
    );
};

export default Sha256Check;