
import { createSlice } from "@reduxjs/toolkit";

export const setInfo = createSlice({
    name: 'rolUserData',
    initialState: {
        rol: localStorage.getItem('rol') || ""
    },

    reducers: {
        setRolUser: (state, action) => {
            console.log(action.payload)
            state.rol = ""
            state.rol = action.payload
            localStorage.setItem('rol', action.payload)

            if (state.rol !== "") {
                window.location.pathname = "/index"
            }
        },
    }
})



export const { setRolUser } = setInfo.actions;
export const selectUserRol = (state) => state.rolUserData.rol;
export default setInfo.reducer;
