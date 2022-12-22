import { ADD_Initial } from "../constants/constCounter";
const initialState={counter:0}

export const counterReducer=(state=initialState,action)=>{

switch (action.type) {
    case ADD_Initial:
        return {...state,counter:state.counter+action.payload}
        break;

    default:
return state}


}