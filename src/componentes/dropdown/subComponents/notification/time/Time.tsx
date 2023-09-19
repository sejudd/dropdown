import { Input } from "@aranda/aranda.ui"
import {TimeContainer, TimeTittle, TimeDescription, TimeInput, TimeInputDescription} from "./Time.style"

export function Time ({tittle, description}: any) {
    return(
        <>
        <TimeContainer>

            <TimeTittle>{tittle}</TimeTittle>
            <TimeDescription>{description}</TimeDescription>

            <TimeInput>
                <Input 
                ariaLabel="Input"
                id="1"
                border={true}
                value=""
                widthSize="100px"
                />
                <TimeInputDescription>Min</TimeInputDescription>
            </TimeInput>
           
        </TimeContainer>
        </>
    )
}