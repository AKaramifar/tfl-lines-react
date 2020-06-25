import React, {useState, useEffect} from "react";
import Modes from "./components/Modes.js";
import Vehicles from "./components/Vehicles.js"
import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  // const [selectedVehicle, setSelectedVehicle] = useState("");

  useEffect(() => {
    fetch(`https://cyf-akaramifar-tfl-lines.herokuapp.com/mode`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      setModes(data);
    })
    .catch((error) => console.log(error));
  },[])

  const selectMode = (mode) => {
    setSelectedMode(mode);
  }
  

  return (
    <div className="Div_App_Style">
      <header className="Div_Header_Style">
        <div className="Div_LogoPart_Style">
          <div className="Div_Circle_Style">
            <div className="Div_Rectangle_Style">
              <p className="P_CYF_Style">CYF</p>
            </div>
          </div>
        </div>
        <div className="Div_TilePart_Style">
          <p className="P_Title_Style">Transport for London Unified</p>
        </div>
      </header>
      <main className="Div_Main_Style">
        <div className="Div_LeftPanel_Style">
          {
            modes ? <Modes Modes_Pr={modes} selectMode_F={selectMode} selectedMode_Pr={selectedMode}/> : <p>Loading</p>
          }
        </div>
        <div className="Div_RightPanel_Style">
          <p className="P_ShowSelectMode_Style">{selectedMode !== "" ? selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1) : "Choose a Mode of Transport"}</p>
          <div className="Div_ShowSelectMode_Style">
          {
            selectedMode !== "" ? <Vehicles selectedMode_Pr={selectedMode} /> : <p>Loading</p>
          }
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}

export default App;
