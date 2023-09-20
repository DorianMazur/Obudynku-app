import { Layout } from "@/components/Layout/Layout";

import styles from "./index.module.scss";
import {
  useMediaQuery,
  Grid,
  Typography,
  Stack,
  Pagination
} from "@mui/material";
import { theme } from "@/theme";
import { usePathname, useSearchParams } from "next/navigation";
import { getLatestOpinions } from "@/hooks/useOpinions";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { avgRateForOpinion } from "@/utils/opinions";
import dynamic from "next/dynamic";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { SearchBanner } from "@/components/Form/SearchBanner/SearchBanner";
import { useState } from "react";
import { GetServerSideProps } from "next";

const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getLatestOpinions", Number(context.query.page) || 1],
    queryFn: () => getLatestOpinions(Number(context.query.page) || 1)
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
  const { data } = useQuery({
    queryKey: ["getLatestOpinions", page],
    queryFn: () => getLatestOpinions(page)
  });
  console.log(page);

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
        Ostatnio dodane opinie ({data?.itemCount})
      </Typography>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        className={styles.ob__latest}
      >
        <Grid xs={12} md={6} item={true}>
          <Stack spacing={2}>
            {data?.opinions.map(opinion => (
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
          <Stack alignItems="center" mt={1}>
            <Pagination
              count={data?.pageCount}
              page={page}
              onChange={(_ev, value) =>
                router.push(pathname + "?page=" + value)
              }
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
              className={styles.ob__latest_map}
              data={data?.opinions.map(opinion => ({
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
