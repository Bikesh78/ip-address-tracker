import React, { useContext, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { AppContext } from "../App";

const IpMap = () => {
  const { state } = useContext(AppContext);

  // Function to move the map to the center of the markers after the map is loaded with new data
  function SetView({ center, zoom }) {
    const map = useMap();

    useEffect(() => {
      map.setView(center, zoom);
    });

    return null;
  }
  if (!state.data) {
    return <p>Loading</p>;
  }
  return (
    // <MapContainer
    //   center={[state.data.latitude, state.data.longitude]}
    //   zoom={13}
    //   scrollWheelZoom={true}
    // >
    <MapContainer
      center={[state.data.location.lat, state.data.loacation.lng]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[state.data.location.lat, state.data.location.lng]}
      ></Marker>
      <SetView
        center={[state.data.location.lat, state.data.location.lng]}
        zoom={13}
      />
    </MapContainer>
  );
};

export default IpMap;
