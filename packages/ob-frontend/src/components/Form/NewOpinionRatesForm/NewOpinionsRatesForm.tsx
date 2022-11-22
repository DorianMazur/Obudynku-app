import dynamic from 'next/dynamic';
import {
  Button,
  Grid,
  Rating,
  Typography,
  TextField,
  Stack,
  Tabs,
  Input,
  Tab,
} from '@mui/material';
import { useState } from 'react';
import { OpinionIndexes } from '@/types/Opinion';
import { RATES_KEYS } from '@/const/rates';
import { ErrorOutlined } from '@mui/icons-material';

export interface NewOpinionRatesFormProps {
  onNext(): void;
  onBack?(): void;
  opinions?: Record<OpinionIndexes, { rate: number; desc: string }>;
  setOpinion(
    key: string,
    rate: number | undefined,
    desc: string | undefined
  ): void;
}

export const NewOpinionRatesForm: React.FC<NewOpinionRatesFormProps> = ({
  onNext,
  onBack,
  opinions,
  setOpinion,
}) => {
  const [tab, setTab] = useState<OpinionIndexes>('acustic');

  const canGoNext =
    opinions &&
    opinions['acustic']?.desc &&
    opinions['construction']?.desc &&
    opinions['safety']?.desc &&
    opinions['internet']?.desc &&
    opinions['localization']?.desc;

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="900"
        component="div"
        mb="32px"
        textAlign="center"
      >
        Opinie
      </Typography>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab
          label="Akustyka"
          value="acustic"
          icon={
            opinions?.['acustic']?.desc ? undefined : (
              <ErrorOutlined sx={{ color: 'red !important;' }} />
            )
          }
        />
        <Tab
          label="Lokalizacja"
          value="localization"
          icon={
            opinions?.['localization']?.desc ? undefined : (
              <ErrorOutlined sx={{ color: 'red !important;' }} />
            )
          }
        />
        <Tab
          label="Media"
          value="internet"
          icon={
            opinions?.['internet']?.desc ? undefined : (
              <ErrorOutlined sx={{ color: 'red !important;' }} />
            )
          }
        />
        <Tab
          label="Budownictwo"
          value="construction"
          icon={
            opinions?.['construction']?.desc ? undefined : (
              <ErrorOutlined sx={{ color: 'red !important;' }} />
            )
          }
        />
        <Tab
          label="Bezpieczeństwo"
          value="safety"
          icon={
            opinions?.['safety']?.desc ? undefined : (
              <ErrorOutlined sx={{ color: 'red !important;' }} />
            )
          }
        />
      </Tabs>
      <Stack spacing={2} alignItems="center" mt="16px">
        <Rating
          max={10}
          precision={1}
          defaultValue={1}
          value={opinions?.[tab]?.rate || 0}
          onChange={(_, newValue) => {
            setOpinion(tab, newValue as number, opinions?.[tab]?.desc);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label={RATES_KEYS.find((key) => key.value === tab)?.name}
          inputProps={{ maxLength: 500 }}
          helperText={`${opinions?.[tab]?.desc?.length || 0}/500`}
          value={opinions?.[tab]?.desc || ''}
          onChange={(event) => {
            setOpinion(tab, opinions?.[tab]?.rate, event.target.value);
          }}
          multiline
          rows={8}
          sx={{ width: '100%' }}
          placeholder={RATES_KEYS.find((key) => key.value === tab)?.placeholder}
        />
      </Stack>
      <Grid
        container
        flexDirection="row"
        mt="32px"
        justifyContent={onBack ? 'space-between' : 'flex-end'}
      >
        {onBack && (
          <Button size="large" type="submit" onClick={onBack}>
            Powrót
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onNext}
          disabled={!canGoNext}
          type="submit"
        >
          Dalej
        </Button>
      </Grid>
    </>
  );
};
