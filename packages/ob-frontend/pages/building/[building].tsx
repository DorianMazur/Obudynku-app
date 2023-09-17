import { Layout } from "@/components/Layout/Layout";

import styles from "./building.module.scss";
import { Card, Grid, Stack, Typography } from "@mui/material";
import { avgRateForOpinions } from "@/utils/opinions";
import { dehydrate, QueryClient } from "react-query";
import { useRouter } from "next/router";
import { useBuilding, getBuilding } from "@/hooks/useBuildings";
import { NextSeo } from "next-seo";
import { OpinionRateBubble } from "@/components/Opinion/OpinionRateBubble";
import { RATES_KEYS } from "@/const/rates";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { env } from "@/utils";

const Building = () => {
  const router = useRouter();
  const { building: id } = router.query as { building: string };
  const { data } = useBuilding({ id });

  if (!data) return null;

  const avgRates = avgRateForOpinions(data.opinions);
  return (
    <>
      <NextSeo
        title={data.address}
        description="Sprawdź opinie o budynku i mieszkaniach. Kiedy szukasz mieszkania dla siebie, musisz wziąć pod uwagę informacje które możesz tutaj znaleźć."
        openGraph={{
          url: `https://www.obudynku.pl/building/${data.id}`,
          title: data.address,
          description:
            "Sprawdź opinie o budynku i mieszkaniach. Kiedy szukasz mieszkania dla siebie, musisz wziąć pod uwagę informacje które możesz tutaj znaleźć.",
          images: data.hasImage
            ? [
                {
                  url: `${env("NEXT_PUBLIC_API_URL")}/building/${id}/image`,
                  width: 1086,
                  height: 440,
                  alt: data.address
                }
              ]
            : undefined
        }}
      />
      <Layout>
        {data.hasImage && (
          <Card
            variant="outlined"
            className={styles.ob__building_image}
            style={{
              backgroundImage: `url(${env(
                "NEXT_PUBLIC_API_URL"
              )}/building/${id}/image)`
            }}
          />
        )}
        <Stack className={styles.ob__building_title} spacing={1}>
          <Typography variant="h4" fontWeight="700">
            {data.address}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={styles.ob__building_city}
          >
            {data?.city}
          </Typography>
          <Grid container gap={1} justifyContent="center">
            {RATES_KEYS.map(key => (
              <Grid item key={key.value}>
                <div className={styles.ob__building_rating}>
                  <OpinionRateBubble
                    rate={avgRates[key.value]}
                    className={styles.ob__building_rate}
                  />
                  {key.name}
                </div>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack spacing={1} mb="16px" mt="32px">
          {data.opinions.map(opinion => (
            <OpinionCard
              desc={opinion.advice}
              key={opinion.id}
              title={data.address}
              subtitle={
                opinion.flat_number
                  ? `Numer Mieszkania: ${opinion.flat_number}`
                  : undefined
              }
              rates={{
                localization: {
                  value: opinion.localization,
                  text: opinion.opinions.localization
                },
                safety: {
                  value: opinion.safety,
                  text: opinion.opinions.safety
                },
                internet: {
                  value: opinion.internet,
                  text: opinion.opinions.internet
                },
                acustic: {
                  value: opinion.acustic,
                  text: opinion.opinions.acustic
                },
                construction: {
                  value: opinion.construction,
                  text: opinion.opinions.construction
                }
              }}
            />
          ))}
        </Stack>
      </Layout>
    </>
  );
};

export default Building;

export async function getServerSideProps(context: any) {
  const id = context.query.building;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("building", () => getBuilding({ id }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
