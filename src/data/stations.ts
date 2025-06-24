import type { Station } from '../types/train';

export const stations: Station[] = [
  {
    id: 'budapest-keleti',
    name: 'Budapest-Keleti',
    position: { lat: 47.5000, lng: 19.0833 },
    type: 'major',
    platforms: 12
  },
  {
    id: 'budapest-nyugati',
    name: 'Budapest-Nyugati',
    position: { lat: 47.5108, lng: 19.0567 },
    type: 'major',
    platforms: 10
  },
  {
    id: 'budapest-deli',
    name: 'Budapest-Déli',
    position: { lat: 47.4736, lng: 19.0239 },
    type: 'major',
    platforms: 8
  },
  {
    id: 'debrecen',
    name: 'Debrecen',
    position: { lat: 47.5316, lng: 21.6273 },
    type: 'major',
    platforms: 6
  },
  {
    id: 'szeged',
    name: 'Szeged',
    position: { lat: 46.2530, lng: 20.1414 },
    type: 'major',
    platforms: 5
  },
  {
    id: 'pecs',
    name: 'Pécs',
    position: { lat: 46.0727, lng: 18.2328 },
    type: 'major',
    platforms: 4
  },
  {
    id: 'gyor',
    name: 'Győr',
    position: { lat: 47.6875, lng: 17.6504 },
    type: 'regional',
    platforms: 6
  },
  {
    id: 'szolnok',
    name: 'Szolnok',
    position: { lat: 47.1817, lng: 20.1999 },
    type: 'regional',
    platforms: 4
  },
  {
    id: 'miskolc',
    name: 'Miskolc',
    position: { lat: 48.1034, lng: 20.7784 },
    type: 'regional',
    platforms: 5
  },
  {
    id: 'kecskemet',
    name: 'Kecskemét',
    position: { lat: 46.9077, lng: 19.6856 },
    type: 'regional',
    platforms: 3
  }
];