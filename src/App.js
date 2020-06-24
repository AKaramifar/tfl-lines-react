import React from "react";
import Modes from "./components/Modes.js";
import "./App.css";

function App() {
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
          <Modes />
        </div>
        <div className="Div_RightPanel_Style"></div>
      </main>
    </div>
  );
}

export default App;
