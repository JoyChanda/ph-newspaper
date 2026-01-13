'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { districts } from '@/data/districts';

// Custom Icon to avoid Next.js import issues
const icon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to handle map movement
function MapController({ selectedDistrict }) {
  const map = useMap();
  useEffect(() => {
    if (selectedDistrict) {
      map.flyTo([selectedDistrict.lat, selectedDistrict.lng], 10, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedDistrict, map]);
  return null;
}

export default function BangladeshMap({ selectedDistrict, onSelectDistrict }) {
  return (
    <div className="h-full w-full relative">
       <MapContainer 
        center={[23.6850, 90.3563]} 
        zoom={7} 
        scrollWheelZoom={true}
        className="h-full w-full rounded-xl z-0"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController selectedDistrict={selectedDistrict} />
        
        {districts.map((district) => (
          <Marker 
            key={district.id} 
            position={[district.lat, district.lng]}
            icon={icon}
            eventHandlers={{
              click: () => {
                onSelectDistrict(district);
              },
            }}
          >
            <Popup>
              <div className="text-center font-sans">
                <h3 className="font-bold text-lg text-red-600">{district.bnName}</h3>
                <p className="text-gray-600">{district.name}</p>
                <button 
                  onClick={() => onSelectDistrict(district)}
                  className="mt-2 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700 transition"
                >
                  খবর দেখুন
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
