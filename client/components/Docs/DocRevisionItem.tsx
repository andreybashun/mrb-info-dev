import React from 'react';
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import {IDocRevision} from "../../types/doc";
import {useRouter} from "next/router";
import DocOptionMenu from "./DocOptionMenu";
import DocRevisionOptionMenu from "./DocRevisionOptionMenu";




interface DocRevisionItemProps{
    docRevision: IDocRevision;

}


const DocRevisionItem:React.FC<DocRevisionItemProps> = ({docRevision}) => {
    const  router = useRouter()
    return (
        <Grid container spacing={2}>
            <ListItemButton>
                <Grid xs={5} container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    { docRevision.status === 'canceled' &&
                        <IconButton color="warning"  onClick ={() => router.push (`/docs/drafts/`+ docRevision.docId + '/' + docRevision._id)}>
                            <CancelIcon/>
                        </IconButton>
                    }
                    { docRevision.status === 'approved' &&
                        <IconButton color="success"  onClick={() => router.push ('/docs/drafts/'+ docRevision.docId + '/' + docRevision._id)}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    }
                    { docRevision.status === 'open' &&
                        <IconButton color="info"  onClick={() => router.push ('/docs/drafts/'+ docRevision.docId + '/' + docRevision._id)}>
                            <DraftsIcon/>
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

                </Grid>
                <Grid xs={1} container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                    <DocRevisionOptionMenu docRevision={docRevision}/>
                    {/*<IconButton>*/}
                    {/*    <MoreVertIcon/>*/}
                    {/*</IconButton>*/}
                </Grid>
                <Divider/>
            </ListItemButton>
        </Grid>
    );
};

export default DocRevisionItem;
