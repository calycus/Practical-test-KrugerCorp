import React, { useEffect, useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Divider, FormControl, InputLabel, MenuItem, Select, Slide, TextField
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectVacunas } from '../../../Redux/StoreComponents/storeTipoDeVacunas';
import { setUpdateEmployee, selectDataEmployee } from '../../../Redux/StoreComponents/addEmployeeStore';

import "./employeedFrom.css"
let vacunas = [];

const EmployeedFrom = ({ open, update, handleClose, userData, handleCardError }) => {
  const dispatch = useDispatch();
  vacunas = useSelector(selectVacunas);
  const userEmployeed = useSelector(selectDataEmployee)
  console.log(userEmployeed);

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [estadoVacunacion, setEstadoVacunacion] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [edad, setEdad] = useState(0);
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoDeVacuna, setTipoDeVacuna] = useState('');
  const [dosisNumero, setDosisNumero] = useState(0);
  const [fechaDeVacunacion, setFechaDeVacunacion] = useState([]);



  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [estadoVacunacionError, setEstadoVacunacionError] = useState(false);
  const [correoError, setCorreoError] = useState(false);
  const [fechaNacimientoError, setFechaNacimientoError] = useState(false);
  const [edadError, setEdadError] = useState(false);
  const [direccionError, setDireccionError] = useState(false);
  const [telefonoError, setTelefonoError] = useState(false);
  const [tipoDeVacunaError, setTipoDeVacunaError] = useState(false);
  const [dosisNumeroError, setDosisNumeroError] = useState(false);
  const [fechaDeVacunacionError, setFechaDeVacunacionError] = useState(false);


  /* dispatch(setUpdateDataForm("name", "value")) */

  const handleSetDataEmployeed = () => {
    let dataEmployeed = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      estadoVacunacion: estadoVacunacion,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
      edad: edad,
      direccion: direccion,
      telefono: telefono,
      tipoDeVacuna: tipoDeVacuna,
      dosisNumero: dosisNumero,
      fechaDeVacunacion: fechaDeVacunacion,
    }



    if (userData.id_rol === 1) {
      setTimeout(() => {
        dispatch(setUpdateEmployee(dataEmployeed))

      }, 100)
      return
    }
    handleCardError(true)
  };

  const handleUpdateDataEmployeed = () => {

    let dataEmployeed = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      estadoVacunacion: estadoVacunacion,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
      edad: edad,
      direccion: direccion,
      telefono: telefono,
      tipoDeVacuna: tipoDeVacuna,
      dosisNumero: dosisNumero,
      fechaDeVacunacion: fechaDeVacunacion,
    }



    /*  if (userData.id_rol === 1) {
       setTimeout(() => {
         dispatch(setUpdateEmployee(dataEmployeed))
 
       }, 100)
       return
     }
     handleCardError(true) */
  };

  const fromValidation = (e) => {
    e.preventDefaut()
    setNombreError(false)
    setApellidoError(false)
    setEstadoVacunacionError(false)
    setCorreoError(false)
    setFechaNacimientoError(false)
    setEdadError(false)
    setDireccionError(false)
    setTelefonoError(false)
    setTipoDeVacunaError(false)
    setDosisNumeroError(false)
    setFechaDeVacunacionError(false)

    if (nombreError === "") setNombreError(true)
    if (apellidoError === "") setApellidoError(true)
    if (estadoVacunacionError === "") setEstadoVacunacionError(true)
    if (correoError === "") setCorreoError(true)
    if (fechaNacimientoError === "") setFechaNacimientoError(true)
    if (edadError === "") setEdadError(true)
    if (direccionError === "") setDireccionError(true)
    if (telefonoError === "") setTelefonoError(true)
    if (tipoDeVacunaError === "") setTipoDeVacunaError(true)
    if (dosisNumeroError === "") setDosisNumeroError(true)
    if (fechaDeVacunacionError === "") setFechaDeVacunacionError(true)

  };


  useEffect(() => {
    if (userEmployeed.nombre) setNombre(userEmployeed.nombre)
  }, [userEmployeed.nombre])

  /*  useEffect(() => {
     console.log("hola");
   }, []) */

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

      <form noValidate onSubmit={fromValidation}>
        <DialogContent>
          <FromEmpleadoAdmin
            update={update}
            userData={userData}
            userEmployeed={userEmployeed}
            cedula={cedula}
            setCedula={setCedula}
            nombre={nombre}
            setNombre={setNombre}
            apellido={apellido}
            setApellido={setApellido}
            estadoVacunacion={estadoVacunacion}
            setEstadoVacunacion={setEstadoVacunacion}
            correo={correo}
            setCorreo={setCorreo}
            fechaNacimiento={fechaNacimiento}
            setFechaNacimiento={setFechaNacimiento}
            edad={edad}
            setEdad={setEdad}
            direccion={direccion}
            setDireccion={setDireccion}
            telefono={telefono}
            setTelefono={setTelefono}
            tipoDeVacuna={tipoDeVacuna}
            setTipoDeVacuna={setTipoDeVacuna}
            dosisNumero={dosisNumero}
            setDosisNumero={setDosisNumero}
            fechaDeVacunacion={fechaDeVacunacion}
            setFechaDeVacunacion={setFechaDeVacunacion}
            nombreError={nombreError}
            apellidoError={apellidoError}
            estadoVacunacionError={estadoVacunacionError}
            correoError={correoError}
            fechaNacimientoError={fechaNacimientoError}
            edadError={edadError}
            direccionError={direccionError}
            telefonoError={telefonoError}
            tipoDeVacunaError={tipoDeVacunaError}
            dosisNumeroError={dosisNumeroError}
            fechaDeVacunacionError={fechaDeVacunacionError}
          />

        </DialogContent >
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          {update === 1
            ? <Button>Registrar</Button>
            : <Button>Actualizar</Button>
          }
        </DialogActions>
      </form>
    </Dialog >
  );
}

