import { Marker, Popup } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import type { Train } from '../types/train';

interface TrainMarkerProps {
  train: Train;
  isSelected: boolean;
  onClick: () => void;
}

const createTrainIcon = (train: Train, isSelected: boolean) => {
  const getColor = () => {
    switch (train.type) {
      case 'railjet': return '#8B0000';
      case 'eurocity': return '#FF4500';
      case 'express': return '#DC143C';
      case 'intercity': return '#FF8C00';
      case 'regional': return '#32CD32';
      case 'freight': return '#696969';
      default: return '#4169E1';
    }
  };

  const getStatusColor = () => {
    switch (train.status) {
      case 'delayed': return '#DC2626';
      case 'cancelled': return '#991B1B';
      default: return getColor();
    }
  };

  const size = isSelected ? 20 : 16;
  const borderWidth = isSelected ? 3 : 2;

  return new DivIcon({
    html: `
      <div style="
        background: ${getStatusColor()};
        border: ${borderWidth}px solid white;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        position: relative;
        ${isSelected ? 'animation: pulse 2s infinite;' : ''}
      ">
        <div style="
          position: absolute;
          top: -3px;
          right: -3px;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 8px solid ${getStatusColor()};
          transform: rotate(${train.direction}deg);
        "></div>
        <div style="
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 8px;
          font-weight: bold;
          white-space: nowrap;
          ${isSelected ? 'display: block;' : 'display: none;'}
        ">
          ${train.number}
        </div>
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      </style>
    `,
    className: 'train-marker-custom',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
};

export function TrainMarker({ train, isSelected, onClick }: TrainMarkerProps) {
  const getStatusBadge = () => {
    if (train.status === 'delayed') {
      return `<span style="background: #FEE2E2; color: #DC2626; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">+${train.delay}min</span>`;
    }
    if (train.status === 'cancelled') {
      return `<span style="background: #FEE2E2; color: #991B1B; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">Cancelled</span>`;
    }
    return `<span style="background: #F0FDF4; color: #16A34A; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">On Time</span>`;
  };

  const getOccupancyColor = () => {
    if (train.capacity.total === 0) return '#6B7280';
    const percentage = (train.capacity.occupied / train.capacity.total) * 100;
    if (percentage > 85) return '#DC2626';
    if (percentage > 70) return '#EA580C';
    if (percentage > 50) return '#D97706';
    return '#16A34A';
  };

  const getTypeIcon = () => {
    switch (train.type) {
      case 'railjet': return '🚄';
      case 'eurocity': return '🚅';
      case 'express': return '🚆';
      case 'intercity': return '🚈';
      case 'regional': return '🚉';
      case 'freight': return '🚂';
      default: return '🚊';
    }
  };

  return (
    <Marker
      position={[train.position.lat, train.position.lng]}
      icon={createTrainIcon(train, isSelected)}
      eventHandlers={{
        click: onClick
      }}
    >
      <Popup className="train-popup" maxWidth={300}>
        <div style={{ minWidth: '250px', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ marginBottom: '12px', borderBottom: '1px solid #E5E7EB', paddingBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '20px' }}>{getTypeIcon()}</span>
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '700', color: '#111827' }}>
                {train.number}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: getStatusBadge() }} />
            </div>
            <p style={{ margin: '0', fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>
              {train.name}
            </p>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '600' }}>
              {train.operator}
            </p>
          </div>
          
          <div style={{ marginBottom: '12px', fontSize: '13px', lineHeight: '1.5' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
              <div>
                <strong style={{ color: '#374151', display: 'block' }}>From:</strong>
                <span style={{ color: '#6B7280' }}>{train.origin}</span>
              </div>
              <div>
                <strong style={{ color: '#374151', display: 'block' }}>To:</strong>
                <span style={{ color: '#6B7280' }}>{train.destination}</span>
              </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong style={{ color: '#374151' }}>Next Station:</strong>
              <span style={{ color: '#6B7280', marginLeft: '4px' }}>{train.nextStation}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <strong style={{ color: '#374151' }}>Departure:</strong>
                <span style={{ color: '#6B7280', marginLeft: '4px' }}>{train.departureTime}</span>
              </div>
              <div>
                <strong style={{ color: '#374151' }}>Arrival:</strong>
                <span style={{ color: '#6B7280', marginLeft: '4px' }}>{train.arrivalTime}</span>
              </div>
            </div>
            {train.platform && (
              <div style={{ marginTop: '8px' }}>
                <strong style={{ color: '#374151' }}>Platform:</strong>
                <span style={{ color: '#6B7280', marginLeft: '4px' }}>{train.platform}</span>
              </div>
            )}
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '12px', 
            backgroundColor: '#F9FAFB',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #E5E7EB'
          }}>
            <div>
              <strong style={{ color: '#374151' }}>Speed:</strong>
              <span style={{ color: '#6B7280', marginLeft: '4px' }}>{train.speed} km/h</span>
            </div>
            {train.capacity.total > 0 && (
              <div>
                <strong style={{ color: '#374151' }}>Occupancy:</strong>
                <span style={{ 
                  color: getOccupancyColor(), 
                  fontWeight: '600', 
                  marginLeft: '4px' 
                }}>
                  {Math.round((train.capacity.occupied / train.capacity.total) * 100)}%
                </span>
                <span style={{ color: '#9CA3AF', fontSize: '10px', marginLeft: '4px' }}>
                  ({train.capacity.occupied}/{train.capacity.total})
                </span>
              </div>
            )}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}