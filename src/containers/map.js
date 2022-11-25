import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

const issSVG = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/International_Space_Station.png"),
    iconSize: [125],
  });
};

const IssMap = ({ data }) => {
  return (
    <MapContainer
      className="rounded-xl"
      center={[data?.iss_position.latitude, data?.iss_position.longitude]}
      zoom={1.5}
      style={{ height: "50vh", width: "50vw" }}
      scrollWheelZoom={false}
      // className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[data?.iss_position.latitude, data?.iss_position.longitude]}
        icon={issSVG()}
      >
        <Popup>
          This is supposed to be the ISS. It is currently: <br />
          Lat: {data?.iss_position.latitude} <br />
          Long: {data?.iss_position.longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default IssMap;
