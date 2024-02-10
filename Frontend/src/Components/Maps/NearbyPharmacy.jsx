import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import  maptiler  from './MapTiler'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
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
    <>
    <div className="bg-fuchsia-50 relatives text-sm mr-5 sm:text-xl -z-0 relative md:text-2xl lg:text-3xl">
    <div className='py-3 flex flex-wrap border-b-2 border-rose-400 items-center '>
    <Link exact to='/'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
    <p className='text-2xl sm:text-4xl lg:text-6xl lg:pl-40 justify-center mb-0 lg:mx-auto'>Pharmacy Finder</p>
    </div>

    <main className='flex items-center justify-center h-screen'>
      <section className='md:w-4/5 h-4/5 rounded-lg bg-gray-300 flex'>
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
          <MapContainer center = {position} zoom = {ZOOM_LEVEL} >
            <TileLayer url = {maptiler.url} attribution ={maptiler.attribution} />
          </MapContainer>
        </div>
      </section>
    </main>
    </div>
    </>
  );
}

export default NearbyPharmacy;
