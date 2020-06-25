import React, { useState, useEffect } from "react";

const Route = ({ selectedVehicle_Pr }) => {
  const [routeDirection, setRouteDirection] = useState(null);
  useEffect(() => {
    fetch(
      `https://cyf-akaramifar-tfl-lines.herokuapp.com/route?route=${selectedVehicle_Pr}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        setRouteDirection(data);
      })
      .catch((error) => console.log(error));
  }, [selectedVehicle_Pr]);
  return routeDirection !== null ? (
    <div className="Div_Direction_Style">
      {routeDirection.routeSections && routeDirection.routeSections.map((direction, index) => {
        return (
          <div className="Div_DirectionCard_Style" key={`Direction_${index}`}>
            <div className="Div_DirectionSmallCard_Style">
              {direction.originationName}
            </div>
            <div className="Div_ArrowRight_Style"><i class="fas fa-chevron-right"></i></div>
            <div className="Div_DirectionSmallCard_Style">
              {direction.destinationName}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default Route;
