import {ConfirmationMessage} from "@aranda/aranda.ui"
import {ModalContainer} from "./ModalDelete.style"

export function ModalDelete ({closeAlert, acepAlert }: any) {
    return(
        <ModalContainer>
            <ConfirmationMessage
            onAccept={acepAlert}
            onCancel={closeAlert}
            text="¿Estas seguro desea eliminarlo?"
            texth="Mensaje de Confirmación"
            />
        </ModalContainer>
    )
}