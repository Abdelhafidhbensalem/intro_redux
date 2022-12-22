import { ADD_Initial } from "../constants/constCounter";


export const addInital = (initial) => {
    return { type: ADD_Initial, payload: initial }
}