import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useRouter} from "next/router";


const menuItems = [
    {text: 'Инфопанель', href: '/'},
    {text: 'Задачи', href: '/tasks'},
    {text: 'Документы', href: '/docs'},
    {text: 'Совещания', href: '/meetings'}

]

export default function Navbar () {
    const router = useRouter ()
    return (
        <Box  sx={{display: {md: 'flex'}}}>
            <CssBaseline/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {menuItems.map (({text, href}, index) => (
                        <ListItem key={href} disablePadding onClick={() => router.push (href)}>
                            <ListItemButton >
                                <ListItemIcon >
                                    {index % 1 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{display: {xs: 'none', md: 'flex'}}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{display: {md: 'flex'}}}/>
                <List>
                    {['Репозиторий'].map ((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{display: {xs: 'none', md: 'flex'}}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
