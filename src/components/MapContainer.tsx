import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { TrainMarker } from './TrainMarker';
import { StationMarker } from './StationMarker';
import type { Train } from '../types/train';
import type { Station } from '../types/train';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  trains: Train[];
  stations: Station[];
  selectedTrain: Train | null;
}

function MapController({ selectedTrain }: { selectedTrain: Train | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedTrain) {
      map.setView([selectedTrain.position.lat, selectedTrain.position.lng], 12, {
        animate: true,
        duration: 1
      });
    }
  }, [selectedTrain, map]);

  return null;
}

export function TrainMap({ trains, stations, selectedTrain }: MapProps) {
  const mapRef = useRef(null);
  const [showStations, setShowStations] = useState(true);

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showStations}
            onChange={(e) => setShowStations(e.target.checked)}
            className="rounded"
          />
          Show Stations
        </label>
      </div>

      <MapContainer
        ref={mapRef}
        center={[47.4979, 19.0402]} // Budapest center
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController selectedTrain={selectedTrain} />
        
        {trains.map((train) => (
          <TrainMarker key={train.id} train={train} />
        ))}
        
        {showStations && stations.map((station) => (
          <StationMarker key={station.id} station={station} />
        ))}
      </MapContainer>
    </div>
  );
}