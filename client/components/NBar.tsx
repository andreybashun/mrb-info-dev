import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useRouter} from "next/router";
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import InventoryIcon from '@mui/icons-material/Inventory';
import PolicyIcon from '@mui/icons-material/Policy';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import {GetServerSideProps} from "next";
import axios from "axios";
import {IUser} from "../types/user";
import DocList from "./Docs/DocList";



interface NBarProps {
    user: IUser;
}

const NBar: React.FC<NBarProps> = ({user}) => {
    const menuItems = [
        {text: 'Инфопанель', href: '/' + user._id, icon: <HomeIcon />},
        {text: 'Задачи', href: '/'+ user._id +'/tasks', icon: <WorkHistoryIcon />},
        {text: 'Документы', href: '/'+ user._id +'/docs', icon: <LibraryBooksIcon />},
        {text: 'Совещания', href:'/'+ user._id + '/meetings', icon: <HandshakeIcon/>},
        {text: 'Группы', href: '/'+ user._id +'/groups', icon: <GroupsIcon/>},
        {text: 'Удостоверяющий центр', href: '/' + user._id +'/certificationCenter', icon: <PolicyIcon/>},
        {text: 'Репозиторий', href: '/' + user._id +'/repository', icon:  <InventoryIcon/>},
    ]
    const router = useRouter ()
    return (

        <Box  sx={{display: {md: 'flex'}}}>
            <CssBaseline/>
            <Box sx={{overflow: 'auto'}}>
                <List  sx={{marginBottom:0}}>
                    {menuItems.map ((menuItems) => (
                        <ListItem key={menuItems.href} disablePadding onClick={() => router.push (menuItems.href)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {menuItems.icon}
                                </ListItemIcon>
                                <ListItemText secondary={menuItems.text} sx={{ display: {xs: 'none', md: 'flex'}}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
export default NBar;

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const response = await axios.get ('http://localhost:5000/user/' + params.user);
    console.log (response.data)
    return {
        props: {
            user: params.user,
        }
    }
}