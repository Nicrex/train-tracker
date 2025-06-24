import type { Train } from '../types/train';
import { trainRoutes } from './routes';

// Generate comprehensive Hungarian train data
export const generateTrains = (): Train[] => {
  const trains: Train[] = [
    // START: New trains for Székesfehérvár
    {
      id: 'IC-204',
      number: 'IC 204',
      name: 'Balaton',
      type: 'intercity',
      position: { lat: 47.4644, lng: 19.0239 }, // Kelenföld
      destination: 'Keszthely',
      origin: 'Budapest-Déli',
      speed: 110,
      delay: 2,
      status: 'on-time',
      nextStation: 'Székesfehérvár',
      direction: 240,
      capacity: { total: 350, occupied: 280 },
      route: trainRoutes['budapest-balaton'],
      currentRouteIndex: 1,
      operator: 'MÁV-START',
      platform: '11',
      departureTime: '15:05',
      arrivalTime: '17:55'
    },
    {
      id: 'R-9707',
      number: 'R 9707',
      name: 'Göcsej',
      type: 'regional',
      position: { lat: 47.18, lng: 17.5 }, 
      destination: 'Budapest-Déli',
      origin: 'Szombathely',
      speed: 90,
      delay: 0,
      status: 'on-time',
      nextStation: 'Veszprém',
      direction: 95,
      capacity: { total: 220, occupied: 150 },
      route: [...trainRoutes['szekesfehervar-szombathely']].reverse(),
      currentRouteIndex: 3,
      operator: 'MÁV-START',
      platform: '1',
      departureTime: '14:30',
      arrivalTime: '17:28'
    },
    {
      id: 'S-440',
      number: 'S440',
      name: 'Local Service',
      type: 'regional',
      position: { lat: 47.1836, lng: 18.4253 }, // Székesfehérvár
      destination: 'Pusztaszabolcs',
      origin: 'Székesfehérvár',
      speed: 55,
      delay: 0,
      status: 'on-time',
      nextStation: 'Börgönd',
      direction: 130,
      capacity: { total: 150, occupied: 40 },
      route: [
        { lat: 47.1836, lng: 18.4253, stationId: 'szekesfehervar' },
        { lat: 47.13, lng: 18.55 },
        { lat: 47.08, lng: 18.65 },
        { lat: 47.13, lng: 18.75, stationId: 'pusztaszabolcs' }
      ],
      currentRouteIndex: 0,
      operator: 'MÁV-START',
      platform: '8',
      departureTime: '16:10',
      arrivalTime: '16:55'
    },
    // END: New trains for Székesfehérvár
    
    // International Trains
    {
      id: 'RJ-60',
      number: 'RJ 60',
      name: 'Liszt Ferenc',
      type: 'railjet',
      position: { lat: 47.6875, lng: 17.6504 },
      destination: 'Wien Hauptbahnhof',
      origin: 'Budapest-Keleti',
      speed: 140,
      delay: 0,
      status: 'on-time',
      nextStation: 'Győr',
      direction: 270,
      capacity: { total: 408, occupied: 320 },
      route: trainRoutes['budapest-gyor-vienna'],
      currentRouteIndex: 4,
      operator: 'MÁV-START',
      platform: '3',
      departureTime: '14:40',
      arrivalTime: '17:25'
    },
    {
      id: 'EC-170',
      number: 'EC 170',
      name: 'Hungaria',
      type: 'eurocity',
      position: { lat: 47.3000, lng: 19.5000 },
      destination: 'Bucuresti Nord',
      origin: 'Budapest-Keleti',
      speed: 120,
      delay: 5,
      status: 'delayed',
      nextStation: 'Szolnok',
      direction: 90,
      capacity: { total: 380, occupied: 290 },
      route: trainRoutes['budapest-debrecen'],
      currentRouteIndex: 2,
      operator: 'CFR',
      platform: '8',
      departureTime: '08:40',
      arrivalTime: '19:15'
    },

    // Intercity Trains
    {
      id: 'IC-401',
      number: 'IC 401',
      name: 'Kálmán Imre',
      type: 'intercity',
      position: { lat: 47.1817, lng: 20.1999 },
      destination: 'Debrecen',
      origin: 'Budapest-Nyugati',
      speed: 100,
      delay: 0,
      status: 'on-time',
      nextStation: 'Debrecen',
      direction: 90,
      capacity: { total: 400, occupied: 280 },
      route: trainRoutes['budapest-debrecen'],
      currentRouteIndex: 4,
      operator: 'MÁV-START',
      platform: '2',
      departureTime: '06:40',
      arrivalTime: '09:25'
    },
    {
      id: 'IC-502',
      number: 'IC 502',
      name: 'Dózsa György',
      type: 'intercity',
      position: { lat: 46.9077, lng: 19.6856 },
      destination: 'Szeged',
      origin: 'Budapest-Nyugati',
      speed: 95,
      delay: 3,
      status: 'delayed',
      nextStation: 'Szeged',
      direction: 180,
      capacity: { total: 380, occupied: 220 },
      route: trainRoutes['budapest-szeged'],
      currentRouteIndex: 3,
      operator: 'MÁV-START',
      platform: '4',
      departureTime: '10:40',
      arrivalTime: '13:15'
    },
    {
      id: 'IC-803',
      number: 'IC 803',
      name: 'Bartók Béla',
      type: 'intercity',
      position: { lat: 46.7000, lng: 18.3000 },
      destination: 'Pécs',
      origin: 'Budapest-Déli',
      speed: 85,
      delay: 0,
      status: 'on-time',
      nextStation: 'Pécs',
      direction: 225,
      capacity: { total: 350, occupied: 190 },
      route: trainRoutes['budapest-pecs'],
      currentRouteIndex: 5,
      operator: 'MÁV-START',
      platform: '1',
      departureTime: '12:40',
      arrivalTime: '15:25'
    },
    {
      id: 'IC-905',
      number: 'IC 905',
      name: 'Árpád',
      type: 'intercity',
      position: { lat: 47.9000, lng: 20.3000 },
      destination: 'Miskolc-Tiszai',
      origin: 'Budapest-Keleti',
      speed: 90,
      delay: 8,
      status: 'delayed',
      nextStation: 'Miskolc-Tiszai',
      direction: 45,
      capacity: { total: 420, occupied: 380 },
      route: trainRoutes['budapest-miskolc'],
      currentRouteIndex: 5,
      operator: 'MÁV-START',
      platform: '6',
      departureTime: '07:40',
      arrivalTime: '10:15'
    },

    // Regional Trains
    {
      id: 'R-7301',
      number: 'R 7301',
      name: 'Balaton Express',
      type: 'regional',
      position: { lat: 46.9048, lng: 18.0547 },
      destination: 'Balatonfüred',
      origin: 'Budapest-Déli',
      speed: 70,
      delay: 0,
      status: 'on-time',
      nextStation: 'Balatonfüred',
      direction: 315,
      capacity: { total: 200, occupied: 145 },
      route: trainRoutes['budapest-balaton'],
      currentRouteIndex: 5,
      operator: 'MÁV-START',
      platform: '2',
      departureTime: '09:15',
      arrivalTime: '11:30'
    },
    {
      id: 'R-4521',
      number: 'R 4521',
      name: 'Tisza',
      type: 'regional',
      position: { lat: 47.6667, lng: 19.6833 },
      destination: 'Miskolc-Tiszai',
      origin: 'Budapest-Keleti',
      speed: 65,
      delay: 2,
      status: 'on-time',
      nextStation: 'Miskolc-Tiszai',
      direction: 45,
      capacity: { total: 180, occupied: 95 },
      route: trainRoutes['budapest-miskolc'],
      currentRouteIndex: 3,
      operator: 'MÁV-START',
      platform: '5',
      departureTime: '11:20',
      arrivalTime: '13:45'
    },
    {
      id: 'R-6102',
      number: 'R 6102',
      name: 'Duna',
      type: 'regional',
      position: { lat: 46.5000, lng: 20.0000 },
      destination: 'Budapest-Nyugati',
      origin: 'Szeged',
      speed: 75,
      delay: 0,
      status: 'on-time',
      nextStation: 'Kecskemét',
      direction: 0,
      capacity: { total: 160, occupied: 120 },
      route: [...trainRoutes['budapest-szeged']].reverse(),
      currentRouteIndex: 2,
      operator: 'MÁV-START',
      platform: '3',
      departureTime: '14:30',
      arrivalTime: '17:15'
    },

    // Express Trains
    {
      id: 'EX-1',
      number: 'EX 1',
      name: 'Hungária',
      type: 'express',
      position: { lat: 47.6000, lng: 18.5000 },
      destination: 'Wien Westbahnhof',
      origin: 'Budapest-Keleti',
      speed: 130,
      delay: 0,
      status: 'on-time',
      nextStation: 'Győr',
      direction: 315,
      capacity: { total: 500, occupied: 420 },
      route: trainRoutes['budapest-gyor-vienna'],
      currentRouteIndex: 2,
      operator: 'MÁV-START',
      platform: '1',
      departureTime: '16:40',
      arrivalTime: '19:25'
    },

    // Freight Trains
    {
      id: 'F-8901',
      number: 'F 8901',
      name: 'Cargo Express',
      type: 'freight',
      position: { lat: 47.2500, lng: 19.8000 },
      destination: 'Szolnok',
      origin: 'Budapest-Keleti',
      speed: 50,
      delay: 0,
      status: 'on-time',
      nextStation: 'Szolnok',
      direction: 90,
      capacity: { total: 0, occupied: 0 },
      route: trainRoutes['budapest-debrecen'].slice(0, 5),
      currentRouteIndex: 3,
      operator: 'MÁV Cargo',
      platform: '10',
      departureTime: '13:20',
      arrivalTime: '15:45'
    },
    {
      id: 'F-7234',
      number: 'F 7234',
      name: 'Container Express',
      type: 'freight',
      position: { lat: 47.3000, lng: 18.8000 },
      destination: 'Pécs',
      origin: 'Budapest-Kelenföld',
      speed: 45,
      delay: 5,
      status: 'delayed',
      nextStation: 'Pécs',
      direction: 225,
      capacity: { total: 0, occupied: 0 },
      route: trainRoutes['budapest-pecs'].slice(1),
      currentRouteIndex: 2,
      operator: 'MÁV Cargo',
      platform: '8',
      departureTime: '10:30',
      arrivalTime: '14:15'
    },

    // Additional Regional Services
    {
      id: 'R-3456',
      number: 'R 3456',
      name: 'Mátra',
      type: 'regional',
      position: { lat: 47.5500, lng: 19.3000 },
      destination: 'Budapest-Keleti',
      origin: 'Miskolc-Tiszai',
      speed: 68,
      delay: 3,
      status: 'delayed',
      nextStation: 'Hatvan',
      direction: 225,
      capacity: { total: 140, occupied: 85 },
      route: [...trainRoutes['budapest-miskolc']].reverse(),
      currentRouteIndex: 6,
      operator: 'MÁV-START',
      platform: '4',
      departureTime: '15:10',
      arrivalTime: '17:35'
    },
    {
      id: 'R-2108',
      number: 'R 2108',
      name: 'Pannon',
      type: 'regional',
      position: { lat: 47.1000, lng: 18.6000 },
      destination: 'Budapest-Déli',
      origin: 'Pécs',
      speed: 72,
      delay: 0,
      status: 'on-time',
      nextStation: 'Budapest-Kelenföld',
      direction: 45,
      capacity: { total: 180, occupied: 110 },
      route: [...trainRoutes['budapest-pecs']].reverse(),
      currentRouteIndex: 5,
      operator: 'MÁV-START',
      platform: '2',
      departureTime: '16:20',
      arrivalTime: '18:45'
    }
  ];

  return trains;
};

