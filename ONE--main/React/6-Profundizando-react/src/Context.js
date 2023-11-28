import React, {createContext, useState, useContext} from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) =>{

    
    const [count, setCount] = useState (3)

    const values = {
        count,
        suma(){
            setCount((count)=> count + 1)
        },
        resta(){
            setCount((val)=> val - 1)
        },
        users: {
            nombre: "Miguel",
            apellido: "Angel",
        },
    }

    return (<CounterContext.Provider value={ values }>
        { children }
    </CounterContext.Provider>)
}


/**
 * usando directamente al context como value
 */
// export const CounterProvider = ({children}) => {
//     const value = useContext (CounterContext)
//     return (<CounterContext.Provider value={value}>{children}</CounterContext.Provider>)
// }
