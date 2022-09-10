
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
            edad: "",
            direccion: "",
            telefono: "",
            tipoDeVacuna: "",
            dosisNumero: 0,
            fechaDeVacunacion: "",
        }
    },

    reducers: {
        setUpdateEmployee: (state, action) => {
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

        setDataEmployee: (state, action) => {
            /* state.dataDataEmployee = [] */

            state.dataDataEmployee = action.payload
        },

        /* setUpdateDataForm: (state, action) => {

            state.dataDataEmployee = action.payload
        },
 */
    }
})



export const { setUpdateEmployee, setDataEmployee } = getInfo.actions;
export const selectEmployee = (state) => state.employee.data;
export const selectDataEmployee = (state) => state.employee.dataDataEmployee;
export default getInfo.reducer;
