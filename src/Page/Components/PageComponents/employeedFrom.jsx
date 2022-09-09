import * as React from 'react';
import {
  Box,
  Button, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, Divider, Slide, TextField
} from '@mui/material';
import { selectUserRol } from '../../../Redux/StoreComponents/roleSelection';
import { useSelector } from 'react-redux';

import "./employeedFrom.css"

const EmployeedFrom = ({ open, handleClose }) => {
  const rol = useSelector(selectUserRol);

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
          <img src='/image/bg.png' style={{ minWidth: '150px', maxWidth: '150px' }}></img>
        </Box>
        <DialogTitle sx={{ paddingTop: "0rem", paddingBottom: "0rem" }}>{"Registro De Empleados"}{/* {"Actualizacion de Datos"} */}</DialogTitle>
      </div>

      <DialogContent>

        <FromEmpleadoAdmin
          rol={rol}
        />

      </DialogContent >
      <DialogActions>
        <Button onClick={handleClose}>Descartar</Button>
        <Button onClick={handleClose}>Agregar</Button>
      </DialogActions>
    </Dialog >
  );
}

export default EmployeedFrom

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FromEmpleadoAdmin = ({ rol }) => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <section style={{ display: "flex" }}>
          <section>
            <DialogContent className='imgContent'>
              <img className='imgDialogContent' src='/image/user-add.gif' style={{ minWidth: '120px', maxWidth: '120px' }}></img>
            </DialogContent>
          </section>
          <Divider orientation="vertical" flexItem />
          <section>
            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='cedula'
                  label="Cedula"
                  defaultValue=""
                  sx={{ width: "11rem" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: true,
                  }}
                />
              </div>
              {/* debeocultarce cuando es administrador */}
              <div style={{
                paddingLeft: "1rem", width: "100%", display: "flex", justifyContent: "right"
              }}>
                <TextField
                  id='estado'
                  label="Estado"
                  defaultValue=""
                  sx={{ width: "8.5rem" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='nombres'
                  label="Nombres"
                  defaultValue=""
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                />
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='apellidos'
                  label="Apellidos"
                  defaultValue=""
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", paddingTop: "1rem" }}>
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='correo'
                  label="Correo"
                  defaultValue=""
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                />
              </div>
              {/* debeocultarce cuando es administrador */}
              <div style={{ paddingLeft: "1rem" }}>
                <TextField
                  id='fecha_de_nacimiento'
                  label="Fecha de Nacimiento"
                  defaultValue=""
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                />
              </div>
            </div>
          </section>
        </section>

        <FromEmpleadoForEmployeed />
      </div>
    </React.Fragment>
  )
}

const FromEmpleadoForEmployeed = () => {

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
              defaultValue=""
              InputProps={{
                readOnly: false,
              }}
            />
          </section>

          <Divider orientation="vertical" flexItem />

          <section className='cardDownTwoSection'>
            <div>
              <TextField
                id='telefono'
                label="Telefono"
                defaultValue=""
                InputProps={{
                  className: "textFileCardEmpleado",
                  readOnly: false,
                }}
                variant="standard"
              />
            </div>
            <div style={{ paddingTop: "1.5rem", display: "flex" }}>
              <div style={{ paddingRight: "1rem" }}>
                <TextField
                  id='tipo_de_vacuna'
                  label="Tipo de Vacuna"
                  defaultValue=""
                  sx={{ width: "10rem" }}
                  InputProps={{
                    className: "textFileCardEmpleado",
                    readOnly: false,
                  }}
                  variant="standard"
                />
              </div>
              <div >
                <TextField
                  id='dosis'
                  label="Dosis #"
                  defaultValue=""
                  InputProps={{
                    className: "numeroDeVacunas",
                    readOnly: false,
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