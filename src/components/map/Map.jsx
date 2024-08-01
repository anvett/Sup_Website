// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const markerIconUrl = '/assets/icons/map_location.png';

// let DefaultIcon = L.icon({
//   iconUrl: markerIconUrl,
//   iconSize: [25, 35],
//   iconAnchor: [12, 31],
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// // Coordenadas para "15230 SW 286th St, apt 413 Homestead, FL 33033"
// const center = [25.5033, -80.4385];

// const Map = () => {
//   return (
//     <div className="w-full lg:w-3/4 mx-auto lg:py-spacing-4 p-spacing-1 lg:p-0 h-spacing-30">
//       <MapContainer center={center} zoom={13} className="h-full">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={center}>
//           <Popup>
//             15230 SW 286th St, apt 413 Homestead, FL 33033
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Importación dinámica del MapContainer y sus dependencias de 'react-leaflet'
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const markerIconUrl = '/assets/icons/map_location.png';

const Map = () => {
  const [defaultIcon, setDefaultIcon] = useState(null);

  useEffect(() => {
    // Asegurarse de que Leaflet y el icono se inicialicen solo en el cliente
    const DefaultIcon = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [25, 35],
      iconAnchor: [12, 31],
    });
    setDefaultIcon(DefaultIcon);
  }, []);

  const center = [25.5033, -80.4385]; // Coordenadas específicas

  return (
    <div className="w-full lg:w-3/4 mx-auto lg:py-spacing-4 p-spacing-1 lg:p-0 h-spacing-30">
      {defaultIcon && (
        <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} icon={defaultIcon}>
            <Popup>
              15230 SW 286th St, apt 413 Homestead, FL 33033
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;

