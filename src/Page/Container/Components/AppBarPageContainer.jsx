import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { Menu } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const AppBarPageContainer = ({ open, setOpen }) => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <AppBar position="fixed" open={open} sx={{ color: "white" }}>
                <Toolbar className='ToolbarStyle'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <div className='headerDivContainer'>
                        <Typography variant="h6" noWrap component="div">
                        Inventario de vacunación de empleados
                            {/*  {userData.firstName +" "+ userData.lastName} */}
                        </Typography>
                    </div>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default AppBarPageContainer

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));