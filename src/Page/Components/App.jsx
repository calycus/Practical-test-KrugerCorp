import React, { useState, useEffect } from 'react';
import {
    Fab, Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText,
} from '@mui/material';
import { Add, Edit } from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';

import { getDataVacunas } from '../../Redux/StoreComponents/storeTipoDeVacunas';
import { selectLoginData } from '../../Redux/StoreComponents/login';

import CardEmpleado from './PageComponents/cardEmpleado';
import CrudAdmin from './PageComponents/crudAdministrador';
import EmployeedFrom from './PageComponents/employeedFrom';


const Index = () => {
    const userData = useSelector(selectLoginData);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(0);
    const [fromError, setFromError] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleCardError = (data) => {
        setFromError(data);
    };



    useEffect(() => {
        (open === true) ? dispatch(getDataVacunas()) : <></>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>

            <div /* style={{ maxWidth: "60%" }} */>
                {(userData[0].id_rol === 1) ? <CrudAdmin /> : <CardEmpleado />}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "0rem 5rem 0rem 0rem", width: "100%" }}>
                <Fab color="secondary" onClick={() => setOpen(true)}>
                    {(userData[0].id_rol === 1) ? <Add /> : <Edit />}
                </Fab>
            </div>

            <EmployeedFrom
                open={open}
                update={update}
                setOpen={setOpen}
                handleClose={handleClose}
                userData={userData[0]}
            />
            
        </div>
    )
}

export default Index

