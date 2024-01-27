import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import  maptiler  from "./MapTiler.jsx"
import "leaflet/dist/leaflet.css"

function NearbyPharmacy() {
  const [position, setPosition] = useState({ lat: 19.206694262101415, lng:72.87257312147827 });
  const mapRef = useRef;
  const ZOOM_LEVEL = 15;
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  let locList = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  ];
  return (
    <main className='flex items-center justify-center h-screen'>
      <section className='w-4/5 h-4/5 rounded-lg bg-gray-300 flex'>
        <div className='w-1/2 h-full flex flex-col p-2 border-r-2 box-border'>
          <div>
            {position.lat && position.lng
              ? `Latitude: ${position.lat}, Longitude: ${position.lng}`
              : "Could not get your location data"}
          </div>
          <ul className='rounded-sm border-y-2 flex-shrink  overflow-hidden hover:overflow-scroll hover:overflow-x-hidden'>
            {locList.map((loc) => {
              return <li className='border-y-2'>{loc}</li>;
            })}
          </ul>
        </div>
        <div className='w-1/2 h-full p-2 flex justify-center box-border'>
          <MapContainer center = {position} zoom = {ZOOM_LEVEL}>
            <TileLayer url = {maptiler.url} attribution ={maptiler.attribution} />
          </MapContainer>
        </div>
      </section>
    </main>
  );
}

export default NearbyPharmacy;
