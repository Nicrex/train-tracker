import type { Train } from '../types/train';

// Generate realistic train positions and data
export const generateTrains = (): Train[] => {
  const trains: Train[] = [
    {
      id: 'IC-401',
      number: 'IC 401',
      name: 'Kálmán Imre',
      type: 'intercity',
      position: { lat: 47.4976, lng: 19.0402 },
      destination: 'Debrecen',
      origin: 'Budapest-Nyugati',
      speed: 85,
      delay: 0,
      status: 'on-time',
      nextStation: 'Szolnok',
      direction: 90,
      capacity: { total: 400, occupied: 280 }
    },
    {
      id: 'IC-502',
      number: 'IC 502',
      name: 'Dózsa György',
      type: 'intercity',
      position: { lat: 47.1234, lng: 19.8765 },
      destination: 'Szeged',
      origin: 'Budapest-Nyugati',
      speed: 92,
      delay: 5,
      status: 'delayed',
      nextStation: 'Kecskemét',
      direction: 180,
      capacity: { total: 380, occupied: 220 }
    },
    {
      id: 'R-7301',
      number: 'R 7301',
      name: 'Balaton Express',
      type: 'regional',
      position: { lat: 47.6234, lng: 17.8901 },
      destination: 'Győr',
      origin: 'Budapest-Déli',
      speed: 65,
      delay: 0,
      status: 'on-time',
      nextStation: 'Győr',
      direction: 315,
      capacity: { total: 200, occupied: 145 }
    },
    {
      id: 'IC-803',
      number: 'IC 803',
      name: 'Bartók Béla',
      type: 'intercity',
      position: { lat: 46.8901, lng: 18.5432 },
      destination: 'Pécs',
      origin: 'Budapest-Déli',
      speed: 78,
      delay: 2,
      status: 'on-time',
      nextStation: 'Pécs',
      direction: 225,
      capacity: { total: 350, occupied: 190 }
    },
    {
      id: 'R-4521',
      number: 'R 4521',
      name: 'Tisza',
      type: 'regional',
      position: { lat: 48.0123, lng: 20.5678 },
      destination: 'Miskolc',
      origin: 'Budapest-Keleti',
      speed: 55,
      delay: 0,
      status: 'on-time',
      nextStation: 'Miskolc',
      direction: 45,
      capacity: { total: 180, occupied: 95 }
    },
    {
      id: 'IC-901',
      number: 'IC 901',
      name: 'Árpád',
      type: 'intercity',
      position: { lat: 47.3456, lng: 20.8901 },
      destination: 'Budapest-Keleti',
      origin: 'Debrecen',
      speed: 88,
      delay: 8,
      status: 'delayed',
      nextStation: 'Szolnok',
      direction: 270,
      capacity: { total: 420, occupied: 380 }
    },
    {
      id: 'R-6102',
      number: 'R 6102',
      name: 'Duna',
      type: 'regional',
      position: { lat: 46.4567, lng: 19.2345 },
      destination: 'Budapest-Nyugati',
      origin: 'Szeged',
      speed: 72,
      delay: 0,
      status: 'on-time',
      nextStation: 'Kecskemét',
      direction: 0,
      capacity: { total: 160, occupied: 120 }
    },
    {
      id: 'EX-1',
      number: 'EX 1',
      name: 'Hungária',
      type: 'express',
      position: { lat: 47.5234, lng: 19.1567 },
      destination: 'Wien Westbahnhof',
      origin: 'Budapest-Keleti',
      speed: 120,
      delay: 0,
      status: 'on-time',
      nextStation: 'Győr',
      direction: 315,
      capacity: { total: 500, occupied: 420 }
    },
    {
      id: 'F-8901',
      number: 'F 8901',
      name: 'Cargo Express',
      type: 'freight',
      position: { lat: 47.2890, lng: 19.5432 },
      destination: 'Szolnok',
      origin: 'Budapest-Keleti',
      speed: 45,
      delay: 0,
      status: 'on-time',
      nextStation: 'Szolnok',
      direction: 90,
      capacity: { total: 0, occupied: 0 }
    },
    {
      id: 'R-3456',
      number: 'R 3456',
      name: 'Mátra',
      type: 'regional',
      position: { lat: 47.8901, lng: 19.7654 },
      destination: 'Budapest-Nyugati',
      origin: 'Miskolc',
      speed: 68,
      delay: 3,
      status: 'delayed',
      nextStation: 'Hatvan',
      direction: 225,
      capacity: { total: 140, occupied: 85 }
    }
  ];

  return trains;
};

// Simulate real-time updates
export const updateTrainPositions = (trains: Train[]): Train[] => {
  return trains.map(train => {
    // Simulate movement based on speed and direction
    const speedKmh = train.speed;
    const speedMs = speedKmh / 3.6; // Convert to m/s
    const distancePerSecond = speedMs / 1000; // Convert to km/s
    
    // Calculate new position (simplified)
    const deltaLat = (distancePerSecond * Math.cos(train.direction * Math.PI / 180)) / 111; // Rough conversion
    const deltaLng = (distancePerSecond * Math.sin(train.direction * Math.PI / 180)) / (111 * Math.cos(train.position.lat * Math.PI / 180));
    
    return {
      ...train,
      position: {
        lat: train.position.lat + deltaLat,
        lng: train.position.lng + deltaLng
      },
      // Randomly update delay
      delay: Math.max(0, train.delay + (Math.random() - 0.5) * 2),
      // Update capacity occasionally
      capacity: {
        ...train.capacity,
        occupied: Math.min(train.capacity.total, Math.max(0, train.capacity.occupied + Math.floor((Math.random() - 0.5) * 10)))
      }
    };
  });
};