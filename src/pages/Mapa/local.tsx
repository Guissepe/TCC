import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Pontos() {
  const position = [-43.834, -43.0585];
  const center = {
    lat: -25.7346,
    lng: -53.0585,
  };
  /* const pos = [
  { lat: -25.74936185614262, lng: -53.052849769592285 },
  { lat: -25.748588633834604, lng: -53.052492103915796 },
  { lat: -25.748298866864353, lng: -53.0555641651123 },
  { lat: -25.749313538654487, lng: -53.06108951568604 },
  { lat: -25.74928454815217, lng: -53.06111097335816 },
  { lat: -25.745187152664922, lng: -53.062033653259284 },
  { lat: -25.738248316362302, lng: -53.06370735168458 },
  { lat: -25.736354078953365, lng: -53.05349349975587 },
  { lat: -25.73634441439938, lng: -53.05250644683838 },
  { lat: -25.73829663835028, lng: -53.052034378051765 },
  { lat: -25.739968567034165, lng: -53.06053161621094 },
  { lat: -25.742577888498243, lng: -53.05995225906373 },
  { lat: -25.742249310430076, lng: -53.05713057518006 },
  { lat: -25.74242326363417, lng: -53.05707693099976 },
]; */

  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>;
}

export default Pontos;
