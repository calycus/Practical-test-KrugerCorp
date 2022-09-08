import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Components
import RotuerSwitchComponent from '../../Router/routerSwitchComponent'
import AppBarPageContainer from './Components/AppBarPageContainer';
import DrawerPageContainer from './Components/DrawerPageContainer';
import DrawerHeaderComponent from './Components/DrawerHeaderComponent';
//Css
import './PageContainer.css'



const PageContainer = () => {
    const theme = useTheme();
    const location = useLocation();
    const DrawerHeader = DrawerHeaderComponent()
    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(true);


    useEffect(() => {
        setOpenUser(false)
    }, [open]);

    return (
        <Box sx={{ display: 'flex' }}>
            <div style={{
                'display': (location.pathname === "/" || location.pathname === "/404_not_found")
                    ? 'none'
                    : 'flex',
            }}>
                <CssBaseline />
                <AppBarPageContainer
                    open={open}
                    setOpen={setOpen}
                />
                <DrawerPageContainer
                    open={open}
                    setOpen={setOpen}
                    setOpenUser={setOpenUser}
                    openUser={openUser}
                    DrawerHeader={DrawerHeader}
                />


            </div>
            <Box component="main"
                sx={{
                    backgroundColor: theme.palette.background.main,
                    height: "100vh",
                    flexGrow: 1,
                    'p': (location.pathname === "/" || location.pathname === "/404_not_found")
                        ? 0
                        : 3
                }}>
                <DrawerHeader style={{
                    'display': (location.pathname === "/" || location.pathname === "/404_not_found")
                        ? 'none'
                        : 'flex'
                }} />
                <RotuerSwitchComponent />
            </Box>
        </Box >
    )
}

export default PageContainer



