'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { districts } from '@/data/districts';
import { getNewsByDistrict, getTranslatedArticle } from '@/data/newsData';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

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
  const { theme, resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter districts that have news
  const activeDistricts = useMemo(() => {
    return districts.map(d => {
      const news = getNewsByDistrict(d.id);
      return { ...d, newsCount: news.length, topNews: news.slice(0, 3).map(n => getTranslatedArticle(n, language)) };
    }).filter(d => d.newsCount > 0);
  }, [language]);

  const currentTheme = resolvedTheme || theme;
  const tileLayerUrl = mounted && currentTheme === 'dark'
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className="h-full w-full relative">
       <MapContainer 
        center={[23.6850, 90.3563]} 
        zoom={7} 
        scrollWheelZoom={true}
        className="h-full w-full rounded-xl z-0"
        style={{ height: '100%', width: '100%' }}
      >
        {mounted && (
          <TileLayer
            key={currentTheme} // Force re-render of TileLayer on theme change
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url={tileLayerUrl}
          />
        )}
        
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
              <div className="font-sans p-1 dark:text-gray-100">
                <div className="flex justify-between items-center mb-2 border-b dark:border-gray-700 pb-1">
                   <h3 className="font-bold text-lg text-red-600">{language === 'bn' ? district.bnName : district.name}</h3>
                   <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded text-xs font-bold">
                     {language === 'bn' ? `${district.newsCount.toLocaleString('bn-BD')} টি খবর` : `${district.newsCount} news`}
                   </span>
                </div>
                
                <ul className="space-y-3 mb-4">
                  {district.topNews.map(news => (
                    <li key={news.id} className="border-b border-gray-100 dark:border-slate-800 pb-2 last:border-0">
                      <Link 
                        href={`/news/${news.category}/${news.id}`} 
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-500 transition-colors line-clamp-2 leading-snug"
                      >
                        {news.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/saradesh/${district.id}`}
                  className="block w-full text-center bg-red-600 !text-white font-bold text-sm py-2 rounded hover:bg-red-700 transition shadow-md"
                >
                  {language === 'bn' ? 'সব খবর দেখুন \u2192' : 'View all news \u2192'}
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
