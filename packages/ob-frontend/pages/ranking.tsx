import { Layout } from "@/components/Layout/Layout";

import { orderBy } from "lodash";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from "@mui/material";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { useRouter } from "next/router";
import { useBuilding, getBuilding } from "@/hooks/useBuildings";
import { NextSeo } from "next-seo";
import { OpinionRateBubble } from "@/components/Opinion/OpinionRateBubble";
import { RATES_KEYS } from "@/const/rates";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { getOpinionStatistics, useOpinion } from "@/hooks/useOpinions";
import { useState } from "react";
import { visuallyHidden } from "@mui/utils";
import { colorByAvg } from "@/utils/opinions";

type Order = "asc" | "desc";

const Ranking = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderKey, setOrderKey] = useState("localization");
  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      const isAsc = orderKey === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderKey(property);
    };
  const { data } = useQuery("getOpinionStatistics", () =>
    getOpinionStatistics()
  );

  if (!data) return null;

  return (
    <>
      <NextSeo
        title="Ranking miast"
        description="Sprawdź opinie o budynku i mieszkaniach. Kiedy szukasz mieszkania dla siebie, musisz wziąć pod uwagę informacje które możesz tutaj znaleźć."
      />
      <Layout>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Miasto</TableCell>
                {RATES_KEYS.map(rate => (
                  <TableCell
                    key={rate.value}
                    align="right"
                    sortDirection={orderKey === rate.value ? order : false}
                  >
                    <TableSortLabel
                      active={orderKey === rate.value}
                      direction={orderKey === rate.value ? order : "asc"}
                      onClick={createSortHandler(rate.value)}
                    >
                      {rate.name}
                      {orderKey === rate.value ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orderBy(data, [orderKey], [order]).map((row, index) => (
                <TableRow
                  key={row.city}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.city} ({row.count})
                  </TableCell>
                  {RATES_KEYS.map(rate => (
                    <TableCell
                      align="right"
                      key={rate.value + index}
                      sx={{ color: colorByAvg(row[rate.value]) }}
                    >
                      {row[rate.value] as number}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </>
  );
};

export default Ranking;

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getOpinionStatistics", () =>
    getOpinionStatistics()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
