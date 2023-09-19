import { Icon } from "@aranda/aranda.icons";
import {
  DropdownContainer,
  DropdownHead,
  DropdownBoddy,
  DropdownDescription,
  DropdownTittle,
  DropdownInfo,
  RemoveIcon,
  ArrowIcon,
} from "./Dropdown.style";
import { IDropdown } from "./type";
import { InputDrop } from "./subComponents/input/Input";
import { List } from "./subComponents/list/List";
import { Time } from "./subComponents/notification/time/Time";
import { Notifications } from "./subComponents/notification/Notification";
import { ToggleDrop } from "./subComponents/notification/toggle/Toggle";
import { useState, useRef, useEffect, useContext } from "react";
import { ModalDelete } from "./subComponents/modal/ModalDelete";
import { ExpandContent } from "./subComponents/expandContent/ExpandContent";
import { Check } from "./subComponents/check/Check";
import { Action } from "./subComponents/actions/Action";
import { ExpantButtonContext } from "../../componentes/dropdown/context/ExpantButtonContext";

export default function Dropdown({
  tittle,
  description,
  types,
  check,
  tittleCheck,
}: IDropdown) {
  const [dropStatus, setDropStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deleDropdown, setDeleDropdown] = useState(true);

  const refDropDownBoddy = useRef<HTMLDivElement>();
  const refDropDown = useRef<HTMLDivElement>();
  const refDropDownIconRemove = useRef<HTMLDivElement>();

  const colapse = useContext(ExpantButtonContext);

  useEffect(() => {
    let handleDropdown = (e: any) => {
      const colapseBtton =
        e.target.textContent === "Colapsar contenido" ||
        e.target.className === "arandaIcon-ic_collapse_content";
      const expandButton =
        e.target.textContent === "Expandir contenido" ||
        e.target.className === "arandaIcon-ic_expand_content";
      const diferentButton =
        !refDropDown.current?.contains(e.target) !== colapseBtton &&
        !refDropDown.current?.contains(e.target) !== expandButton;

      const $expand = document.getElementsByClassName("expand");

      if ($expand[0]) {
        if (
          refDropDownBoddy.current?.contains(e.target) ||
          refDropDownIconRemove.current?.contains(e.target)
        ) {
          setDropStatus(true);
          console.log("1");
          return;
        }
        if (refDropDown.current?.contains(e.target)) {
          setDropStatus(!dropStatus);
          console.log("2");
        }
        if (diferentButton) {
          setDropStatus(false);
        }
      }

      if (expandButton) {
        setDropStatus(true);
      }

      if (colapseBtton) {
        setDropStatus(false);
      }
    };

    document.addEventListener("mousedown", handleDropdown);

    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    };
  });


  const removeDrop = (e: any) => {
    if (refDropDownIconRemove.current?.contains(e.target)) {
      setOpenModal(true);
    }
  };

  const handleOpenAlert = () => {
    setOpenModal(false);
  };

  const handleDeleteDropdown = () => {
    setDeleDropdown(false);
  };

  return (
    <>
      {deleDropdown && (
        <>
          <DropdownContainer
            status={dropStatus}
            ref={refDropDown}
            className={dropStatus ? "Dropdown open" : "Dropdown close"}
            
          >
            <DropdownHead>
              <ArrowIcon>
                <div className="remove">
                  <Icon color="#06A1C6" size="5px" icon="ic_arrow_up"></Icon>
                </div>
                <div className="edit">
                  <Icon color="#06A1C6" size="5px" icon="ic_deploy"></Icon>
                </div>
              </ArrowIcon>
              <DropdownInfo>
                <DropdownTittle>{tittle}</DropdownTittle>
                <DropdownDescription>{description}</DropdownDescription>
              </DropdownInfo>
              <div className="container-icons">
                <RemoveIcon
                  className="remove"
                  onClick={removeDrop}
                  ref={refDropDownIconRemove}
                >
                  <Icon color="#8395a7" size="16px" icon="ic_remove"></Icon>
                </RemoveIcon>
                <RemoveIcon className="edit">
                  <Icon color="#8395a7" size="16px" icon="ic_edit"></Icon>
                </RemoveIcon>
              </div>
            </DropdownHead>

            <DropdownBoddy
              status={dropStatus}
              ref={refDropDownBoddy}
              className={dropStatus ? "DropdownBoddy open" : "DropdownBoddy"}
            >
              {types?.map(({ type, tittle, description }, index) => {
                switch (type) {
                  case "input":
                    return (
                      <InputDrop tittle={tittle} description={description} />
                    );
                  case "list":
                    return <List tittle={tittle} description={description} />;
                  case "time":
                    return <Time tittle={tittle} description={description} />;
                  case "notifications":
                    return (
                      <Notifications
                        tittle={tittle}
                        description={description}
                      />
                    );
                  case "toggle":
                    return (
                      <ToggleDrop tittle={tittle} description={description} />
                    );
                  case type:
                    return <Action type={type} />;
                }
              })}
              {check && (
                <div className="check">
                  <Check tittle={tittleCheck} />
                </div>
              )}
            </DropdownBoddy>
          </DropdownContainer>

          {openModal && (
            <ModalDelete
              closeAlert={handleOpenAlert}
              acepAlert={handleDeleteDropdown}
            />
          )}
        </>
      )}
    </>
  );
}
