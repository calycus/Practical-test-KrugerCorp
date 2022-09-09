import * as React from 'react';
import { Card, CardContent, Divider, TextField } from '@mui/material';

import "./cardEmpleado.css"

const CardEmpleado = () => {
    return (
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
                                        defaultValue="131004343"
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
                                    defaultValue="No Vacunado"
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
                                    defaultValue="Jhon David"
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
                                    defaultValue="Macias Saldarreaga"
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
                                    defaultValue="craytus2@gmail.com"
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
                                    defaultValue="29-10-1997"
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
                                    defaultValue="25"
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
                            defaultValue="Las Orquidas Manzana J Villa 43"
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
                                defaultValue="0982331488"
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
                                    defaultValue="Jhonson & Jhonson"
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
                                    defaultValue="2"
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
                        <div style={{paddingTop:"0.5rem"}}>
                            <TextField
                                id='fecha_de_vacunacion'
                                defaultValue="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div>
                        <div style={{paddingTop:"0.5rem"}}>
                            <TextField
                                id='fecha_de_vacunacion'
                                defaultValue="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div>
                        <div style={{paddingTop:"0.5rem"}}>
                            <TextField
                                id='fecha_de_vacunacion'
                                defaultValue="10-7-2021"
                                sx={{ width: "6rem" }}
                                InputProps={{
                                    className: "textFileCardEmpleado",
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                        </div>
                    </section>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardEmpleado