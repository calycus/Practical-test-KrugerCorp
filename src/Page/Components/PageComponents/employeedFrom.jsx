import React, { useEffect, useState } from 'react';
import {
  Box, Button, Card, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle,
  Divider, Fade, FormControl, InputLabel, MenuItem, Select, Slide, TextField
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '@mui/icons-material';

import { selectVacunas } from '../../../Redux/StoreComponents/storeTipoDeVacunas';
import { setAddEmployee, setUpdateEmployee, selectDataEmployee } from '../../../Redux/StoreComponents/addEmployeeStore';

import "./employeedFrom.css"
let vacunas = [];

const EmployeedFrom = ({ open, handleClose, update, userData, controler }) => {
  const dispatch = useDispatch();
  vacunas = useSelector(selectVacunas);
  const userEmployeed = useSelector(selectDataEmployee);

  const [openControler, setOpenControler] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dataEmployeed, setDataEmployeed] = useState(
    {
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
      fechaDeVacunacion: [],
      password: ""
    }
  )
  const [ErrorDataEmployeed, setErrorDataEmployeed] = useState(
    {
      cedulaError: false,
      nombreError: false,
      apellidoError: false,
      estadoVacunacionError: false,
      correoError: false,
      fechaNacimientoError: false,
      edadError: false,
      direccionError: false,
      telefonoError: false,
      tipoDeVacunaError: false,
      dosisNumeroError: false,
      fechaDeVacunacionError: false,
    }
  )


  const formValidation = () => {
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexNombreApellido = /^[a-zA-Z][a-zA-Z]*(?:\s+[a-zA-Z][a-zA-Z]+)?$/;

    setErrorDataEmployeed({
      ...ErrorDataEmployeed,
      cedulaError: (dataEmployeed.cedula.length < 10) ? true : false,
      nombreError: (dataEmployeed.nombre.length === 0 || !regexNombreApellido.test(dataEmployeed.nombre)) ? true : false,
      apellidoError: (dataEmployeed.apellido.length === 0 || !regexNombreApellido.test(dataEmployeed.apellido)) ? true : false,
      estadoVacunacionError: (dataEmployeed.estadoVacunacion.length === 0) ? true : false,
      correoError: (dataEmployeed.correo.length === 0 || !regexEmail.test(dataEmployeed.correo)) ? true : false,
      fechaNacimientoError: (dataEmployeed.fechaNacimiento.length === 0) ? true : false,
      edadError: (dataEmployeed.edad <= 0) ? true : false,
      direccionError: (dataEmployeed.direccion.length === 0) ? true : false,
      telefonoError: (dataEmployeed.telefono.length === 0) ? true : false,
      tipoDeVacunaError: (dataEmployeed.tipoDeVacuna.length === 0) ? true : false,
      dosisNumeroError: (dataEmployeed.dosisNumero === 0 || dataEmployeed.dosisNumero === "") ? true : false,
      fechaDeVacunacionError: (dataEmployeed.fechaDeVacunacion.length === 0) ? true : false,
    })
  };
  const formValidationForClose = () => {
    setDataEmployeed({
      ...dataEmployeed,
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
      fechaDeVacunacion: []
    })

    setErrorDataEmployeed({
      ...ErrorDataEmployeed,
      cedulaError: false,
      nombreError: false,
      apellidoError: false,
      estadoVacunacionError: false,
      correoError: false,
      fechaNacimientoError: false,
      edadError: false,
      direccionError: false,
      telefonoError: false,
      tipoDeVacunaError: false,
      dosisNumeroError: false,
      fechaDeVacunacionError: false,
    })
  };
  const newDataEmployeedFrom = () => {
    setDataEmployeed({
      ...dataEmployeed,
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

  const passwordGenerate = () => {
    const minus = "abcdefghijklmnñopqrstuvwxyz";
    const mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    let contraseña = "";
    for (let i = 0; i < 8; i++) {
      let eleccion = Math.floor(Math.random() * 3 + 1);
      if (eleccion == 1) {
        let caracter1 = minus.charAt(Math.floor(Math.random() * minus.length));
        contraseña += caracter1;
      } else if (eleccion == 2) {
        const caracter2 = mayus.charAt(Math.floor(Math.random() * mayus.length));
        contraseña += caracter2;
      } else {
        let num = Math.floor(Math.random() * 10);
        contraseña += num;
      }
    }
    return contraseña;
  }

  const handleSendData = async () => {
    formValidation();
    if (
      dataEmployeed.cedula !== "" &&
      dataEmployeed.nombre !== "" &&
      dataEmployeed.apellido !== "" &&
      dataEmployeed.estadoVacunacion !== "" &&
      dataEmployeed.correo !== "" &&
      dataEmployeed.fechaNacimiento !== "" &&
      dataEmployeed.edad !== "" &&
      dataEmployeed.direccion !== "" &&
      dataEmployeed.telefono !== "" &&
      dataEmployeed.tipoDeVacuna !== "" &&
      dataEmployeed.dosisNumero !== "" &&
      dataEmployeed.fechaDeVacunacion !== ""
    ) {
      handleClose()
      setLoading(true)
      setOpenControler(true)
      if (userData.id_rol !== 1 || update !== 0) {
        setTimeout(() => {
          setLoading(false)
          dispatch(setUpdateEmployee(dataEmployeed))
        }, 200);
        return
      }
    } else if (
      dataEmployeed.cedula !== "" &&
      dataEmployeed.nombre !== "" &&
      dataEmployeed.apellido !== "" &&
      dataEmployeed.correo !== ""
    ) {
      handleClose()
      setLoading(true)
      setOpenControler(true)
      const password = passwordGenerate()
      setTimeout(() => {
        const emp = {
          ...dataEmployeed, password
        }
        setLoading(false)
        dispatch(setAddEmployee(emp))
        setDataEmployeed(emp)
      }, 2000);
    }
  }

  useEffect(() => {
    if (userEmployeed.nombre) newDataEmployeedFrom()
  }, [userEmployeed])
  useEffect(() => {
    if (controler) formValidationForClose()
  }, [controler])


  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div>
        <Box sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
          <img src='/image/bg.png' style={{ minWidth: '150px', maxWidth: '150px' }} alt="Banner"></img>
        </Box>
        <DialogTitle sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>{(update === 1) ? "Actualizacion de Datos" : "Registro De Empleados"}</DialogTitle>
      </div>
      <form>
        <DialogContent>
          <FromEmpleadoAdmin
            dataEmployeed={dataEmployeed}
            setDataEmployeed={setDataEmployeed}
            ErrorDataEmployeed={ErrorDataEmployeed}
            formValidation={formValidation}
            update={update}
            userData={userData}
          />

        </DialogContent >
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => handleSendData()}>{update === 1 ? "Actualizar" : "Registrar"}</Button>
        </DialogActions>
      </form>

      <Dialog
        open={openControler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Box sx={{ height: 130, width: 350, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Fade
              in={loading}
              style={{
                display: "flex",
                alignItems: "center",
                transitionDelay: loading ? '100ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress color="success" />
            </Fade>
            {(!loading)
              ? (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  transitionDelay: !loading ? '100ms' : '20ms',
                }}>
                  <span style={{ fontWeight: "bold", color: "green", textAlign: "center", paddingBottom: "1rem" }}>Empleado Registrado de Manera Exitosa</span>
                  <div style={{
                    display: "flex",
                    padding: "0.5rem 1rem"
                  }}>
                    <section>
                      <img src='/image/usuario.png' style={{ minWidth: '80px', maxWidth: '80px' }} alt="Banner"></img>
                    </section>
                    <section className='dialogLoading'>
                      <div style={{
                        display: "flex",
                        width: "100%",
                      }} >
                        <span style={{ fontWeight: "bold", width: "60%" }}>Usuario: </span> <span style={{ fontWeight: "bold", width: "40%" }}>{dataEmployeed.cedula}</span>
                      </div>
                      <div style={{
                        display: "flex",
                        width: "100%",
                      }}>
                        <span style={{ fontWeight: "bold", width: "60%" }}>Contraseña:</span><span style={{ fontWeight: "bold", width: "40%" }}>{dataEmployeed.password}</span>
                      </div>
                    </section>
                  </div>
                </div>
              )
              : <></>}
          </Box>
        </DialogContent>
        {(!loading) ? (
          <DialogActions>
            <Button onClick={() => setOpenControler(false)}>Aceptar</Button>
          </DialogActions>
        )
          : <></>}
      </Dialog>
    </Dialog >

  );
}


export default EmployeedFrom

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const FromEmpleadoAdmin = ({ dataEmployeed, setDataEmployeed, ErrorDataEmployeed, formValidation, update, userData }) => {

  function handleCheckCedula(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value.length <= 10) {
      if (e.target.value === '' || re.test(e.target.value)) {
        setDataEmployeed({ ...dataEmployeed, cedula: e.target.value })
      }
    }
  }
  function handleCheckEdad(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setDataEmployeed({ ...dataEmployeed, edad: parseInt(e.target.value) })
    }
  }
  function handleReset() { setDataEmployeed({ ...dataEmployeed, edad: "" }) }
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <section style={{ display: "flex" }}>
          <section style={{ display: "flex", alignItems: "center" }}>
            <DialogContent className='imgContent'>
              <img className='imgDialogContent' src='/image/user-add.gif' style={{ minWidth: '120px', maxWidth: '120px' }} alt="Add Employeed"></img>
            </DialogContent>
          </section>
          <Divider orientation="vertical" flexItem />
          <section>
            <div style={{ display: "flex", paddingBottom: "0.5rem" }}>
              <div style={{ paddingLeft: "1rem", display: "flex", alignItems: "self-end" }}>
                <TextField
                  id='cedula'
                  label="Cedula"
                  value={dataEmployeed.cedula}
                  sx={{ width: "11rem" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    'readOnly': (userData.id_rol === 1) ? false : true,
                  }}
                  onChange={(e) => {
                    handleCheckCedula(e)
                    { (userData.id_rol === 1) ? formValidation() : <></> }
                  }}
                  error={ErrorDataEmployeed.cedulaError}
                />
              </div>
              {
                (userData.id_rol !== 1 || update !== 0)
                  ? (<div style={{
                    paddingLeft: "1rem", width: "100%", display: "flex", justifyContent: "right"
                  }}>
                    <FormControl sx={{ minWidth: 120 }} error={ErrorDataEmployeed.estadoVacunacionError}>
                      <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
                      <Select
                        id='estado'
                        labelId="demo-simple-select-standard-label"
                        value={dataEmployeed.estadoVacunacion}
                        label="Estado"
                        sx={{ width: "8.5rem" }}
                        className="textFileCardEmpleado"
                        onChange={(e) => {
                          setDataEmployeed({ ...dataEmployeed, estadoVacunacion: e.target.value })
                          formValidation()
                        }}

                      >
                        <MenuItem value="No Vacunado">No Vacunado</MenuItem>
                        <MenuItem value="Vacunado">Vacunado</MenuItem>

                      </Select>
                    </FormControl>
                  </div>)
                  : <></>
              }
            </div>

            <div
              style={{
                display: "flex",
                "flexDirection": (userData.id_rol !== 1 || update !== 0) ? "row" : "column",
                paddingTop: "1rem"
              }}>
              <div
                style={{
                  paddingLeft: "1rem",
                  "paddingBottom": (userData.id_rol !== 1 || update !== 0) ? "0rem" : "1rem"
                }}>
                <TextField
                  id='nombres'
                  label="Nombres"
                  value={dataEmployeed.nombre}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => {
                    setDataEmployeed({ ...dataEmployeed, nombre: e.target.value })
                    { (userData.id_rol === 1) ? formValidation() : <></> }
                  }}
                  error={ErrorDataEmployeed.nombreError}
                />
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='apellidos'
                  label="Apellidos"
                  value={dataEmployeed.apellido}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => {
                    setDataEmployeed({ ...dataEmployeed, apellido: e.target.value })
                    { (userData.id_rol === 1) ? formValidation() : <></> }
                  }}
                  error={ErrorDataEmployeed.apellidoError}
                />
              </div>
            </div>

            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='correo'
                  label="Correo"
                  value={dataEmployeed.correo}
                  sx={{ 'width': (userData.id_rol !== 1 || update !== 0) ? "12rem" : "auto" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => {
                    setDataEmployeed({ ...dataEmployeed, correo: e.target.value })
                    { (userData.id_rol === 1) ? formValidation() : <></> }
                  }}
                  error={ErrorDataEmployeed.correoError}
                />
              </div>

              {(userData.id_rol !== 1 || update !== 0)
                ? (
                  <section style={{ display: "flex" }}>
                    <div style={{ paddingLeft: "1rem" }}>
                      <DatePicker
                        id='fecha_de_nacimiento'
                        label="Fecha de Nacimiento"
                        value={dataEmployeed.fechaNacimiento}
                        sx={{ width: "12rem" }}
                        InputProps={{
                          className: "textFileCardEmpleado",
                          readOnly: false,
                        }}
                        onChange={(e) => {
                          setDataEmployeed({ ...dataEmployeed, fechaNacimiento: e.$D + "/" + (e.$M + 1) + "/" + e.$y })
                          formValidation()
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                    <div style={{ paddingLeft: "1rem" }}>
                      <TextField
                        id='edad'
                        label="Edad"
                        value={dataEmployeed.edad}
                        sx={{ width: "4rem" }}
                        InputProps={{
                          className: "textFileCardEmpleado",
                          readOnly: false,
                        }}
                        onChange={(e) => {
                          handleCheckEdad(e)
                          formValidation()
                        }}
                        onClick={handleReset}
                        error={ErrorDataEmployeed.edadError}
                      />
                    </div>
                  </section>
                )
                : <></>
              }
            </div>
          </section>
        </section>
        {
          (userData.id_rol !== 1 || update !== 0)
            ? (
              <FromEmpleadoForEmployeed
                dataEmployeed={dataEmployeed}
                setDataEmployeed={setDataEmployeed}
                ErrorDataEmployeed={ErrorDataEmployeed}
                formValidation={formValidation}
              />
            )
            : <></>
        }

      </div>
    </React.Fragment>
  )
}

const FromEmpleadoForEmployeed = ({ dataEmployeed, setDataEmployeed, ErrorDataEmployeed, formValidation }) => {

  const [fecha, setFecha] = useState("")

  function handleCheckPhone(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value.length <= 10) {
      if (e.target.value === '' || re.test(e.target.value)) {
        setDataEmployeed({ ...dataEmployeed, telefono: e.target.value })
      }
    }
  }

  function handleCheckDosis(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setDataEmployeed({ ...dataEmployeed, dosisNumero: parseInt(e.target.value) })
    }
  }
  function handleReset() { setDataEmployeed({ ...dataEmployeed, dosisNumero: "" }) }

  return (
    <React.Fragment>
      <section style={{ paddingTop: "1rem" }}>
        <Divider />
        <div className='cardContentEmpleadoDown'>
          <section className='cardDownTwoSection'>
            <TextField
              id="direccion"
              label="Direccion"
              multiline
              rows={4}
              value={dataEmployeed.direccion}
              InputProps={{
                readOnly: false,
              }}
              onChange={(e) => {
                formValidation()
                setDataEmployeed({ ...dataEmployeed, direccion: e.target.value })
              }}
              error={ErrorDataEmployeed.direccionError}
            />
          </section>

          <Divider orientation="vertical" flexItem />

          <section className='cardDownTwoSection'>
            <div>
              <TextField
                id='telefono'
                label="Telefono"
                value={dataEmployeed.telefono}
                InputProps={{
                  className: "textFileCardEmpleado",
                  readOnly: false,
                }}
                variant="standard"
                onChange={(e) => {
                  formValidation()
                  handleCheckPhone(e)
                }}
                error={ErrorDataEmployeed.telefonoError}
              />
            </div>
            {(dataEmployeed.estadoVacunacion === "Vacunado")
              ? (
                <div style={{ paddingTop: "1.5rem", display: "flex" }} >
                  <div style={{ paddingRight: "1rem" }}>
                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-standard-label">Tipo de Vacuna</InputLabel>
                      <Select
                        id='tipo_de_vacuna'
                        labelId="demo-simple-select-standard-label"
                        value={dataEmployeed.tipoDeVacuna}
                        label="Tipo de Vacuna"
                        sx={{ width: "10rem" }}
                        className="textFileCardEmpleado"
                        error={ErrorDataEmployeed.tipoDeVacunaError}
                        onChange={(e) => {
                          formValidation()
                          setDataEmployeed({ ...dataEmployeed, tipoDeVacuna: e.target.value })
                        }}
                      >
                        {vacunas.map(elementoVacuna => {

                          return (
                            <MenuItem value={elementoVacuna.name} key={elementoVacuna.id}>
                              {elementoVacuna.name}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </div>
                  <div >
                    <TextField
                      id='dosis'
                      label="Dosis #"
                      value={dataEmployeed.dosisNumero}
                      InputProps={{
                        className: "numeroDeVacunas",
                        readOnly: false,
                      }}
                      variant="standard"
                      onChange={(e) => {
                        formValidation()
                        handleCheckDosis(e)
                      }}
                      onClick={() => {
                        handleReset()
                      }}
                    />
                  </div>
                </div>
              )
              : <></>}
          </section>

          <Divider orientation="vertical" flexItem />
          {(dataEmployeed.dosisNumero !== 0)
            ? (
              <section className='cardDownTwoSection'>
                <div>
                  <DatePicker
                    id='fecha_de_vacunacion'
                    label="F. Vacunacion"
                    value={fecha}
                    sx={{ width: "6rem" }}
                    InputProps={{
                      className: "textFileCardEmpleado",
                      readOnly: false,
                    }}
                    onChange={(e) => {
                      let newFecha = e.$D + "/" + (e.$M + 1) + "/" + e.$y
                      setFecha(newFecha)
                    }}
                    renderInput={(params) =>
                      <FechaComponent
                        params={params}
                        dataEmployeed={dataEmployeed}
                        setDataEmployeed={setDataEmployeed}
                      />}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {dataEmployeed.fechaDeVacunacion.length !== 0
                    ? (
                      dataEmployeed.fechaDeVacunacion.map((fechas, index) => <span key={index} style={{ borderBottom: "inset" }}>{fechas}</span>)
                    )
                    : <></>
                  }
                </div>
              </section>
            )
            : <></>}

        </div>
      </section>

    </React.Fragment >
  )
}

const FechaComponent = ({ params, dataEmployeed, setDataEmployeed }) => {

  const setFechaVacunacion = (newFecha) => {
    let newValue = ((dataEmployeed.fechaDeVacunacion.length === 0) ? [] : dataEmployeed.fechaDeVacunacion);
    newValue.push(newFecha.inputProps.value)
    setDataEmployeed({ ...dataEmployeed, fechaDeVacunacion: newValue })
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "84%" }}>
        <TextField {...params} />
      </div>
      <div style={{ width: "15%" }}>
        <Button
          disabled={
            (dataEmployeed.fechaDeVacunacion.length >= parseInt(dataEmployeed.dosisNumero)
              || dataEmployeed.dosisNumero === ""
              || params.error
            ) ? true : false}
          sx={{ minWidth: "40px" }}
          onClick={() => setFechaVacunacion(params)} >
          <Add />
        </Button>
      </div>
    </div>
  )
}