export interface Train {
  id: string;
  number: string;
  name: string;
  type: 'express' | 'regional' | 'intercity' | 'freight' | 'railjet' | 'eurocity';
  position: {
    lat: number;
    lng: number;
  };
  destination: string;
  origin: string;
  speed: number;
  delay: number;
  status: 'on-time' | 'delayed' | 'cancelled';
  nextStation: string;
  direction: number;
  capacity: {
    total: number;
    occupied: number;
  };
  route: RoutePoint[];
  currentRouteIndex: number;
  operator: string;
  platform?: string;
  departureTime: string;
  arrivalTime: string;
}

export interface RoutePoint {
  lat: number;
  lng: number;
  stationId?: string;
  stationName?: string;
  arrivalTime?: string;
  departureTime?: string;
  platform?: string;
}

export interface Station {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'major' | 'regional' | 'local' | 'junction';
  platforms: number;
  services: string[];
  zone?: string;
}