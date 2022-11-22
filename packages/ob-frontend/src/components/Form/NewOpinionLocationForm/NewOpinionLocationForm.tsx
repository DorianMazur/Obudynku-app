import dynamic from 'next/dynamic';
import styles from './NewOpinionLocationForm.module.scss';
import { Button, CircularProgress, Typography } from '@mui/material';
import { OpenStreetMapAddress } from '@/types/Location';
import { getLocation } from '@/hooks/useLocation';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { useOpinion } from '@/hooks/useOpinions';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

export interface NewOpinionLocationFormProps {
  onNext(): void;
  location?: OpenStreetMapAddress | null;
  setLocation(address: OpenStreetMapAddress | null): void;
}

export const NewOpinionLocationForm: React.FC<NewOpinionLocationFormProps> = ({
  onNext,
  location,
  setLocation,
}) => {
  const { mutate, isLoading } = useMutation('getLocations', getLocation, {
    onSuccess: (data) => {
      setLocation(data);
    },
  });
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="900"
        component="div"
        mb="32px"
        textAlign="center"
      >
        Dwukrotnie kliknij aby wybrać budynek
      </Typography>
      <Map
        className={styles.ob__new_map}
        selected={
          location ? { lat: location?.lat, lng: location?.lon } : undefined
        }
        onSelect={({ lat, lng }) => {
          setLocation(null);
          mutate({ lat, lon: lng });
        }}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Typography
          variant="subtitle2"
          component="div"
          textAlign="center"
          mb="16px"
          mt="16px"
        >
          {location === null
            ? 'Wybierz inny punkt na mapie'
            : location?.display_name}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        size="large"
        disabled={!location}
        onClick={onNext}
        fullWidth
        type="submit"
      >
        Dalej
      </Button>
    </>
  );
};
