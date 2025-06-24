import type { RoutePoint } from '../types/train';

export const trainRoutes = {
  // Main Line 1: Budapest-Keleti - Szolnok - Debrecen
  'budapest-debrecen': [
    { lat: 47.5000, lng: 19.0833, stationId: 'budapest-keleti', stationName: 'Budapest-Keleti' },
    { lat: 47.4500, lng: 19.2500 },
    { lat: 47.3500, lng: 19.5000 },
    { lat: 47.2500, lng: 19.8000 },
    { lat: 47.1817, lng: 20.1999, stationId: 'szolnok', stationName: 'Szolnok' },
    { lat: 47.2000, lng: 20.5000 },
    { lat: 47.3000, lng: 21.0000 },
    { lat: 47.4000, lng: 21.3000 },
    { lat: 47.5316, lng: 21.6273, stationId: 'debrecen', stationName: 'Debrecen' }
  ],

  // Main Line 2: Budapest-Nyugati - Győr - Vienna
  'budapest-gyor-vienna': [
    { lat: 47.5108, lng: 19.0567, stationId: 'budapest-nyugati', stationName: 'Budapest-Nyugati' },
    { lat: 47.5500, lng: 18.8000 },
    { lat: 47.6000, lng: 18.5000 },
    { lat: 47.6500, lng: 18.2000 },
    { lat: 47.6875, lng: 17.6504, stationId: 'gyor', stationName: 'Győr' },
    { lat: 47.7000, lng: 17.3000 },
    { lat: 47.7200, lng: 17.0000 },
    { lat: 47.7500, lng: 16.7000 }
  ],

  // Main Line 3: Budapest-Déli - Pécs
  'budapest-pecs': [
    { lat: 47.4736, lng: 19.0239, stationId: 'budapest-deli', stationName: 'Budapest-Déli' },
    { lat: 47.4644, lng: 19.0239, stationId: 'budapest-kelenfoldi', stationName: 'Budapest-Kelenföld' },
    { lat: 47.3000, lng: 18.8000 },
    { lat: 47.1000, lng: 18.6000 },
    { lat: 46.9000, lng: 18.4000 },
    { lat: 46.7000, lng: 18.3000 },
    { lat: 46.5000, lng: 18.2500 },
    { lat: 46.0727, lng: 18.2328, stationId: 'pecs', stationName: 'Pécs' }
  ],

  // Main Line 4: Budapest-Nyugati - Szeged
  'budapest-szeged': [
    { lat: 47.5108, lng: 19.0567, stationId: 'budapest-nyugati', stationName: 'Budapest-Nyugati' },
    { lat: 47.3000, lng: 19.2000 },
    { lat: 47.1000, lng: 19.4000 },
    { lat: 46.9077, lng: 19.6856, stationId: 'kecskemet', stationName: 'Kecskemét' },
    { lat: 46.7000, lng: 19.8000 },
    { lat: 46.5000, lng: 20.0000 },
    { lat: 46.2530, lng: 20.1414, stationId: 'szeged', stationName: 'Szeged' }
  ],

  // Balaton Line: Budapest-Déli - Siófok - Balatonfüred
  'budapest-balaton': [
    { lat: 47.4736, lng: 19.0239, stationId: 'budapest-deli', stationName: 'Budapest-Déli' },
    { lat: 47.4644, lng: 19.0239, stationId: 'budapest-kelenfoldi', stationName: 'Budapest-Kelenföld' },
    { lat: 47.3000, lng: 18.8000 },
    { lat: 47.1000, lng: 18.6000 },
    { lat: 46.9500, lng: 18.3000 },
    { lat: 46.9048, lng: 18.0547, stationId: 'siofok', stationName: 'Siófok' },
    { lat: 46.9200, lng: 17.9500 },
    { lat: 46.9581, lng: 17.8897, stationId: 'balatonfured', stationName: 'Balatonfüred' }
  ],

  // Northern Line: Budapest-Keleti - Hatvan - Miskolc
  'budapest-miskolc': [
    { lat: 47.5000, lng: 19.0833, stationId: 'budapest-keleti', stationName: 'Budapest-Keleti' },
    { lat: 47.5500, lng: 19.3000 },
    { lat: 47.6000, lng: 19.5000 },
    { lat: 47.6667, lng: 19.6833, stationId: 'hatvan', stationName: 'Hatvan' },
    { lat: 47.7500, lng: 19.9000 },
    { lat: 47.9000, lng: 20.3000 },
    { lat: 48.0500, lng: 20.6000 },
    { lat: 48.1034, lng: 20.7784, stationId: 'miskolc', stationName: 'Miskolc-Tiszai' }
  ]
};