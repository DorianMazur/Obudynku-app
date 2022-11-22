import {
  MapContainer,
  MapContainerProps,
  TileLayer,
  useMap,
  Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';
import { useEffect, useMemo } from 'react';
import { MapIconWithRate, MapIconWithoutRate } from './MapIcon';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';

export interface MapMarkersData {
  lat: number;
  lon: number;
  rate: number | string;
  id: any;
  building_id: string;
}

export interface IIconProps {
  item: MapMarkersData;
}

const Icon: React.FC<IIconProps> = ({ item }) => {
  const router = useRouter();
  const icon = useMemo(
    () => (
      <Marker
        position={[item.lat, item.lon]}
        icon={MapIconWithRate(item)}
        eventHandlers={{
          click: () => {
            router.push(`//building/${item.building_id}`);
          },
        }}
      />
    ),
    [item.id]
  );
  return icon;
};

export interface IMapPositionerProps {
  data?: MapMarkersData[];
  onSelect?(props: { lat: number; lng: number }): void;
  selected?: { lat: number; lng: number };
}

const MapPositioner: React.FC<IMapPositionerProps> = ({
  data,
  onSelect,
  selected,
}) => {
  const map = useMap();
  const router = useRouter();

  const onSeletdebounced = debounce((props: { lat: number; lng: number }) => {
    return onSelect && onSelect(props);
  }, 200);

  useEffect(() => {
    if (map) {
      map.addEventListener('dblclick', (event: any) => {
        onSeletdebounced(event.latlng);
      });
    }
  }, [map]);

  useEffect(() => {
    if (!data?.length) {
      map.setView({ lat: 51.759445, lng: 19.457216 }, 6);
      return;
    }
    const myPoints = data.map((item) => [item.lat, item.lon]);
    /* @ts-ignore */
    const myBounds = new L.LatLngBounds(myPoints);
    map.fitBounds(myBounds, { padding: [20, 20] });
  }, [data, router.pathname]);

  useEffect(() => {
    if (selected) {
      map.setView(selected, 18);
    }
  }, [selected]);

  return (
    <div>
      {selected && (
        <Marker
          position={[selected.lat, selected.lng]}
          icon={MapIconWithoutRate()}
        />
      )}
      {data?.map((item) => (
        <Icon key={item.id} item={item} />
      ))}
    </div>
  );
};

export interface MapProps extends MapContainerProps {
  children?: React.ReactNode;
  className?: string;
  data?: MapMarkersData[];
  onSelect?(props: { lat: number; lng: number }): void;
  selected?: { lat: number; lng: number };
}

export const Map: React.FC<MapProps> = ({
  children,
  className,
  data,
  onSelect,
  selected,
  ...rest
}) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  return (
    <MapContainer className={mapClassName} doubleClickZoom={false} {...rest}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapPositioner data={data} onSelect={onSelect} selected={selected} />
    </MapContainer>
  );
};

export default Map;
