import React, { useState, useEffect } from "react";

function MyLocation() {
  const [position, setPosition] = useState({ lat: 0, lng: 0});

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

  let map;

  async function initMap(position) {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: {lat:+position.lat, lng:+position.lng},
      zoom: 8,
    });
  }

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
        <div className='w-1/2 h-full p-2 flex justify-center box-border' id="map">
          {/* <img
            className='flex-shrink'
            src='https://i.pinimg.com/736x/b0/99/77/b099774c41f2995aa16282dcb105f439.jpg'
            alt='none'
          /> */}
        </div>
      </section>
    </main>
  );
}

export default MyLocation;
