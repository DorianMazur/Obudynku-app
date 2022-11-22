import { colorByAvg } from '@/utils/opinions';
import L from 'leaflet';
import { MapMarkersData } from './Map';

export const MapIconWithRate = (item: MapMarkersData) => {
  return L.divIcon({
    className: 'leaflet-data-marker-rate',
    html: `<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149 178"><path fill="${colorByAvg(
      item.rate
    )}" stroke="#FFF" stroke-width="6" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/><circle fill="#fff" cx="74" cy="75" r="61"/><g id="UrTavla"><circle fill="#FFF" cx="74" cy="75" r="48"/><text x="50%" y="50%" text-anchor="middle" font-family="font-family: 'PT Sans', sans-serif;" stroke="#5db075" stroke-width="2px" font-size="52" dy="2">${
      item.rate
    }</text></g></g></svg>`,
    iconAnchor: [18, 42],
    iconSize: [36, 42],
    popupAnchor: [0, -30],
  });
};

export const MapIconWithoutRate = () => {
  return L.divIcon({
    className: 'leaflet-data-marker-no-rate',
    html: `<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149 178"><path fill="#00D066" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/><circle fill="#fff" cx="74" cy="75" r="51"/></g></svg>`,
    iconAnchor: [18, 42],
    iconSize: [36, 42],
    popupAnchor: [0, -30],
  });
};
