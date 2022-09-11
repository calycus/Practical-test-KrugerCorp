import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

//Dependencias
import { selectEmployee, setDataEmployee } from '../../../Redux/StoreComponents/addEmployeeStore';
import { selectLoginData } from '../../../Redux/StoreComponents/login';
import { getDataVacunas } from '../../../Redux/StoreComponents/storeTipoDeVacunas';
import EmployeedFrom from './employeedFrom';
import "./crudAdministrador.css"


let viewRowsTable = [];

export default function SubjectDataTable() {
    viewRowsTable = useSelector(selectEmployee)
    const userData = useSelector(selectLoginData);

    const dispatch = useDispatch();
    const [RowsTable, setRows] = useState([])
    const [Search, setSearch] = useState(false)
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(0);
    const [fromError, setFromError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setUpdate(0)
    };

    const handleCardError = (data) => {
        setFromError(data);
    };


    const handleDataUpdate = (data) => {
        dispatch(setDataEmployee(data))
        setUpdate(1)
        setOpen(true)
    }

    const requestSearch = (searchedVal) => {
        if (searchedVal.length == 0) {
            setSearch(false)
            return
        }
        const filteredRows = viewRowsTable.filter((row) => {
            return row.cedula.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows)
        setSearch(true)

    };

    useEffect(() => {
        (open === true) ? dispatch(getDataVacunas()) : <></>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Card className='cardCrudEmpleado'>
            {
                (viewRowsTable.length !== 0)
                    ?
                    <CustomTable
                        Search={Search}
                        requestSearch={requestSearch}
                        viewRowsTable={viewRowsTable}
                        RowsTable={RowsTable}
                        handleDataUpdate={handleDataUpdate}
                        open={open}
                        update={update}
                        handleClose={handleClose}
                        userData={userData}
                        handleCardError={handleCardError}
                    />
                    :
                    (<div><span>No Existen Empleados Registrados</span></div>)
            }
        </Card>
    )
}

const CustomTable = (
    { Search, requestSearch, viewRowsTable, RowsTable, handleDataUpdate,
        open, update, handleClose, userData }
) => {
    return (
        <CardContent className='cardContentEmpleado'>
            <TableContainer component={Paper}>
                <Box sx={{ display: 'flex', alignItems: "flex-end" }}>
                    <Typography
                        className='TableTitleRepitenciaPorMateria'
                        component="div"
                    >
                        TABLA DE EMPLEADOS
                    </Typography>
                    <TextField
                        sx={{ display: 'flex', width: 400 }}
                        id="standard-basic"
                        label="Search"
                        variant="standard"
                        onChange={(e) => requestSearch(e.target.value)} />
                </Box>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead style={{ display: "flex", paddingTop: "1.5rem" }}>
                        <TableRow
                            style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)' }}>
                            <TableCell className='tableGrid'>Cedula</TableCell>
                            <TableCell className='tableGrid'>Nombre</TableCell>
                            <TableCell className='tableGrid'>Apellido</TableCell>
                            <TableCell className='tableGrid' style={{ display: "flex" }}>Correo</TableCell>
                            <TableCell className='tableGrid'>Estado</TableCell>
                            <TableCell className='tableGrid'>Vacuna</TableCell>
                            <TableCell className='tableGrid'>F. Vacunacion</TableCell>
                            <TableCell className='tableGrid'>Contraceña</TableCell>
                            <TableCell className='tableGrid'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', maxHeight: '350px' }}>
                        {!Search ?
                            viewRowsTable.map((row, index) => (
                                <Fila
                                    key={index}
                                    row={row}
                                    handleDataUpdate={handleDataUpdate}
                                />
                            ))
                            : RowsTable.map((row, index) => (
                                <Fila
                                    key={index}
                                    row={row}
                                    handleDataUpdate={handleDataUpdate}
                                />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <EmployeedFrom
                open={open}
                handleClose={handleClose}
                update={update}
                userData={userData[0]}
            />

        </CardContent >
    )
}

const Fila = ({ row, handleDataUpdate }) => {
    return (
        <TableRow
            style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', /* alignItems: 'center' */ }}
        >
            <TableCell className='tableGrid'>{row.cedula}</TableCell>
            <TableCell className='tableGrid'>{row.nombre}</TableCell>
            <TableCell className='tableGrid'>{row.apellido}</TableCell>
            <TableCell className='tableGrid'>{row.correo}</TableCell>
            <TableCell className='tableGrid'>{(row.estadoVacunacion === "") ? "N/A" : row.estadoVacunacion}</TableCell>
            <TableCell className='tableGrid'>{(row.tipoDeVacuna === "") ? "N/A" : row.tipoDeVacuna}</TableCell>
            <TableCell className='tableGrid'>N/A</TableCell>
            <TableCell className='tableGrid'>{row.password}</TableCell>
            <TableCell className='tableGrid'>
                <Button onClick={() => handleDataUpdate(row)}>
                    <Edit />
                </Button>
            </TableCell>
        </TableRow>
    )
}


