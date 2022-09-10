
import { createSlice } from "@reduxjs/toolkit";

export const getInfo = createSlice({
    name: 'loginUser',
    initialState: {
       /*  user: localStorage.getItem('user') || "",
        rol: localStorage.getItem('rol') || "",
        id_rol: localStorage.getItem('id_rol') || 0, */

        loginData: JSON.parse(localStorage.getItem("loginData") || "[]"),
    },

    reducers: {
        setUser: (state, action) => {

            state.loginData = "[]"
            let data = JSON.parse(state.loginData)

            data.push({
                user: action.payload.userName,
                rol: action.payload.rol,
                id_rol: action.payload.id_rol,
            })

            localStorage.setItem('loginData', JSON.stringify(data))

            if (state.id_rol !== 0) {
                window.location.pathname = "/index"
            }
        },

        getEmpleados: (state, action) => {
            console.log(action.payload);
            /*  window.location.pathname = "/index" 
            alert("Error!!! Usuario no Encontrado")
            */
        },
    }
})

export const getDataUserLogin = (userName, userPassword) => async (dispatch) => {

    const resUser = await fetch("/fake_api/users.json", {
        method: "GET"
    })

    const resRol = await fetch("/fake_api/roles.json", {
        method: "GET"
    })

    const dataUser = await resUser.json()
    const dataRol = await resRol.json()

    dataUser.forEach(elementoUsuario => {
        (elementoUsuario.user === userName && elementoUsuario.password === userPassword)
            ? (
                dataRol.forEach(elementoRol => {
                    (elementoRol.id === elementoUsuario.id)
                        ? dispatch(setUser({ userName: elementoUsuario.user, id_rol: elementoRol.id, rol: elementoRol.rol }))
                        : <></>
                })
            )
            : dispatch(getEmpleados({ userName: userName, userPassword: userPassword, dataRol: dataRol }))
    })

}

export const { setUser, getEmpleados } = getInfo.actions;
export const selectLoginData = (state) => state.loginUser.loginData;
export default getInfo.reducer;
