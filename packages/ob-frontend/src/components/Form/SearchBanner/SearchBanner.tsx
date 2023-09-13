import { CITIES } from "@/const/city";
import {
  useMediaQuery,
  Grid,
  Typography,
  Autocomplete,
  TextField
} from "@mui/material";
import { theme } from "@/theme";
import styles from "./SearchBanner.module.scss";
import React from "react";

export interface SearchBannerProps {
  onChange(value: string): void;
  defaultValue?: string;
}

export const SearchBanner: React.FC<SearchBannerProps> = ({
  onChange,
  defaultValue
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container className={styles.ob__banner} flexDirection="column">
      <Typography
        fontWeight="900"
        variant={isMobile ? "h3" : "h2"}
        component="div"
      >
        Sprawdź opinie o budynku
      </Typography>
      <Typography
        variant={isMobile ? "subtitle2" : "subtitle1"}
        mb="32px"
        component="div"
      >
        Kiedy szukasz mieszkania dla siebie, musisz wziąć pod uwagę informacje
        które możesz tutaj znaleźć
      </Typography>
      <Autocomplete
        disablePortal
        defaultValue={
          defaultValue
            ? { label: defaultValue, value: defaultValue }
            : undefined
        }
        disableClearable
        onChange={(_, value) => onChange(value?.value)}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        className={styles.ob__banner_input}
        options={Object.keys(CITIES).map(city => ({
          label: city,
          value: city
        }))}
        sx={{ width: 260 }}
        renderInput={params => (
          <TextField variant="filled" {...params} label="Wybierz miasto" />
        )}
      />
    </Grid>
  );
};
