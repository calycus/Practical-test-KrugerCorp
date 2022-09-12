
import { createSlice } from "@reduxjs/toolkit";

export const getInfo = createSlice({
    name: 'employee',
    initialState: {
        data: JSON.parse(localStorage.getItem("Employees") || "[]"),
        updateDataEmployee: {
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
        },
        dataEmpleado: {
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
        }
    },

    reducers: {
        setAddEmployee: (state, action) => {
            let empleados = localStorage.getItem('Employees') || ""
            if (empleados === "") {
                localStorage.setItem('Employees', '[]')
                empleados = '[]'
            }
            let empleadosArray = JSON.parse(empleados)
            
            empleadosArray.push(action.payload)
            state.data = empleadosArray
            localStorage.setItem('Employees', JSON.stringify(empleadosArray))
        },

        setUpdateEmployee: (state, action) => {
            let empleados = JSON.parse(localStorage.getItem('Employees'))

            let updateEmpleado = action.payload

            empleados.forEach(empleado => {
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

        setDeleteEmployee: (state, action) => {
            let empleados = JSON.parse(localStorage.getItem('Employees'))

            let cedula = action.payload

            empleados.forEach(empleado => {
                if (empleado.cedula === cedula) {

                    empleados = empleados.filter(data => data.cedula !== cedula)
                }
            });
            state.data = empleados
            localStorage.setItem('Employees', '[]')
            localStorage.setItem('Employees', JSON.stringify(empleados))
        },

        setUpdateForEmployee: (state, action) => {
            let empleados = JSON.parse(localStorage.getItem('Employees'))

            let cedula = action.payload

            empleados.forEach(empleado => {
                if (empleado.cedula === cedula) {
                    state.dataEmpleado = empleado

                }
            });
        },

        setDataEmployee: (state, action) => {

            state.updateDataEmployee = action.payload
        },

    }
})



export const { setAddEmployee, setUpdateEmployee, setDeleteEmployee, setUpdateForEmployee, setDataEmployee } = getInfo.actions;
export const selectEmployee = (state) => state.employee.data;
export const selectUpdateDataEmployee = (state) => state.employee.updateDataEmployee;
export const selectDataEmpleado = (state) => state.employee.dataEmpleado;
export default getInfo.reducer;
