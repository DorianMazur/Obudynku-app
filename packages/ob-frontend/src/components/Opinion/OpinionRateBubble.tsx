import { colorByAvg } from '@/utils/opinions';
import { Typography } from '@mui/material';

import styles from './OpinionRateBubble.module.scss';

export interface OpinionRateBubble {
  rate: number | string;
  className?: string;
}

export const OpinionRateBubble: React.FC<OpinionRateBubble> = ({
  rate,
  className,
}) => (
  <Typography
    variant="subtitle2"
    component="span"
    className={`${styles.ob__opinionRateBubble} ${className}`}
    style={{ backgroundColor: colorByAvg(rate) }}
  >
    {rate}
  </Typography>
);
