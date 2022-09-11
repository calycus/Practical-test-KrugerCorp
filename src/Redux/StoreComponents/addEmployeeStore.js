
import { createSlice } from "@reduxjs/toolkit";

export const getInfo = createSlice({
    name: 'employee',
    initialState: {
        data: JSON.parse(localStorage.getItem("Employees") || "[]"),
        dataDataEmployee: {
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
            password:""
        }
    },

    reducers: {
        setAddEmployee: (state, action) => {
            console.log(action.payload);
           /*  let empleados = localStorage.getItem('Employees') || ""
            if (empleados === "") {
                localStorage.setItem('Employees', '[]')
                empleados = '[]'
            }
            let empleadosArray = JSON.parse(empleados)

            empleadosArray.push(action.payload)
            state.data = empleadosArray
            localStorage.setItem('Employees', JSON.stringify(empleadosArray)) */
        },

        setUpdateEmployee: (state, action) => {
            let empleados = JSON.parse(localStorage.getItem('Employees'))

            let updateEmpleado = action.payload

            empleados.map(empleado => {
                if (empleado.cedula === updateEmpleado.cedula) {
                    empleado.nombre = updateEmpleado.nombre
                    empleado.apellido = updateEmpleado.apellido
                    empleado.estadoVacunacion = updateEmpleado.estadoVacunacion
                    empleado.correo = updateEmpleado.correo
                    empleado.fechaNacimiento = updateEmpleado.fechaNacimiento
                    empleado.edad = updateEmpleado.edad
                    empleado.direccion = updateEmpleado.direccion
                    empleado.telefono = updateEmpleado.telefono
                    empleado.tipoDeVacuna = updateEmpleado.tipoDeVacuna
                    empleado.dosisNumero = updateEmpleado.dosisNumero
                    empleado.fechaDeVacunacion = updateEmpleado.fechaDeVacunacion
                }
            });
            state.data = empleados
            localStorage.setItem('Employees', '[]')
            localStorage.setItem('Employees', JSON.stringify(empleados))
        },

        setDataEmployee: (state, action) => {
            /* state.dataDataEmployee = [] */

            state.dataDataEmployee = action.payload
        },

    }
})



export const { setAddEmployee, setUpdateEmployee, setDataEmployee } = getInfo.actions;
export const selectEmployee = (state) => state.employee.data;
export const selectDataEmployee = (state) => state.employee.dataDataEmployee;
export default getInfo.reducer;
