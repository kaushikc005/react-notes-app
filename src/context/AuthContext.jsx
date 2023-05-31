import { GoogleAuthProvider, onAuthStateChanged, 
         signInWithPopup, 
         signInWithRedirect, signOut } from "firebase/auth";
import { useContext,createContext, useEffect, useState } from "react";
import { auth } from "../components/utils/firebase";


const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [user, setUser] = useState({})
    const googleSignIn=()=>{
           const provider=new GoogleAuthProvider();
           signInWithPopup(auth,provider);
    }
    const SignOut=()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=> 
        setUser(currentUser))

        return unsubscribe
    },[])

    return  (
        <AuthContext.Provider value={{googleSignIn,SignOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
};