export default EmployeedFrom

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FromEmpleadoAdmin = (
  { update, userEmployeed, userData, setCedula, nombre, setNombre, setApellido,
    estadoVacunacion, setEstadoVacunacion, setCorreo,
    setFechaNacimiento, setEdad, setDireccion, setTelefono,
    tipoDeVacuna, setTipoDeVacuna, setDosisNumero, setFechaDeVacunacion, nombreError,
    apellidoError, estadoVacunacionError, correoError, fechaNacimientoError,
    edadError, direccionError, telefonoError, tipoDeVacunaError,
    dosisNumeroError, fechaDeVacunacionError }) => {

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
                  value={userEmployeed.cedula || ''}
                  sx={{ width: "11rem" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    'readOnly': (userData.id_rol === 1) ? false : true,
                  }}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              {
                (userData.id_rol !== 1 || update !== 0)
                  ? (<div style={{
                    paddingLeft: "1rem", width: "100%", display: "flex", justifyContent: "right"
                  }}>
                    <FormControl sx={{ minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
                      <Select
                        id='estado'
                        labelId="demo-simple-select-standard-label"
                        value={estadoVacunacion}
                        label="Estado"
                        sx={{ width: "8.5rem" }}
                        className="textFileCardEmpleado"
                        onChange={(e) => setEstadoVacunacion(e.target.value)}
                        error={estadoVacunacionError}
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
                  value={nombre}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => setNombre(e.target.value)}
                  error={nombreError}
                />
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='apellidos'
                  label="Apellidos"
                  value={userEmployeed.apellido || ''}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => setApellido(e.target.value)}
                  error={apellidoError}
                />
              </div>
            </div>

            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='correo'
                  label="Correo"
                  value={userEmployeed.correo || ''}
                  sx={{ 'width': (userData.id_rol !== 1 || update !== 0) ? "12rem" : "auto" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  onChange={(e) => setCorreo(e.target.value)}
                  error={correoError}
                />
              </div>

              {(userData.id_rol !== 1 || update !== 0)
                ? (
                  <section style={{ display: "flex" }}>
                    <div style={{ paddingLeft: "1rem" }}>
                      <TextField
                        id='fecha_de_nacimiento'
                        label="Fecha de Nacimiento"
                        value={userEmployeed.fechaNacimiento || ''}
                        sx={{ width: "12rem" }}
                        InputProps={{
                          className: "textFileCardEmpleado",
                          readOnly: false,
                        }}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        error={fechaNacimientoError}
                      />
                    </div>
                    <div style={{ paddingLeft: "1rem" }}>
                      <TextField
                        id='edad'
                        label="Edad"
                        value={userEmployeed.edad || ''}
                        sx={{ width: "4rem" }}
                        InputProps={{
                          className: "textFileCardEmpleado",
                          readOnly: false,
                        }}
                        onChange={(e) => setEdad(e.target.value)}
                        error={edadError}
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
                userEmployeed={userEmployeed}
                setDireccion={setDireccion}
                setTelefono={setTelefono}
                tipoDeVacuna={tipoDeVacuna}
                setTipoDeVacuna={setTipoDeVacuna}
                setDosisNumero={setDosisNumero}
                setFechaDeVacunacion={setFechaDeVacunacion}
                direccionError={direccionError}
                telefonoError={telefonoError}
                tipoDeVacunaError={tipoDeVacunaError}
                dosisNumeroError={dosisNumeroError}
                fechaDeVacunacionError={fechaDeVacunacionError}
              />
            )
            : <></>
        }
      </div>
    </React.Fragment>
  )
}

const FromEmpleadoForEmployeed = (
  { userEmployeed, setDireccion, setTelefono, tipoDeVacuna,
    setTipoDeVacuna, setDosisNumero, setFechaDeVacunacion,
    direccionError, telefonoError, tipoDeVacunaError,
    dosisNumeroError, fechaDeVacunacionError }) => {

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
              value={userEmployeed.direccion || ''}
              InputProps={{
                readOnly: false,
              }}
              onChange={(e) => setDireccion(e.target.value)}
              error={direccionError}
            />
          </section>

          <Divider orientation="vertical" flexItem />

          <section className='cardDownTwoSection'>
            <div>
              <TextField
                id='telefono'
                label="Telefono"
                value={userEmployeed.telefono || ''}
                InputProps={{
                  className: "textFileCardEmpleado",
                  readOnly: false,
                }}
                variant="standard"
                onChange={(e) => setTelefono(e.target.value)}
                error={telefonoError}
              />
            </div>
            <div style={{ paddingTop: "1.5rem", display: "flex" }}>
              <div style={{ paddingRight: "1rem" }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Tipo de Vacuna</InputLabel>
                  <Select
                    id='tipo_de_vacuna'
                    labelId="demo-simple-select-standard-label"
                    value={tipoDeVacuna}
                    onChange={(e) => setTipoDeVacuna(e.target.value)}
                    label="Tipo de Vacuna"
                    sx={{ width: "10rem" }}
                    className="textFileCardEmpleado"
                    error={tipoDeVacunaError}
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
                  value={userEmployeed.dosisNumero || ''}
                  InputProps={{
                    className: "numeroDeVacunas",
                    readOnly: false,
                  }}
                  variant="standard"
                  onChange={(e) => setDosisNumero(e.target.value)}
                  error={dosisNumeroError}
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
                defaultValue="10-7-2021"
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
                defaultValue="10-7-2021"
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
                defaultValue="10-7-2021"
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
      </section>

    </React.Fragment>
  )
}