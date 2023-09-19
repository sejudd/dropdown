import { Select } from "@aranda/aranda.ui"

export function List ({tittle, description}: any) {

    const hola = () => {
        
    }
    return(
        <>
            <div>


            <Select 
            ariaLabel="Select"
            border
            cleanOption={false}
            placeholder="Ingrese URL"
            onChange={hola}
            label={tittle}
            widthSize="250px"
            required={true}
            />

            </div>
           
        </>
    )
}