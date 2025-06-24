import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { TrainMarker } from './TrainMarker';
import { StationMarker } from './StationMarker';
import { RouteDisplay } from './RouteDisplay';
import type { Train } from '../types/train';
import type { Station } from '../types/train';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  trains: Train[];
  stations: Station[];
  selectedTrain: Train | null;
  onTrainSelect: (train: Train) => void;
}

function MapController({ selectedTrain }: { selectedTrain: Train | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedTrain) {
      map.setView([selectedTrain.position.lat, selectedTrain.position.lng], 10, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedTrain, map]);

  return null;
}

export function TrainMap({ trains, stations, selectedTrain, onTrainSelect }: MapProps) {
  const mapRef = useRef(null);
  const [showStations, setShowStations] = useState(true);
  const [showRoutes, setShowRoutes] = useState(true);
  const [mapStyle, setMapStyle] = useState('openstreetmap');

  const mapStyles = {
    openstreetmap: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    },
    terrain: {
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>'
    }
  };

  return (
    <div className="relative h-full w-full">
      {/* Map Controls */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-[1000] bg-white rounded-lg shadow-lg p-2 md:p-3 space-y-2">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Map Style</label>
          <select
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value)}
            className="text-xs border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="openstreetmap">Street Map</option>
            <option value="satellite">Satellite</option>
            <option value="terrain">Terrain</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={showStations}
              onChange={(e) => setShowStations(e.target.checked)}
              className="rounded h-3 w-3"
            />
            Show Stations
          </label>
          
          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={showRoutes}
              onChange={(e) => setShowRoutes(e.target.checked)}
              className="rounded h-3 w-3"
            />
            Show Routes
          </label>
        </div>

        <div className="border-t pt-2">
          <div className="text-xs font-medium text-gray-700 mb-1">Legend</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-800"></div>
              <span>RailJet</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span>EuroCity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <span>Express</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span>InterCity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Regional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span>Freight</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Status Indicator */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-[1000] bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">LIVE</span>
        </div>
      </div>

      <MapContainer
        ref={mapRef}
        center={[47.4979, 19.0402]} // Budapest center
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution={mapStyles[mapStyle as keyof typeof mapStyles].attribution}
          url={mapStyles[mapStyle as keyof typeof mapStyles].url}
        />
        
        <MapController selectedTrain={selectedTrain} />
        
        {/* Train Routes */}
        {showRoutes && trains.map((train) => (
          <RouteDisplay 
            key={`route-${train.id}`} 
            train={train} 
            isSelected={selectedTrain?.id === train.id}
          />
        ))}
        
        {/* Train Markers */}
        {trains.map((train) => (
          <TrainMarker 
            key={train.id} 
            train={train} 
            isSelected={selectedTrain?.id === train.id}
            onClick={() => onTrainSelect(train)}
          />
        ))}
        
        {/* Station Markers */}
        {showStations && stations.map((station) => (
          <StationMarker key={station.id} station={station} />
        ))}
      </MapContainer>
    </div>
  );
}
