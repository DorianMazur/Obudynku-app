import { Layout } from "@/components/Layout/Layout";

import styles from "./index.module.scss";
import { useMediaQuery, Grid, Typography, Stack } from "@mui/material";
import { theme } from "@/theme";
import { getLatestOpinions } from "@/hooks/useOpinions";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { avgRateForOpinion } from "@/utils/opinions";
import dynamic from "next/dynamic";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { SearchBanner } from "@/components/Form/SearchBanner/SearchBanner";

const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

const HomePage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { data } = useQuery("latestOpinions", () => getLatestOpinions());

  return (
    <Layout>
      <SearchBanner onChange={value => router.push(`/search?city=${value}`)} />
      <Typography
        variant="subtitle2"
        component="div"
        className={styles.ob__latest_title}
        mt="62px"
        mb="8px"
      >
        Ostatnio dodane opinie
      </Typography>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        className={styles.ob__latest}
      >
        <Grid xs={12} md={6} item={true}>
          <Stack spacing={2}>
            {data?.map(opinion => (
              <OpinionCard
                desc={opinion.advice}
                key={opinion.id}
                title={opinion.building.address}
                subtitle={opinion.building.city}
                rate={avgRateForOpinion(opinion)}
                titleOnClick={() =>
                  router.push(`/building/${opinion.building.id}`)
                }
              />
            ))}
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
              className={styles.ob__latest_map}
              data={data?.map(opinion => ({
                id: opinion.id,
                lat: opinion.building.lat,
                lon: opinion.building.lon,
                rate: avgRateForOpinion(opinion),
                building_id: opinion.building.id
              }))}
            />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("latestOpinions", getLatestOpinions);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
