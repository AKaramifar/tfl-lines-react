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
        setRouteDirection(data);
      })
      .catch((error) => console.log(error));
  }, [selectedVehicle_Pr]);
  return routeDirection !== null ? (
    <div className="Div_Direction_Style">
      {routeDirection.routeSections &&
      routeDirection.routeSections.length > 0 ? (
        routeDirection.routeSections.map((direction, index) => {
          return (
            <div className="Div_DirectionCard_Style" key={`Direction_${index}`}>
              <div className="Div_DirectionSmallCard_Style">
                <p className="P_Label_Style">START OF LINE</p>
                <p >{direction.originationName}</p>
              </div>
              <div className="Div_ArrowRight_Style">
                <i className="fas fa-chevron-right"></i>
              </div>
              <div className="Div_DirectionSmallCard_Style">
                <p className="P_Label_Style">END OF LINE</p>
                <p>{direction.destinationName}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="P_Error_Style">Nothing to Show</p>
      )}
    </div>
  ) : (
    <p className="P_Loading_Style">Loading</p>
  );
};

export default Route;
