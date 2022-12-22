import { counterReducer } from "./reducers/counterReducer";
import {createStore} from "redux"

export const store=createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())