// Enhanced real-time position updates following actual routes
export const updateTrainPositions = (trains: Train[]): Train[] => {
  return trains.map(train => {
    const route = train.route;
    if (!route || route.length === 0) return train;

    let newIndex = train.currentRouteIndex;
    let newPosition = train.position;

    // Calculate movement based on speed
    const speedKmh = train.speed;
    const speedMs = speedKmh / 3.6; // Convert to m/s
    const distancePerUpdate = (speedMs * 5) / 1000; // 5 second updates, convert to km

    // Get current and next route points
    const currentPoint = route[train.currentRouteIndex];
    const nextPoint = route[train.currentRouteIndex + 1];

    if (nextPoint) {
      // Calculate distance to next point
      const latDiff = nextPoint.lat - currentPoint.lat;
      const lngDiff = nextPoint.lng - currentPoint.lng;
      const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111; // Rough km conversion

      // Calculate direction
      const direction = Math.atan2(lngDiff, latDiff) * 180 / Math.PI;

      // Move towards next point
      if (distance > distancePerUpdate) {
        const ratio = distancePerUpdate / distance;
        newPosition = {
          lat: train.position.lat + (latDiff * ratio),
          lng: train.position.lng + (lngDiff * ratio)
        };
      } else {
        // Reached next point, move to it
        newPosition = { lat: nextPoint.lat, lng: nextPoint.lng };
        newIndex = Math.min(train.currentRouteIndex + 1, route.length - 1);
      }

      return {
        ...train,
        position: newPosition,
        currentRouteIndex: newIndex,
        direction: direction,
        // Randomly update delay
        delay: Math.max(0, train.delay + (Math.random() - 0.7) * 2),
        status: train.delay > 5 ? 'delayed' : 'on-time',
        // Update capacity occasionally
        capacity: {
          ...train.capacity,
          occupied: Math.min(
            train.capacity.total, 
            Math.max(0, train.capacity.occupied + Math.floor((Math.random() - 0.5) * 15))
          )
        }
      };
    }

    return train;
  });
};
