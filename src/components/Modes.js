import React from "react";

const Modes = ({
  Modes_Pr,
  selectMode_F,
  selectedMode_Pr,
  selectVehicle_F,
}) => {
  return (
    <div className="Div_Modes_Style">
      {Modes_Pr.sort((a, b) => a.modeName.localeCompare(b.modeName)).map(
        (mode, index) => {
          return (
            <div
              className={
                selectedMode_Pr === mode.modeName
                  ? "Div_Vehicle_Selected_Style"
                  : "Div_Vehicle_Style"
              }
              key={`vehicle_${index}`}
              onClick={() => {
                selectMode_F(mode.modeName);
                selectVehicle_F(null);
              }}
            >
              <p className="P_Vehicle_Style">
                {mode.modeName.charAt(0).toUpperCase() + mode.modeName.slice(1)}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Modes;
