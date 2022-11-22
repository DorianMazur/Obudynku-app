import { Layout } from '@/components/Layout/Layout';
import styles from './search.module.scss';
import { Grid } from '@mui/material';
import { avgRateForOpinions, avgRateForOpinion } from '@/utils/opinions';
import dynamic from 'next/dynamic';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { useBuildings, getBuildings } from '@/hooks/useBuildings';
import { SearchBanner } from '@/components/Form/SearchBanner/SearchBanner';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const Search = () => {
  const router = useRouter();
  const { city } = router.query as { city?: string };
  const { data, remove } = useBuildings({ city });

  if (!city) return null;

  return (
    <Layout>
      <SearchBanner
        defaultValue={city}
        onChange={(value) => {
          remove();
          router.push(`/search?city=${value}`);
        }}
      />
      <Grid container className={styles.ob__search} mt="62px" mb="32px">
        <Map
          className={styles.ob__search_map}
          data={data?.map((building) => ({
            id: building.id,
            lat: building.lat,
            lon: building.lon,
            rate: avgRateForOpinion(avgRateForOpinions(building.opinions)),
            building_id: building.id,
          }))}
        />
      </Grid>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps(context: any) {
  const city = context.query.city;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('buildings', () => getBuildings({ city }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
