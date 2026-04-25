import { createContext, useState } from "react";

 

export const AppContext=createContext()


const Appcontextprovider=({children})=>{
    const [atoken,setatoken]=useState(localStorage.getItem('atoken')?localStorage.getItem('atoken'):'')
    const backendURL=import.meta.env.VITE_BACKENDURL





    const value={
        backendURL,
        atoken,setatoken

    }
    return(
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
    
}


export default Appcontextprovider