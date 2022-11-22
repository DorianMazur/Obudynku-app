import { Layout } from '@/components/Layout/Layout';
import { useContext, useState } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import { NewOpinionRatesForm } from '@/components/Form/NewOpinionRatesForm/NewOpinionsRatesForm';
import { NewOpinionSummaryForm } from '@/components/Form/NewOpinionSummaryForm/NewOpinionSummaryForm';
import { useRouter } from 'next/router';
import { SnackbarContext } from '@/context/SnackbarContext';
import { useOpinion } from '@/hooks/useOpinions';
import { useMutation, useQuery } from 'react-query';

enum OpinionSteps {
  Rates = 'OPINION_RATES',
  Summary = 'OPINION_SUMMARY',
}

const NewOpinion = () => {
  const router = useRouter();
  const { opinion: id } = router.query as { opinion: string };
  const [step, setStep] = useState(OpinionSteps.Rates);
  const snackbar = useContext(SnackbarContext);
  const { getMyOpinion, editOpinion } = useOpinion();
  const { data: myOpinion } = useQuery('getMyOpinion', () => getMyOpinion(id), {
    enabled: !!id,
    onSuccess: (data) => {
      setOpinions(
        Object.keys(data.opinions || {}).reduce((prev, curr) => {
          /* @ts-ignore */
          prev[curr] = { desc: data.opinions[curr], rate: data?.[curr] };
          return prev;
        }, {})
      );
      setSummary(data.advice);
    },
  });
  const { mutate, isLoading } = useMutation('getLocations', editOpinion, {
    onSuccess: (data) => {
      if (data) {
        router.push('/profile');
        snackbar.showSnackbar({
          message: 'Pomyślnie zaktulizowano opinię',
          severity: 'success',
        });
      }
    },
  });

  const [opinions, setOpinions] = useState<any | undefined>(undefined);
  const [summary, setSummary] = useState<string | undefined>(undefined);

  const progressByStep = (step: OpinionSteps) => {
    if (step === OpinionSteps.Rates) return 50;
    return 100;
  };

  return (
    <>
      <Layout centered>
        {isLoading || !myOpinion || !opinions || !summary ? (
          <CircularProgress />
        ) : (
          <>
            {step === OpinionSteps.Rates && (
              <NewOpinionRatesForm
                opinions={opinions}
                setOpinion={(key, rate, desc) =>
                  setOpinions({ ...opinions, [key]: { rate, desc } })
                }
                onNext={() => setStep(OpinionSteps.Summary)}
              />
            )}
            {step === OpinionSteps.Summary && (
              <NewOpinionSummaryForm
                onBack={() => setStep(OpinionSteps.Rates)}
                summary={summary}
                setSummary={setSummary}
                nextLabel="Zaktualizuj opinie"
                onNext={() =>
                  opinions &&
                  summary &&
                  mutate({
                    id: myOpinion.id,
                    advice: summary,
                    /* @ts-ignore */
                    rates: Object.fromEntries(
                      Object.entries(opinions).map(([o_key, o_val]) => {
                        /* @ts-ignore */
                        return [o_key, o_val.rate];
                      })
                    ),
                    /* @ts-ignore */
                    opinions: Object.fromEntries(
                      Object.entries(opinions).map(([o_key, o_val]) => {
                        /* @ts-ignore */
                        return [o_key, o_val.desc];
                      })
                    ),
                  })
                }
              />
            )}
          </>
        )}
      </Layout>
      <LinearProgress
        variant="determinate"
        value={progressByStep(step)}
        sx={{
          position: 'absolute',
          bottom: 0,
          zIndex: 999,
          width: '100vw',
          height: 6,
        }}
      />
    </>
  );
};

export default NewOpinion;
