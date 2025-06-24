import { Polyline } from 'react-leaflet';
import type { Train } from '../types/train';

interface RouteDisplayProps {
  train: Train;
  isSelected: boolean;
}

export function RouteDisplay({ train, isSelected }: RouteDisplayProps) {
  if (!isSelected || !train.route || train.route.length < 2) {
    return null;
  }

  const getRouteColor = (trainType: string) => {
    switch (trainType) {
      case 'railjet': return '#8B0000';
      case 'eurocity': return '#FF4500';
      case 'express': return '#DC143C';
      case 'intercity': return '#FF8C00';
      case 'regional': return '#32CD32';
      case 'freight': return '#696969';
      default: return '#4169E1';
    }
  };

  // Convert route to coordinate pairs
  const routeCoordinates = train.route.map(point => [point.lat, point.lng] as [number, number]);

  // Split route into completed and remaining sections
  const completedRoute = routeCoordinates.slice(0, train.currentRouteIndex + 1);
  const remainingRoute = routeCoordinates.slice(train.currentRouteIndex);

  return (
    <>
      {/* Completed route (darker/faded) */}
      {completedRoute.length > 1 && (
        <Polyline
          positions={completedRoute}
          color={getRouteColor(train.type)}
          weight={4}
          opacity={0.4}
          dashArray="5, 10"
        />
      )}
      
      {/* Remaining route (bright) */}
      {remainingRoute.length > 1 && (
        <Polyline
          positions={remainingRoute}
          color={getRouteColor(train.type)}
          weight={4}
          opacity={0.8}
        />
      )}
      
      {/* Station markers along route */}
      {train.route
        .filter(point => point.stationId)
        .map((station, index) => (
          <div key={`${train.id}-station-${index}`} />
        ))}
    </>
  );
}