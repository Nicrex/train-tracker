export interface Train {
  id: string;
  number: string;
  name: string;
  type: 'express' | 'regional' | 'intercity' | 'freight';
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
  direction: number; // degrees
  capacity: {
    total: number;
    occupied: number;
  };
}

export interface Station {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'major' | 'regional' | 'local';
  platforms: number;
}