import React, { useState, useEffect } from "react";

const Vehicles = ({ selectedMode_Pr, selectVehicle_F }) => {
  const [vehicles, setVehicles] = useState(null);
  useEffect(() => {
    fetch(
      `https://cyf-akaramifar-tfl-lines.herokuapp.com/vehicle?vehicle=${selectedMode_Pr}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => console.log(error));
  }, [selectedMode_Pr]);
  return (
    <div className="Div_ModesCardView_Style">
      {vehicles !== null ? (
        vehicles.length > 0 ? (
          vehicles
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((vehicle, index) => {
              return (
                <div
                  className="Div_VehicleCard_Style"
                  key={index}
                  onClick={() => selectVehicle_F(vehicle.name)}
                >
                  <p className="P_VehicleCard_Style">{vehicle.name}</p>
                </div>
              );
            })
        ) : (
          <p className="P_Error_Style">Nothing to Show</p>
        )
      ) : (
        <p className="P_Loading_Style">Loading</p>
      )}
    </div>
  );
};

export default Vehicles;
