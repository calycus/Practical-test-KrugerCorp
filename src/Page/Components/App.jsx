import { Fab } from '@mui/material';
import * as React from 'react';
import { Add, Edit } from '@mui/icons-material/';
import { useSelector } from 'react-redux';

import { selectUserRol } from '../../Redux/StoreComponents/roleSelection';
import CardEmpleado from './PageComponents/cardEmpleado';
import CrudAdmin from './PageComponents/crudAdministrador';

const Index = () => {
    const rol = useSelector(selectUserRol)
    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>

            <div style={{ maxWidth: "60%" }}>
                {(rol === "Administador") ? <CrudAdmin /> : <CardEmpleado />}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "0rem 5rem 0rem 0rem", width: "100%" }}>
                <Fab color="secondary" >
                    {(rol === "Administador") ? <Add /> : <Edit />}
                </Fab>
            </div>
        </div>
    )
}

export default Index