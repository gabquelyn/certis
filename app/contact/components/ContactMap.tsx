"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon safely
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function ContactMap() {
  const position: L.LatLngExpression = [6.5244, 3.3792]; // Lagos, Nigeria

  return (
    <div className="relative z-10 w-full h-100 md:h-150 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      {/* Map Container */}
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Colorful tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        />

        {/* Marker */}
        <Marker position={position}>
          <Popup className="text-sm">
            <span className="font-bold">Certis Global Advisory Limited</span>
            <br />
            Lagos | Global
          </Popup>
        </Marker>
      </MapContainer>

      {/* Optional overlay card for address/email */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-xs">
        <p className="font-semibold text-lg text-primary mb-1">
          Our Office
        </p>
        <p>Lagos, Nigeria</p>
        <p className="mt-2">Email: info@certisglobal.com</p>
      </div>
    </div>
  );
}