import type { Station } from '../types/train';

export const stations: Station[] = [
  // Major Budapest Stations
  {
    id: 'budapest-keleti',
    name: 'Budapest-Keleti pályaudvar',
    position: { lat: 47.5000, lng: 19.0833 },
    type: 'major',
    platforms: 12,
    services: ['IC', 'EC', 'RJ', 'R', 'S'],
    zone: 'Budapest'
  },
  {
    id: 'budapest-nyugati',
    name: 'Budapest-Nyugati pályaudvar',
    position: { lat: 47.5108, lng: 19.0567 },
    type: 'major',
    platforms: 10,
    services: ['IC', 'EC', 'R', 'S'],
    zone: 'Budapest'
  },
  {
    id: 'budapest-deli',
    name: 'Budapest-Déli pályaudvar',
    position: { lat: 47.4736, lng: 19.0239 },
    type: 'major',
    platforms: 8,
    services: ['IC', 'R', 'S'],
    zone: 'Budapest'
  },
  {
    id: 'budapest-kelenfoldi',
    name: 'Budapest-Kelenföld',
    position: { lat: 47.4644, lng: 19.0239 },
    type: 'junction',
    platforms: 6,
    services: ['IC', 'R', 'S'],
    zone: 'Budapest'
  },

  // Eastern Hungary
  {
    id: 'debrecen',
    name: 'Debrecen',
    position: { lat: 47.5316, lng: 21.6273 },
    type: 'major',
    platforms: 6,
    services: ['IC', 'EC', 'R'],
    zone: 'Hajdú-Bihar'
  },
  {
    id: 'nyiregyhaza',
    name: 'Nyíregyháza',
    position: { lat: 47.9559, lng: 21.7186 },
    type: 'regional',
    platforms: 4,
    services: ['IC', 'R'],
    zone: 'Szabolcs-Szatmár-Bereg'
  },
  {
    id: 'miskolc',
    name: 'Miskolc-Tiszai',
    position: { lat: 48.1034, lng: 20.7784 },
    type: 'regional',
    platforms: 5,
    services: ['IC', 'R'],
    zone: 'Borsod-Abaúj-Zemplén'
  },
  {
    id: 'szolnok',
    name: 'Szolnok',
    position: { lat: 47.1817, lng: 20.1999 },
    type: 'junction',
    platforms: 8,
    services: ['IC', 'EC', 'R'],
    zone: 'Jász-Nagykun-Szolnok'
  },

  // Southern Hungary
  {
    id: 'szeged',
    name: 'Szeged',
    position: { lat: 46.2530, lng: 20.1414 },
    type: 'major',
    platforms: 5,
    services: ['IC', 'R'],
    zone: 'Csongrád-Csanád'
  },
  {
    id: 'kecskemet',
    name: 'Kecskemét',
    position: { lat: 46.9077, lng: 19.6856 },
    type: 'regional',
    platforms: 4,
    services: ['IC', 'R'],
    zone: 'Bács-Kiskun'
  },
  {
    id: 'pecs',
    name: 'Pécs',
    position: { lat: 46.0727, lng: 18.2328 },
    type: 'major',
    platforms: 4,
    services: ['IC', 'R'],
    zone: 'Baranya'
  },

  // Western Hungary
  {
    id: 'gyor',
    name: 'Győr',
    position: { lat: 47.6875, lng: 17.6504 },
    type: 'major',
    platforms: 6,
    services: ['RJ', 'EC', 'IC', 'R'],
    zone: 'Győr-Moson-Sopron'
  },
  {
    id: 'sopron',
    name: 'Sopron',
    position: { lat: 47.6852, lng: 16.5790 },
    type: 'regional',
    platforms: 3,
    services: ['R'],
    zone: 'Győr-Moson-Sopron'
  },
  {
    id: 'szombathely',
    name: 'Szombathely',
    position: { lat: 47.2307, lng: 16.6218 },
    type: 'regional',
    platforms: 4,
    services: ['IC', 'R'],
    zone: 'Vas'
  },

  // Lake Balaton Region
  {
    id: 'siofok',
    name: 'Siófok',
    position: { lat: 46.9048, lng: 18.0547 },
    type: 'regional',
    platforms: 3,
    services: ['IC', 'R'],
    zone: 'Somogy'
  },
  {
    id: 'balatonfured',
    name: 'Balatonfüred',
    position: { lat: 46.9581, lng: 17.8897 },
    type: 'local',
    platforms: 2,
    services: ['R'],
    zone: 'Veszprém'
  },
  {
    id: 'veszprem',
    name: 'Veszprém',
    position: { lat: 47.0930, lng: 17.9093 },
    type: 'regional',
    platforms: 3,
    services: ['IC', 'R'],
    zone: 'Veszprém'
  },

  // Northern Hungary
  {
    id: 'eger',
    name: 'Eger',
    position: { lat: 47.9030, lng: 20.3707 },
    type: 'local',
    platforms: 2,
    services: ['R'],
    zone: 'Heves'
  },
  {
    id: 'hatvan',
    name: 'Hatvan',
    position: { lat: 47.6667, lng: 19.6833 },
    type: 'junction',
    platforms: 4,
    services: ['IC', 'R'],
    zone: 'Heves'
  },

  // Additional Important Stations
  {
    id: 'tatabanya',
    name: 'Tatabánya',
    position: { lat: 47.5692, lng: 18.3981 },
    type: 'regional',
    platforms: 3,
    services: ['IC', 'R'],
    zone: 'Komárom-Esztergom'
  },
  {
    id: 'kaposvar',
    name: 'Kaposvár',
    position: { lat: 46.3667, lng: 17.8000 },
    type: 'regional',
    platforms: 3,
    services: ['IC', 'R'],
    zone: 'Somogy'
  },
  {
    id: 'bekescsaba',
    name: 'Békéscsaba',
    position: { lat: 46.6833, lng: 21.1000 },
    type: 'regional',
    platforms: 3,
    services: ['IC', 'R'],
    zone: 'Békés'
  },
  {
    id: 'zalaegerszeg',
    name: 'Zalaegerszeg',
    position: { lat: 46.8389, lng: 16.8444 },
    type: 'local',
    platforms: 2,
    services: ['R'],
    zone: 'Zala'
  }
];