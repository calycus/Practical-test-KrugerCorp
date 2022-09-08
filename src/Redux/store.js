import { configureStore } from '@reduxjs/toolkit'

import rolUserData from "./StoreComponents/roleSelection"


export default configureStore({
    reducer: {
        rolUserData: rolUserData,
    },
})