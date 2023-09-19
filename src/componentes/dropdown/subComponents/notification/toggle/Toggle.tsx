import { Toggle } from "@aranda/aranda.ui"
import {ToggleContainer, ToggleTittle, ToggleStatus, ToggleStatusContainer } from "./Toggle.style"
import {useState} from "react"

export function ToggleDrop ({tittle, description}: any) {
    const [status, setStatus] = useState(false)
    const hola = () => {
        setStatus(!status)

    }

    return(
        <>
        <ToggleContainer>
            <ToggleTittle>{tittle}</ToggleTittle>
            <ToggleStatusContainer>
              <Toggle  onChange={hola} ariaLabel="toggle" status={status}  />
              {status ? <ToggleStatus color={"#06A1C6"} >Activo</ToggleStatus> : <ToggleStatus color={"#8395A7"} >Inactivo</ToggleStatus> }

            </ToggleStatusContainer>
        </ToggleContainer>
        </>
    )
}