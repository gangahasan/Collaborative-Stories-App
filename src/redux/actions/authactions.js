import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
export const SIGN_UP = "signup";
export const LOGIN = "login";
export const LOGOUT = "logout";

export const signUp = (email,password) =>async (dispatch)=> {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
  console.log(userCredentials,"user");
  dispatch({type:SIGN_UP,payload:userCredentials.user})
    }
  catch(error){
    console.error(error);
  }
};
export const login =(email,password)=>async(dispatch)=>{
    try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,password);
        dispatch({type:LOGIN,payload:userCredentials.user})
    }
    catch(error){
        console.error(error);
    }
}
export const logout =()=>async(dispatch)=>{
    try{
        await signOut(auth)
        dispatch({type:LOGOUT})
    }
    catch(error){
        console.error(error);
    }
}
