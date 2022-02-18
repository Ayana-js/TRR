import { combineReducers } from "redux";
import { horosReducer } from "./horosReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    horos: horosReducer
})

export type RootType = ReturnType<typeof rootReducer>