import { createContext, useEffect, useState } from "react";


export const UserContext=createContext({})
export function UserContectProvider({children}){
    const [user,setUser]=useState(null)
    useEffect(()=>{
        if(!user){

        }
    })
    return(
        <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
        
    )

}