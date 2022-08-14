import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { AppContext } from "../App";

const IpMap = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <MapContainer
      center={[27.67387, 85.31441]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.67387, 85.31441]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default IpMap;
