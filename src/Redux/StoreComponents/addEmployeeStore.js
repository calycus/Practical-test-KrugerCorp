
import { createSlice } from "@reduxjs/toolkit";

export const getInfo = createSlice({
    name: 'employee',
    initialState: {
        rol: localStorage.getItem('rol') || "",
        data: [],
       /*  Employee: {
            firstName: localStorage.getItem('employee_name') || "",
            lastName: localStorage.getItem('employee_name') || "",
            dni: localStorage.getItem('employee_name') || "",
            mail: localStorage.getItem('employee_name') || "",
            mail: localStorage.getItem('employee_name') || "",
            mail: localStorage.getItem('employee_name') || "",
            mail: localStorage.getItem('employee_name') || "",
        } */
    },

    reducers: {
        setNewEmployee: (state, action) => {

        },

        sgetNewEmployee: (state, action) => {

        },
    }
})



export const { setNewEmployee, sgetNewEmployee } = getInfo.actions;
/* export const selectUserRol = (state) => state.rolUserData.rol; */
export const selectEmployee = (state) => state.employee.data;
export default getInfo.reducer;
