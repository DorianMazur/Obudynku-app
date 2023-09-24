import { Layout } from "@/components/Layout/Layout";

import styles from "./index.module.scss";
import {
  useMediaQuery,
  Grid,
  Typography,
  Stack,
  Pagination,
  Autocomplete,
  TextField,
  styled,
  Button,
  Switch,
  Box
} from "@mui/material";
import { theme } from "@/theme";
import { usePathname, useSearchParams } from "next/navigation";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { avgRateForOpinion } from "@/utils/opinions";
import dynamic from "next/dynamic";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { HomeBanner } from "@/components/HomeBanner/HomeBanner";
import { GetServerSideProps } from "next";
import { CITIES } from "@/const/city";
import { searchBuildings } from "@/hooks/useBuildings";
import { useFormik } from "formik";
import { useState } from "react";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    ".MuiTextField-root": {
      width: "100%"
    },
    ".MuiAutocomplete-root": {
      width: "100%"
    },
    ".MuiButton-root": {
      width: "100%"
    }
  }
}));

const MapSwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#00D066",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: -1,
      top: -2,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2
  }
}));

const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const page = Number(context.query.page) || 1;
  const city = (context.query.city || undefined) as string | undefined;
  const address = (context.query.address || undefined) as string | undefined;

  await queryClient.prefetchQuery({
    queryKey: ["searchBuildings", page, city, address],
    queryFn: () => searchBuildings(page, city, address)
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

const HomePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mode, setMode] = useState("list");
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const city = searchParams.get("city") || undefined;
  const address = searchParams.get("address") || undefined;

  const formik = useFormik({
    initialValues: {
      city,
      address
    },
    onSubmit: props => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("page", String(1));
      props.city && newSearchParams.set("city", props.city);
      props.address && newSearchParams.set("address", props.address);
      router.push(pathname + "?" + newSearchParams.toString());
    }
  });

  const { data } = useQuery({
    queryKey: ["searchBuildings", page, city, address],
    queryFn: () => searchBuildings(page, city, address)
  });

  return (
    <Layout>
      <HomeBanner />
      <StyledGrid
        container
        flexDirection="row"
        mb={4}
        justifyContent="center"
        gap={1}
      >
        <TextField
          name="address"
          label="Adres lub nazwa ulicy"
          size="small"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Autocomplete
          disablePortal
          defaultValue={city ? { label: city, value: city } : undefined}
          onChange={(_, e) =>
            formik.handleChange("city")(typeof e === "object" ? e.value : "")
          }
          onBlur={formik.handleBlur("city")}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          options={Object.keys(CITIES).map(city => ({
            label: city,
            value: city
          }))}
          sx={{ width: 200 }}
          renderInput={params => (
            <TextField {...params} label="Miasto" size="small" />
          )}
        />
        <Button
          variant="contained"
          size="medium"
          onClick={() => {
            formik.submitForm();
          }}
        >
          Szukaj
        </Button>
      </StyledGrid>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        className={styles.ob__index}
      >
        <Grid xs={12} md={6} item={true}>
          <Grid
            container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="subtitle2" component="div" ml={1}>
              Budynki ({data?.itemCount})
            </Typography>
            {isMobile && (
              <MapSwitch
                inputProps={{ "aria-label": "controlled" }}
                checked={mode === "map"}
                onChange={e => setMode(e.target.checked ? "map" : "list")}
              />
            )}
          </Grid>
          {mode === "list" ? (
            <Stack spacing={2}>
              {data?.buildings.map(building => (
                <OpinionCard
                  desc={building.opinions[0].advice}
                  key={building.id}
                  title={building.address}
                  subtitle={building.city}
                  rate={avgRateForOpinion(building.opinions[0])}
                  titleOnClick={() => router.push(`/building/${building.id}`)}
                />
              ))}
            </Stack>
          ) : (
            <Box height={500}>
              <Map
                className={styles.ob__index_map}
                data={data?.buildings.map(building => ({
                  id: building.id,
                  lat: building.lat,
                  lon: building.lon,
                  rate: avgRateForOpinion(building.opinions[0]),
                  building_id: building.id
                }))}
              />
            </Box>
          )}
          <Stack alignItems="center" mt={2}>
            <Pagination
              count={data?.pageCount}
              hideNextButton={isMobile}
              hidePrevButton={isMobile}
              page={page}
              onChange={(_ev, value) => {
                const newSearchParams = new URLSearchParams();
                newSearchParams.set("page", String(value));
                city && newSearchParams.set("city", city);
                address && newSearchParams.set("address", address);
                router.push(pathname + "?" + newSearchParams.toString());
              }}
            />
          </Stack>
        </Grid>
        {!isMobile && (
          <Grid
            xs={12}
            md={6}
            item={true}
            pl={isMobile ? "0px" : "8px"}
            mb={isMobile ? "8px" : "0px"}
          >
            <Map
              className={styles.ob__index_map}
              data={data?.buildings.map(building => ({
                id: building.id,
                lat: building.lat,
                lon: building.lon,
                rate: avgRateForOpinion(building.opinions[0]),
                building_id: building.id
              }))}
            />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default HomePage;
