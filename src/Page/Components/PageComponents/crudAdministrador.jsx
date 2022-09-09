import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography, TextField } from '@mui/material';


//Dependencias
import { selectEmployee } from '../../../Redux/StoreComponents/addEmployeeStore';
import "./crudAdministrador.css"


let viewRowsTable = [];

export default function SubjectDataTable() {
    viewRowsTable = useSelector(selectEmployee)

    const dispatch = useDispatch();
    const [RowsTable, setRows] = useState([])
    const [Search, setSearch] = useState(false)
    const [checked, setChecked] = useState(-1);

    const handleSelects = (data) => {

    }

    const requestSearch = (searchedVal) => {
        if (searchedVal.length == 0) {
            setSearch(false)
            return
        }
         const filteredRows = viewRowsTable.filter((row) => {
             return row.materia.toLowerCase().includes(searchedVal.toLowerCase());
         });
         setRows(filteredRows)
        setSearch(true)
    };

    const isDisabled = (data) => {
        setChecked(data);
    };

    return (
        <Card className='cardEmpleado'>
            {
                (viewRowsTable.length === 0)
                    ?
                    <CustomTable
                        Search={Search}
                        requestSearch={requestSearch}
                        viewRowsTable={viewRowsTable}
                        RowsTable={RowsTable}
                        checked={checked}
                        handleSelects={handleSelects}
                        isDisabled={isDisabled}
                    />
                    :
                    (<div><span>No Existen Empleados Registrados</span></div>)
            }
        </Card>
    )
}

const CustomTable = ({ Search, requestSearch, viewRowsTable, RowsTable, checked, handleSelects, isDisabled }) => {
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
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead style={{ display: "flex", paddingTop: "1.5rem" }}>
                        <TableRow
                            style={{ width: '100%', display: 'flex', /* gridTemplateColumns: '3rem auto 7rem 2rem' */ }}>
                            <TableCell style={{ width: "20%", content: " " }}></TableCell>
                            <TableCell style={{ width: "100%" }}/* className='rowTableMateria' */>Cedula</TableCell>
                            <TableCell style={{ width: "100%" }}/* className='rowTable' */ >Nombre</TableCell>
                            <TableCell style={{ width: "100%" }}/* className='rowTable' */ >Apellido</TableCell>
                            <TableCell style={{ width: "100%" }}/* className='rowTable' */ >Correo</TableCell>
                            <TableCell style={{ width: "20%", content: " " }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', maxHeight: '350px' }}>
                        {!Search ?
                            viewRowsTable.map((row, index) => (
                                <Fila
                                    key={index}
                                    index={index}
                                    row={row}
                                    checked={checked}
                                    handleSelects={handleSelects}
                                    isDisabled={isDisabled}
                                />
                            ))
                            : RowsTable.map((row, index) => (
                                <Fila
                                    key={index}
                                    index={index}
                                    row={row}
                                    checked={checked}
                                    handleSelects={handleSelects}
                                    isDisabled={isDisabled}
                                />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    )
}

const Fila = ({ row, handleSelects, isDisabled, index, checked }) => {
    return (
        <TableRow
            style={{ display: 'grid', gridTemplateColumns: '3rem auto 7rem 1rem', alignItems: 'center' }}
        >
            <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                <Checkbox
                    color="success"
                    checked={checked == index}
                    onChange={(e) => isDisabled(e.target.value)}
                    onClick={() => handleSelects(row)}
                    value={index}
                />
            </TableCell>
            <TableCell className='rowTableMateria' >{row.cedula}</TableCell>
            <TableCell className='rowTable' >{row.nombre}</TableCell>
            <TableCell className='rowTable' >{row.apellido}</TableCell>
            <TableCell className='rowTable' >{row.correo}</TableCell>
        </TableRow>
    )
}
