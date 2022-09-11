import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { Add, Edit } from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux';

import { getDataVacunas } from '../../Redux/StoreComponents/storeTipoDeVacunas';
import { selectLoginData } from '../../Redux/StoreComponents/login';
import { setDataEmployee, setUpdateForEmployee, selectDataEmpleado, selectEmployee } from '../../Redux/StoreComponents/addEmployeeStore';

import CardEmpleado from './PageComponents/cardEmpleado';
import CrudAdmin from './PageComponents/crudAdministrador';
import EmployeedFrom from './PageComponents/employeedFrom';


const Index = () => {
    const userData = useSelector(selectLoginData);
    const dataEmpleado = useSelector(selectDataEmpleado);
    const arrayEmpleados = useSelector(selectEmployee);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(0);
    const [clearDataControler, setClearDataControler] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setClearDataControler(false)
    };

    const handleAddData = () => {
        setOpen(true)
        setUpdate(0)
        setClearDataControler(true)
    }
    const handleUpdateData = () => {
        setOpen(true)
        setUpdate(1)
        setClearDataControler(false)
    }

    useEffect(() => {
        (open === true) ? dispatch(getDataVacunas()) : <></>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        (userData[0].id_rol === 2) ? dispatch(setUpdateForEmployee(userData[0].user)) : <></>
    }, [userData]);

    useEffect(() => {
        (dataEmpleado.cedula !== "") ? dispatch(setDataEmployee(dataEmpleado)) : <></>
    }, [dataEmpleado]);

    useEffect(() => {
        (dataEmpleado.cedula !== "") ? dispatch(setUpdateForEmployee(dataEmpleado.cedula)) : <></>
    }, [arrayEmpleados]);

    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>

            <div >
                {(userData[0].id_rol === 1) ? <CrudAdmin /> : (userData[0].id_rol === 2) ? <CardEmpleado /> : <></>}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "0.5rem 3rem 0rem 0rem", width: "100%" }}>
                <Fab color="secondary" onClick={() => {
                    (userData[0].id_rol === 1) ? handleAddData() : handleUpdateData()
                }}>
                    {(userData[0].id_rol === 1) ? <Add /> : (userData[0].id_rol === 2) ? <Edit /> : <></>}
                </Fab>
            </div>
            <EmployeedFrom
                open={open}
                handleClose={handleClose}
                update={update}
                userData={userData[0]}
                clearDataControler={clearDataControler}
            />
        </div>
    )
}

export default Index

