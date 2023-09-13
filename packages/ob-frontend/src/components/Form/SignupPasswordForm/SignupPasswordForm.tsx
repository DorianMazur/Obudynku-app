import { Stack, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useUser } from "@/hooks/useUser";
import * as yup from "yup";
import styles from "./SignupPasswordForm.module.scss";

export interface SignupPasswordFormProps {
  onSuccess(): void;
}

export const SignupPasswordForm: React.FC<SignupPasswordFormProps> = ({
  onSuccess
}) => {
  const { setPassword, setUser } = useUser();
  const { mutate } = useMutation("setPassword", setPassword, {
    onSuccess: data => {
      setUser(data);
      onSuccess();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      formik.setSubmitting(false);
      formik.setErrors({ password: error?.response?.data?.message });
    }
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: ""
    },
    onSubmit: ({ password }, { setSubmitting }) => {
      mutate({ password });
      setSubmitting(true);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("Wpisz hasło")
        .min(6, "Hasło musi mieć minimum 6 znaków"),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Hasła muszą być takie same")
    })
  });

  return (
    <Stack className={styles.ob__signupPassword} spacing={2}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h3" component="div" fontWeight="700" mb="8px">
            Ustaw swoje hasło
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={styles.ob__signupEmail_subtitle}
          >
            Hasło musi składać się z min. 6 znaków
          </Typography>
          <TextField
            variant="filled"
            label="Hasło"
            placeholder="Wpisz swoje hasło"
            name="password"
            type="password"
            fullWidth
            sx={{
              ".MuiFilledInput-root": {
                border: "1px solid rgba(228, 230, 232, 0.6)",
                overflow: "hidden"
              }
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            variant="filled"
            label="Powtórz Hasło"
            placeholder="Wpisz swoje hasło ponownie"
            name="passwordConfirmation"
            type="password"
            fullWidth
            sx={{
              ".MuiFilledInput-root": {
                border: "1px solid rgba(228, 230, 232, 0.6)",
                overflow: "hidden"
              }
            }}
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={formik.isSubmitting}
            type="submit"
          >
            Rejestruj
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
