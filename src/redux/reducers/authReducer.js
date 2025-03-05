import { LOGIN, LOGOUT, SIGN_UP } from "../actions/authactions";

const initState = {user:JSON.parse(localStorage.getItem("user"))||null}
export const authReducer =(state=initState,action)=>{
    switch(action.type){
        case SIGN_UP:
        case LOGIN:
            localStorage.setItem("user",JSON.stringify(action.payload))
            return {...state, user: action.payload}
        case LOGOUT:
            localStorage.removeItem("user")
            return {...state, user: null}
        default:
        return state;
    }

}