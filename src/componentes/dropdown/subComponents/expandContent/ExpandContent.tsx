import { Icon } from "@aranda/aranda.icons";
import { Button } from "@aranda/aranda.ui";
import { ButtonExpandContent, ExpandContentIcon, ExpandContentIcons } from "./ExpandContent.style";
import { useState, useRef, useEffect, useContext } from "react";
import Dropdown from "../../Dropdown";
import {ExpantButtonContext} from "../../context/ExpantButtonContext"

export function ExpandContent({ status }: any) {

  const colapse= useContext(ExpantButtonContext)
  const setColapse= useContext(ExpantButtonContext)

  const refExpand = useRef<HTMLDivElement>()
  const refColapse = useRef<HTMLDivElement>()

  return (
    <>
      <ButtonExpandContent>
        <ExpandContentIcons >
          {colapse?.colapse ? (
           <ExpandContentIcon ref={refExpand}  onClick={colapse?.handleColapseClose}>
           <p>Colapsar contenido</p>
           <Icon size="18px" icon="ic_collapse_content"></Icon>
         </ExpandContentIcon>
          ) : (
            <ExpandContentIcon ref={refColapse} className="expand" onClick={colapse?.handleColapseOpen}>
            <p>Expandir contenido</p>
            <Icon size="18px" icon="ic_expand_content"></Icon>
          </ExpandContentIcon>
          )}
        </ExpandContentIcons>
      </ButtonExpandContent>

      <Dropdown
       
      
        tittle="Direcciones de acceso (URLs)"
        description="Vincule los dispositivos de su organización que desea administrar"
        types={[
          {
            tittle: "Acceso al servidor MDM (URL)",
            description:
              "Url que su utiliza para la comunicación con los móviles.",
            type: "input",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: "input",
          },
        ]}
      />

      <Dropdown
        check={true}
        tittleCheck="Enviar al usuario solicitud de instalación del Agente iOS."
     
        tittle="Direcciones de acceso (URLs)"
        description="Vincule los dispositivos de su organización que desea administrar"
        types={[
          {
            tittle: "Acceso al servidor MDM (URL)",
            description:
              "Url que su utiliza para la comunicación con los móviles.",
            type: "list",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: "list",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: "list",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: "list",
          },
        ]}
      />

      <Dropdown
      
        tittle="Direcciones de acceso (URLs)"
        description="Vincule los dispositivos de su organización que desea administrar"
        types={[
          {
            tittle: "Acceso al servidor MDM (URL)",
            description:
              "Url que su utiliza para la comunicación con los móviles.",
            type: "time",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: "time",
          },
          {
            tittle: "Acceso Consola de administración (URL)",
            description:
              "Url para que el usuario acceda al proceso de vinculación",
            type: [
              {
                tittle: "Obtener inventario",
                type: "toggle",
              },
              {
                tittle: "Localizar",
                type: "toggle",
              },
              {
                tittle: "Bloquearinventario",
                type: "toggle",
              },
            ],
          },
        ]}
      />
    </>
  );
}


