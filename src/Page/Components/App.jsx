import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Slide } from '@mui/material';
import * as React from 'react';
import { Add, Edit } from '@mui/icons-material/';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectUserRol } from '../../Redux/StoreComponents/roleSelection';
import CardEmpleado from './PageComponents/cardEmpleado';
import CrudAdmin from './PageComponents/crudAdministrador';
import EmployeedFrom from './PageComponents/employeedFrom';

const Index = () => {
    const rol = useSelector(selectUserRol);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>

            <div style={{ maxWidth: "60%" }}>
                {(rol !== "Administador") ? <CrudAdmin /> : <CardEmpleado />}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "0rem 5rem 0rem 0rem", width: "100%" }}>
                <Fab color="secondary" onClick={handleClickOpen}>
                    {(rol === "Administador") ? <Add /> : <Edit />}
                </Fab>
            </div>

            <EmployeedFrom
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
            />
        </div>
    )
}

export default Index

