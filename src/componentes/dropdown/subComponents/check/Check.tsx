import {useState} from "react"
import {Checkbox } from "@aranda/aranda.ui"
import {ConatinerCheck} from "./Check.style"


export function Check ({tittle} : any) {

    const [check, setCheck] = useState(false)

    const handleChack = () => {
        setCheck(!check)

    }

    return(
        <>
        <ConatinerCheck onClick={handleChack}>
            <Checkbox  checked={check} onChange={handleChack} ariaLabel="chack"/>
            <p>{tittle}</p>
        </ConatinerCheck>
        
        </>
    )
}