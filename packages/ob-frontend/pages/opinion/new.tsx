import { Layout } from "@/components/Layout/Layout";
import { useContext, useState } from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
import { NewOpinionLocationForm } from "@/components/Form/NewOpinionLocationForm/NewOpinionLocationForm";
import { NewOpinionRatesForm } from "@/components/Form/NewOpinionRatesForm/NewOpinionsRatesForm";
import { NewOpinionSummaryForm } from "@/components/Form/NewOpinionSummaryForm/NewOpinionSummaryForm";
import { useRouter } from "next/router";
import { SnackbarContext } from "@/context/SnackbarContext";
import { useOpinion } from "@/hooks/useOpinions";
import { useMutation } from "react-query";

enum OpinionSteps {
  Location = "OPINION_LOCATION",
  Rates = "OPINION_RATES",
  Summary = "OPINION_SUMMARY"
}

const NewOpinion = () => {
  const [step, setStep] = useState(OpinionSteps.Location);
  const router = useRouter();
  const snackbar = useContext(SnackbarContext);
  const {
    createOpinion,
    newOpinionLocation,
    setNewOpinionLocation,
    newOpinionSummary,
    setNewOpinionSummary,
    setNewOpinionRate,
    newOpinionRates,
    clearNewOpinion
  } = useOpinion();
  const { mutate, isLoading } = useMutation("createOpinion", createOpinion, {
    onSuccess: data => {
      if (data) {
        clearNewOpinion();
        router.push("/profile");
        snackbar.showSnackbar({
          message: "Pomyślnie dodano opinię",
          severity: "success"
        });
      }
    }
  });

  const progressByStep = (step: OpinionSteps) => {
    if (step === OpinionSteps.Location) return 33;
    if (step === OpinionSteps.Rates) return 66;
    return 100;
  };

  return (
    <>
      <Layout centered>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {step === OpinionSteps.Location && (
              <NewOpinionLocationForm
                onNext={() => setStep(OpinionSteps.Rates)}
                location={newOpinionLocation}
                setLocation={setNewOpinionLocation}
              />
            )}
            {step === OpinionSteps.Rates && (
              <NewOpinionRatesForm
                onBack={() => setStep(OpinionSteps.Location)}
                onNext={() => setStep(OpinionSteps.Summary)}
                opinions={newOpinionRates}
                setOpinion={setNewOpinionRate}
              />
            )}
            {step === OpinionSteps.Summary && (
              <NewOpinionSummaryForm
                onBack={() => setStep(OpinionSteps.Rates)}
                summary={newOpinionSummary}
                setSummary={setNewOpinionSummary}
                nextLabel="Dodaj opinie"
                onNext={() =>
                  newOpinionLocation &&
                  newOpinionRates &&
                  newOpinionSummary &&
                  mutate({
                    lat: Number(newOpinionLocation.lat),
                    lon: Number(newOpinionLocation.lon),
                    city: newOpinionLocation.address.county,
                    address: `${newOpinionLocation.address.road} ${newOpinionLocation.address.house_number}`,
                    advice: newOpinionSummary,
                    /* @ts-ignore */
                    rates: Object.fromEntries(
                      Object.entries(newOpinionRates).map(([o_key, o_val]) => {
                        return [o_key, o_val.rate];
                      })
                    ),
                    /* @ts-ignore */
                    opinions: Object.fromEntries(
                      Object.entries(newOpinionRates).map(([o_key, o_val]) => {
                        return [o_key, o_val.desc];
                      })
                    )
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
          position: "absolute",
          bottom: 0,
          zIndex: 999,
          width: "100vw",
          height: 6
        }}
      />
    </>
  );
};

export default NewOpinion;
