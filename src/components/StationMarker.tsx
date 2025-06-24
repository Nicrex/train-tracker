import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import type { Station } from '../types/train';

interface StationMarkerProps {
  station: Station;
}

const createStationIcon = (station: Station) => {
  const getColor = () => {
    switch (station.type) {
      case 'major': return '#1f2937';
      case 'regional': return '#4b5563';
      case 'local': return '#9ca3af';
      default: return '#6b7280';
    }
  };

  const getSize = () => {
    switch (station.type) {
      case 'major': return 12;
      case 'regional': return 8;
      case 'local': return 6;
      default: return 8;
    }
  };

  const size = getSize();
  
  return new DivIcon({
    html: `
      <div style="
        background: ${getColor()};
        border: 2px solid white;
        border-radius: 2px;
        width: ${size}px;
        height: ${size}px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      "></div>
    `,
    className: 'station-marker-custom',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
};

export function StationMarker({ station }: StationMarkerProps) {
  return (
    <Marker
      position={[station.position.lat, station.position.lng]}
      icon={createStationIcon(station)}
    >
      <Popup>
        <div style={{ minWidth: '150px', fontFamily: 'Inter, sans-serif' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>
            {station.name}
          </h3>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            <div style={{ marginBottom: '4px' }}>
              <strong>Type:</strong> <span style={{ textTransform: 'capitalize' }}>{station.type}</span>
            </div>
            <div>
              <strong>Platforms:</strong> {station.platforms}
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}