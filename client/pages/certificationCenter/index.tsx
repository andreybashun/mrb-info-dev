import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {Popover, Stack} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import InfoIcon from '@mui/icons-material/Info';
import {useRouter} from "next/router";

type IconType = (props: IconType) => JSX.Element;

function MouseOverPopover (props) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null> (null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl (event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl (null);
    };

    const open = Boolean (anchorEl);


    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}

            >
                {props.icon}
                {/*<VerifiedUserIcon  fontSize="medium" sx={{color: "cornflowerblue"}}/>*/}
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{p: 1}}>{props.text}</Typography>
            </Popover>
        </div>
    );
}


const Index = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <Box sx={{flexGrow: 1, marginTop: 4}}>
                <Grid container spacing={4}>
                    <Grid xs={4}>

                        <Card sx={{maxWidth: 345}}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Алгоритм SHA-256
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    SHA-256 представляет собой однонаправленную функцию для создания цифровых отпечатков
                                    фиксированной длины из входных данных
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Stack direction="row"
                                       justifyContent="space-between"
                                       alignItems="center"
                                >
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<VerifiedUserIcon
                                                fontSize="medium"
                                                sx={{color: "cornflowerblue"}}
                                                onClick={() => router.push ('/certificationCenter/sha256Check')}
                                            />}
                                            text="Проверить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<HistoryEduIcon
                                                fontSize="medium"
                                                sx={{color: "cornflowerblue"}}
                                                onClick={() => router.push ('/certificationCenter/sha256Release')}
                                            />}
                                            text="Выпустить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<InfoIcon  fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Дополнительная информация"
                                        />
                                    </IconButton>
                                </Stack>

                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid xs={4}>

                        <Card sx={{maxWidth: 345}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Алгоритм SHA-256
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    SHA-256 представляет собой однонаправленную функцию для создания цифровых отпечатков
                                    фиксированной длины из входных данных
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Stack direction="row"
                                       justifyContent="space-between"
                                       alignItems="center"
                                >
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<VerifiedUserIcon fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Проверить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<HistoryEduIcon fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Выпустить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<InfoIcon  fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Дополнительная информация"
                                        />
                                    </IconButton>
                                </Stack>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid xs={4}>

                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="40"
                                image="/static/images/cards/6db8885e143be3f40386e225aed13438.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Алгоритм
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Stack direction="row"
                                       justifyContent="space-between"
                                       alignItems="center"
                                >
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<VerifiedUserIcon fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Проверить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<HistoryEduIcon fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Выпустить сертификат"
                                        />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <MouseOverPopover
                                            icon={<InfoIcon  fontSize="medium" sx={{color: "cornflowerblue"}}/>}
                                            text="Дополнительная информация"
                                        />
                                    </IconButton>
                                </Stack>
                            </CardActions>
                        </Card>

                    </Grid>

                </Grid>
            </Box>
        </MainLayout>
    );
};

export default Index;