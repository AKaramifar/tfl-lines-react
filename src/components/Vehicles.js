import React, { useState, useEffect } from "react";

const Vehicles = ({ selectedMode_Pr }) => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    console.log(selectedMode_Pr);
    fetch(
      `https://cyf-akaramifar-tfl-lines.herokuapp.com/vehicle?vehicle=${selectedMode_Pr}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        setVehicles(data);
      })
      .catch((error) => console.log(error));
  }, [selectedMode_Pr]);
  return (
    <div className="Div_ModesCardView_Style">
      {vehicles !== [] ? (
        vehicles
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((vehicle, index) => {
            return (
              <div className="Div_VehicleCard_Style">
                <p className="P_VehicleCard_Style" key={index}>{vehicle.name}</p>
              </div>
            );
          })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Vehicles;
