
import { createSlice } from "@reduxjs/toolkit";

export const getInfo = createSlice({
    name: 'loginUser',
    initialState: {
        rol: localStorage.getItem('rol') || ""
    },

    reducers: {
    }
})

export const getDataUserLogin = (userName, userPassword) => async (dispatch) => {

    const response = await fetch("/fake_api/users.json", {
        method: "GET"
    })
    const data = await response.json()

    data.map(elemento => {
        (elemento.user === userName && elemento.password === userPassword)
            ? window.location.pathname = "/index"
            : alert("Error!!! Usuario no Encontrado")
    })



    /* console.log(data[0]); */
}

export const { setUser } = getInfo.actions;
export default getInfo.reducer;
