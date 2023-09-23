import { useMediaQuery, Grid, Typography } from "@mui/material";
import { theme } from "@/theme";
import styles from "./HomeBanner.module.scss";
import React from "react";

export const HomeBanner: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container className={styles.ob__banner} flexDirection="column" mb={4}>
      <Typography
        fontWeight="900"
        variant={isMobile ? "h4" : "h2"}
        component="div"
      >
        Opinie o Budynkach i Mieszkaniach
      </Typography>
      <Typography
        variant={isMobile ? "subtitle2" : "subtitle1"}
        width={isMobile ? "100%" : "80%"}
        component="div"
      >
        Odkryj szczegółowe opinie o budynkach i mieszkaniach w Polsce. Znajdź
        idealne mieszkanie dla siebie, uwzględniając ważne informacje i recenzje
        dostępne na Obudynku.pl
      </Typography>
    </Grid>
  );
};
