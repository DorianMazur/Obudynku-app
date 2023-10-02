import dynamic from "next/dynamic";
import styles from "./NewOpinionLocationForm.module.scss";
import {
  Autocomplete,
  Button,
  Grid,
  Typography,
  TextField
} from "@mui/material";
import { OpenStreetMapAddress } from "@/types/Location";
import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { LocationOn } from "@mui/icons-material";
import { useMutation } from "react-query";
import { fetchAddress } from "@/hooks/useLocation";

const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

export interface NewOpinionLocationFormProps {
  onNext(): void;
  location?: OpenStreetMapAddress | null;
  setLocation(address: OpenStreetMapAddress | null): void;
}

export const NewOpinionLocationForm: React.FC<NewOpinionLocationFormProps> = ({
  onNext,
  location,
  setLocation
}) => {
  const [options, setOptions] = useState<readonly OpenStreetMapAddress[]>(
    location ? [location] : []
  );
  const [inputValue, setInputValue] = useState("");
  const { isLoading, mutateAsync } = useMutation("fetchAddress", fetchAddress, {
    onSuccess: data => {
      setOptions(data);
    }
  });

  const search = useCallback((address: string) => {
    mutateAsync(address);
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce(search, 1000);
  }, [search]);

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue]);

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="900"
        component="div"
        mb={2}
        textAlign="center"
      >
        Adres
      </Typography>
      <Autocomplete
        sx={{ width: "100%", mb: 2 }}
        getOptionLabel={option =>
          typeof option === "string" ? option : option.display_name
        }
        loading={isLoading}
        loadingText="Ładowanie wyników..."
        filterOptions={x => x}
        options={options}
        value={location || null}
        noOptionsText="Nie znaleziono budynków"
        onChange={(_event: any, newValue: OpenStreetMapAddress | null) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setLocation(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={params => (
          <TextField {...params} label="Wpisz adres" fullWidth />
        )}
        renderOption={(props, option) => {
          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item sx={{ display: "flex", width: 44 }}>
                  <LocationOn sx={{ color: "text.secondary" }} />
                </Grid>
                <Grid
                  item
                  sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {option.display_name}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
      <Map
        className={styles.ob__new_map}
        selected={
          location ? { lat: location?.lat, lng: location?.lon } : undefined
        }
      />
      <Button
        sx={{ mt: 2 }}
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
