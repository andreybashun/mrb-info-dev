import React from 'react';
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import {router} from "next/client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {IDocRevision} from "../../types/doc";
import {useRouter} from "next/router";



interface DocRevisionItemProps{
    docRevision: IDocRevision;
}


const DocRevisionItem:React.FC<DocRevisionItemProps> = ({docRevision}) => {
    const  rout = useRouter()
    const {id} = rout.query
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    { docRevision.status === 'canceled' &&
                        <IconButton color="warning"  onClick={() => router.push (`http://localhost:3000/docs/drafts/draft/`+ docRevision._id)}>
                            <CancelIcon/>
                        </IconButton>
                    }
                    { docRevision.status === 'approved' &&
                        <IconButton color="success"  onClick={() => router.push ('http://localhost:3000/docs/drafts/draft/'+ docRevision._id)}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    }
                    {docRevision.name}
                </Grid>
                <Grid xs={2}  container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {docRevision.author}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {docRevision.status}
                </Grid>
                <Grid xs={2} container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {docRevision.duedate}
                </Grid>
                <Grid xs={1} container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default DocRevisionItem;
