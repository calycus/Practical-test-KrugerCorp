import { configureStore } from '@reduxjs/toolkit'

import rolUserData from "./StoreComponents/roleSelection"
import loginUser from "./StoreComponents/login"
import employee from "./StoreComponents/addEmployeeStore"

export default configureStore({
    reducer: {
        rolUserData: rolUserData,
        loginUser: loginUser,
        employee: employee
    },
})