import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice'
import { logger } from "../features/middleware";


//TODO - adda reducer to this store
export const store = configureStore({

        reducer: {
            data: dataReducer
        },
       
})