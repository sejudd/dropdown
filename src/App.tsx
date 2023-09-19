import Dropdown from "./componentes/dropdown/Dropdown";
import { List } from "./componentes/dropdown/subComponents/list/List";
import { InputDrop } from "./componentes/dropdown/subComponents/input/Input";
import { ToggleDrop } from "./componentes/dropdown/subComponents/notification/toggle/Toggle";
import { Time } from "./componentes/dropdown/subComponents/notification/time/Time";
import { Notifications } from "./componentes/dropdown/subComponents/notification/Notification";
import { StylesProvider } from "@aranda/aranda.ui";
import { ExpandContent } from "./componentes/dropdown/subComponents/expandContent/ExpandContent";
import { ExpantContext } from "./componentes/dropdown/context/ExpantContext"


function App() {
  return (
    <>

    
    <div className="container-tiitle">
        <h1>Ajustes de vinculación, políticas y notificaciones</h1>
        <p>
          Defina la vinculación, las políticas y las notificaciones asociadas a
          los dispositivos
        </p>
      </div>

     
      
      <div className="container">

        <ExpantContext>
           <ExpandContent  status={true}/>
        </ExpantContext>
        
        
        



      </div>
    </>
  );
}

export default App;
