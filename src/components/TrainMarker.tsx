import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import type { Train } from '../types/train';

interface TrainMarkerProps {
  train: Train;
}

const createTrainIcon = (train: Train) => {
  const getColor = () => {
    switch (train.type) {
      case 'express': return '#ef4444';
      case 'intercity': return '#f59e0b';
      case 'regional': return '#10b981';
      case 'freight': return '#6b7280';
      default: return '#3b82f6';
    }
  };

  const getStatusColor = () => {
    switch (train.status) {
      case 'delayed': return '#ef4444';
      case 'cancelled': return '#dc2626';
      default: return getColor();
    }
  };

  return new DivIcon({
    html: `
      <div style="
        background: ${getStatusColor()};
        border: 2px solid white;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        transform: rotate(${train.direction}deg);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 6px solid ${getStatusColor()};
          transform: rotate(-${train.direction}deg);
        "></div>
      </div>
    `,
    className: 'train-marker-custom',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8]
  });
};

export function TrainMarker({ train }: TrainMarkerProps) {
  const getStatusBadge = () => {
    if (train.status === 'delayed') {
      return `<span style="background: #fef2f2; color: #dc2626; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 500;">+${train.delay}min</span>`;
    }
    if (train.status === 'cancelled') {
      return `<span style="background: #fef2f2; color: #dc2626; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 500;">Cancelled</span>`;
    }
    return `<span style="background: #f0fdf4; color: #16a34a; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 500;">On Time</span>`;
  };

  const getOccupancyColor = () => {
    if (train.capacity.total === 0) return '#6b7280'; // Freight
    const percentage = (train.capacity.occupied / train.capacity.total) * 100;
    if (percentage > 80) return '#ef4444';
    if (percentage > 60) return '#f59e0b';
    return '#10b981';
  };

  return (
    <Marker
      position={[train.position.lat, train.position.lng]}
      icon={createTrainIcon(train)}
    >
      <Popup className="train-popup">
        <div style={{ minWidth: '200px', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
              {train.number}
            </h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
              {train.name}
            </p>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: '500' }}>
                {train.type}
              </span>
              <div dangerouslySetInnerHTML={{ __html: getStatusBadge() }} />
            </div>
          </div>

          <div style={{ marginBottom: '8px', fontSize: '13px', lineHeight: '1.4' }}>
            <div style={{ marginBottom: '2px' }}>
              <strong style={{ color: '#374151' }}>From:</strong> <span style={{ color: '#6b7280' }}>{train.origin}</span>
            </div>
            <div style={{ marginBottom: '2px' }}>
              <strong style={{ color: '#374151' }}>To:</strong> <span style={{ color: '#6b7280' }}>{train.destination}</span>
            </div>
            <div>
              <strong style={{ color: '#374151' }}>Next:</strong> <span style={{ color: '#6b7280' }}>{train.nextStation}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6b7280' }}>
            <div>
              <strong>Speed:</strong> {train.speed} km/h
            </div>
            {train.capacity.total > 0 && (
              <div>
                <strong>Occupancy:</strong> 
                <span style={{ color: getOccupancyColor(), fontWeight: '500', marginLeft: '4px' }}>
                  {Math.round((train.capacity.occupied / train.capacity.total) * 100)}%
                </span>
              </div>
            )}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}