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
  Button
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
      newSearchParams.set("page", String(page));
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
          onChange={(_, e) => formik.handleChange("city")(e?.value || "")}
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
          <Typography variant="subtitle2" component="div" ml={1} mb={1}>
            Budynki ({data?.itemCount})
          </Typography>
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
