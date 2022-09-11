import * as React from 'react';
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, Divider, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectUpdateDataEmployee, selectEmployee } from '../../../Redux/StoreComponents/addEmployeeStore';
import "./cardEmpleado.css"
import { useState } from 'react';
import { useEffect } from 'react';

const CardEmpleado = () => {
    const userEmployeed = useSelector(selectUpdateDataEmployee);
    const [openAletDialog, setOpenAletDialog] = useState(false)
    const [dataUser, setDataUser] = useState({
        cedula: "",
        nombre: "",
        apellido: "",
        estadoVacunacion: "",
        correo: "",
        fechaNacimiento: "",
        edad: 0,
        direccion: "",
        telefono: "",
        tipoDeVacuna: "",
        dosisNumero: 0,
        fechaDeVacunacion: "",
        password: "",
        id: 2
    })

    const getDataUser = () => {
        setDataUser({
            ...dataUser,
            cedula: userEmployeed.cedula,
            nombre: userEmployeed.nombre,
            apellido: userEmployeed.apellido,
            estadoVacunacion: userEmployeed.estadoVacunacion,
            correo: userEmployeed.correo,
            fechaNacimiento: userEmployeed.fechaNacimiento,
            edad: userEmployeed.edad,
            direccion: userEmployeed.direccion,
            telefono: userEmployeed.telefono,
            tipoDeVacuna: userEmployeed.tipoDeVacuna,
            dosisNumero: userEmployeed.dosisNumero,
            fechaDeVacunacion: userEmployeed.fechaDeVacunacion,
        })
    }

    const dataValidation = () => {
        (
            userEmployeed.nombre === "" ||
            userEmployeed.apellido === "" ||
            userEmployeed.estadoVacunacion === "" ||
            userEmployeed.correo === "" ||
            userEmployeed.fechaNacimiento === "" ||
            userEmployeed.edad === "" ||
            userEmployeed.direccion === "" ||
            userEmployeed.telefono === "" ||
            userEmployeed.tipoDeVacuna === "" ||
            userEmployeed.dosisNumero === "" ||
            userEmployeed.fechaDeVacunacion.length === 0
        )
            ? setOpenAletDialog(true)
            : setOpenAletDialog(false)
    }

    useEffect(() => {
        if (userEmployeed.cedula !== "") {
            getDataUser()
            dataValidation()
        }
    }, [userEmployeed])


    return (
        <React.Fragment>
            <Card className='cardEmpleado'>
                <CardContent className='cardContentEmpleado'>
                    <div className='cardContentEmpleadoUp'>
                        <div style={{ padding: "1rem" }}>
                            <CardContent className='cardImageEmpleado'>
                                <img src='/image/carne-de-identidad.png' style={{ minWidth: '180px', maxWidth: '180px' }}></img>
                            </CardContent>
                        </div>
                        <div style={{ paddingLeft: "1rem" }}>
                            <section className='textCard'>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <span>
                                        Carnet de Vacunacion
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", paddingBottom: "1rem" }}>
                                    <img src='/image/logo-con-slogan.png' style={{ minWidth: '110px', maxWidth: '110px' }}></img>
                                </div>
                            </section>

                            <section style={{ display: "flex", paddingTop: "0.5rem" }}>

                                <div style={{ display: "flex", width: "100%" }}>
                                    <div style={{ paddingRight: "1rem" }}>
                                        <TextField
                                            id='cedula'
                                            label="Cedula"
                                            value={dataUser.cedula}
                                            sx={{ width: "8rem" }}
                                            InputProps={{
                                                className: "textFileCardEmpleado",
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='estado'
                                        label="Estado"
                                        value={dataUser.estadoVacunacion}
                                        sx={{ width: "8.5rem" }}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </section>

                            <section style={{ display: "flex", paddingTop: "1.5rem" }}>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='nombres'
                                        label="Nombres"
                                        value={dataUser.nombre}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='apellidos'
                                        label="Apellidos"
                                        value={dataUser.apellido}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </section>

                            <section style={{ display: "flex", paddingTop: "1.5rem" }}>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='correo'
                                        label="Correo"
                                        value={dataUser.correo}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='fecha_de_nacimiento'
                                        label="Fecha de Nacimiento"
                                        value={dataUser.fechaNacimiento}
                                        sx={{ maxWidth: "9rem" }}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='edad'
                                        label="Edad"
                                        value={dataUser.edad}
                                        sx={{ width: "3.8rem" }}
                                        InputProps={{
                                            className: "textFileCardEdadEmpleado",
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                    <Divider />
                    <div className='cardContentEmpleadoDown'>
                        <section className='cardDownTwoSection'>
                            <TextField
                                id="direccion"
                                label="Direccion"
                                multiline
                                rows={4}
                                value={dataUser.direccion}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </section>

                        <Divider orientation="vertical" flexItem />

                        <section className='cardDownTwoSection'>
                            <div>
                                <TextField
                                    id='telefono'
                                    label="Telefono/s"
                                    value={dataUser.telefono}
                                    InputProps={{
                                        className: "textFileCardEmpleado",
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </div>
                            <div style={{ paddingTop: "1.5rem", display: "flex" }}>
                                <div style={{ paddingRight: "1rem" }}>
                                    <TextField
                                        id='tipo_de_vacuna'
                                        label="Tipo de Vacuna"
                                        value={dataUser.tipoDeVacuna}
                                        sx={{ width: "10rem" }}
                                        InputProps={{
                                            className: "textFileCardEmpleado",
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </div>
                                <div >
                                    <TextField
                                        id='dosis'
                                        label="Dosis #"
                                        value={dataUser.dosisNumero}
                                        InputProps={{
                                            className: "numeroDeVacunas",
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </div>
                            </div>
                        </section>

                        <Divider orientation="vertical" flexItem />

                        <section className='cardDownTwoSection'>
                            <div><span>Fechas de Vacunacion</span></div>
                            {/* <div style={{ paddingTop: "0.5rem" }}>
                            <TextField
                                id='fecha_de_vacunacion'
                                value="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div>
                        <div style={{ paddingTop: "0.5rem" }}>
                            <TextField
                                id='fecha_de_vacunacion'
                                value="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div>
                        <div style={{ paddingTop: "0.5rem" }}>
                            <TextField
                                id='fecha_de_vacunacion'
                                value="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div> */}
                        </section>
                    </div>
                </CardContent>
            </Card>
            <Dialog
                open={openAletDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent >
                    <Box sx={{ height: 130, width: 340, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <img src='/image/advertencia.gif' style={{ minWidth: '80px', maxWidth: '80px' }} alt="Banner"></img>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ display: "flex", justifyContent: "center", color: "orange", fontWeight: "bold" }}>¡Hola!</span>
                            <span style={{ display: "flex", justifyContent: "center", }}>Me Parece que te faltan actualizar unos datos</span>
                        </div>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpenAletDialog(false) }}>
                        Aceptar
                    </Button>
                </DialogActions>

            </Dialog>
        </React.Fragment>
    )
}


export default CardEmpleado