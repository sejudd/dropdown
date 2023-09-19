import { Input } from "@aranda/aranda.ui"
import {InputContainer, InputDescription, InputTittle} from "./Input.style"

export function InputDrop ({tittle, description}: any) {

    return(

        <InputContainer>
            <InputTittle><span>*</span>{tittle}</InputTittle>
            <InputDescription>{description}</InputDescription>

            <Input 
            ariaLabel="Input"
            placeholder='Ingrese URL'
            id="1"
            border={true}
            value=""
            widthSize="250px"
            />

        </InputContainer>
      
    )
}