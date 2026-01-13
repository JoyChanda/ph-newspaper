'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { districts } from '@/data/districts';
import { getNewsByDistrict } from '@/data/newsData';

// Custom Icon
const icon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Map Controller
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
  // Filter districts that have news
  const activeDistricts = useMemo(() => {
    return districts.map(d => {
      const news = getNewsByDistrict(d.id);
      return { ...d, newsCount: news.length, topNews: news.slice(0, 3) };
    }).filter(d => d.newsCount > 0);
  }, []);

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
        
        {activeDistricts.map((district) => (
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
            <Popup minWidth={250}>
              <div className="font-sans p-1">
                <div className="flex justify-between items-center mb-2 border-b pb-1">
                   <h3 className="font-bold text-lg text-red-600">{district.bnName}</h3>
                   <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">
                     {district.newsCount} টি খবর
                   </span>
                </div>
                
                <ul className="space-y-2 mb-3">
                  {district.topNews.map(news => (
                    <li key={news.id} className="text-sm border-b border-gray-100 pb-1 last:border-0 hover:text-red-600">
                      <Link href={`/news/${news.category}/${news.id}`} className="line-clamp-2 leading-tight">
                        {news.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/saradesh/${district.id}`}
                  className="block w-full text-center bg-red-600 text-white text-sm py-1.5 rounded hover:bg-red-700 transition"
                >
                  সব খবর দেখুন &rarr;
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
