import { RATES_KEYS } from "@/const/rates";
import { OpinionIndexes } from "@/types/Opinion";
import { labelByAvg } from "@/utils/opinions";
import { Card, Typography, CardProps, Grid, Chip } from "@mui/material";
import React from "react";
import styles from "./OpinionCard.module.scss";
import { OpinionRateBubble } from "./OpinionRateBubble";

export interface OpinionCardProps extends CardProps {
  desc?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  title: string;
  subtitle?: string;
  rate?: number | string;
  rates?: Record<OpinionIndexes, { value: number | string; text: string }>;
  titleOnClick?(): void;
}

export const OpinionCard: React.FC<OpinionCardProps> = ({
  desc,
  title,
  subtitle,
  rate,
  rates,
  badge,
  actions,
  titleOnClick,
  ...rest
}) => {
  return (
    <Card variant="outlined" className={styles.ob__opinionCard} {...rest}>
      {(actions || badge) && (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>{badge}</Grid>
          <Grid item>{actions}</Grid>
        </Grid>
      )}
      <Typography
        variant="h6"
        fontWeight="700"
        component="span"
        className={titleOnClick && styles.ob__opinionCard_title}
        onClick={titleOnClick}
      >
        {title}
      </Typography>
      <Typography variant="body2" component="div" mb="8px">
        {subtitle}
      </Typography>
      <Typography variant="body2" component="div" color="#8083A3" mb="8px">
        {desc}
      </Typography>
      {rate && (
        <>
          <OpinionRateBubble rate={rate} />
          <Typography
            variant="caption"
            component="span"
            mb="8px"
            fontWeight="600"
            ml="8px"
          >
            {labelByAvg(rate)}
          </Typography>
        </>
      )}
      {rates && (
        <Grid container gap={2}>
          {Object.keys(rates).map(rateKey => (
            <div className={styles.ob__opinionCard_rate} key={rate}>
              <OpinionRateBubble
                rate={Number(rates[rateKey as OpinionIndexes].value).toFixed(1)}
              />
              <Typography
                variant="caption"
                component="span"
                mb="8px"
                fontWeight="600"
                ml="8px"
              >
                {RATES_KEYS.find(key => key.value === rateKey)?.name}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                mb="8px"
                mt="8px"
                color="#8083A3"
              >
                {rates[rateKey as OpinionIndexes].text}
              </Typography>
            </div>
          ))}
        </Grid>
      )}
    </Card>
  );
};
