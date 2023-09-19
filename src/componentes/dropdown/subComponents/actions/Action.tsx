import { ToggleDrop } from "../notification/toggle/Toggle";
import {ActionsContainer, ActionsContainerBoddy, ActionsContainerHead} from "./Action.style"

export function Action ({type} :any) {
    
    return(
        <>
        <ActionsContainer>
            <ActionsContainerHead>
            <h3>Acciones</h3>
            <p>Solo se permiten comandos que no tengan parámetros (no se permite el wipe).</p>
            </ActionsContainerHead>
                
            <ActionsContainerBoddy>
                
                {
                    type.map(({tittle}: any)=>{
                       
                            return(
                                <ToggleDrop tittle={tittle}/>
                            )
                    })
                }
            </ActionsContainerBoddy>

        </ActionsContainer>
            
        </>
    )
}