import { useState } from "react";
import { ExpantButtonContext } from "./ExpantButtonContext"
import {ExpanyContextProvider} from "./type"

export function ExpantContext ({children}: ExpanyContextProvider) {

    const [colapse, setColapse] = useState(false);
  
    const handleColapseClose = () => {
    setColapse(false);
    console.log("555")
    };

    const handleColapseOpen = () => {
        setColapse(true);
        console.log("33333")
    }



    return(
        <ExpantButtonContext.Provider
        value ={{
            colapse,
            setColapse,
            handleColapseOpen,
            handleColapseClose

        }}
        >

        {children}
        </ExpantButtonContext.Provider>

    )
}