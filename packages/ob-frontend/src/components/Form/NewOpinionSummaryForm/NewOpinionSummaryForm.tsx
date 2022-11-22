import { Button, Grid, Typography, TextField } from '@mui/material';

export interface NewOpinionSummaryFormProps {
  onNext(): void;
  onBack(): void;
  summary?: string;
  setSummary(summary: string): void;
  nextLabel: string;
}

export const NewOpinionSummaryForm: React.FC<NewOpinionSummaryFormProps> = ({
  onNext,
  onBack,
  summary,
  setSummary,
  nextLabel,
}) => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="900"
        component="div"
        mb="32px"
        textAlign="center"
      >
        Opcjonalne podsumowanie i porady
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Podsumowanie"
        inputProps={{ maxLength: 500 }}
        helperText={`${summary?.length || 0}/500`}
        value={summary || ''}
        onChange={(event) => {
          setSummary(event.target.value);
        }}
        multiline
        rows={8}
        sx={{ width: '100%' }}
      />
      <Grid
        container
        flexDirection="row"
        mt="32px"
        justifyContent="space-between"
      >
        <Button size="large" type="submit" onClick={onBack}>
          Powrót
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onNext}
          type="submit"
        >
          {nextLabel}
        </Button>
      </Grid>
    </>
  );
};
