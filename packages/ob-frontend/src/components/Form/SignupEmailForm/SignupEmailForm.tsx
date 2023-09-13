import { Stack, TextField, Button, Divider, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import styles from "./SignupEmailForm.module.scss";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { requestEmailCode, useUser } from "@/hooks/useUser";

export interface SignupEmailFormProps {
  onSuccess(): void;
}

export const SignupEmailForm: React.FC<SignupEmailFormProps> = ({
  onSuccess
}) => {
  const router = useRouter();
  const { setRegistrationEmail } = useUser();
  const { mutate } = useMutation("requestEmailCode", requestEmailCode, {
    onSuccess: data => {
      setRegistrationEmail(data.email);
      onSuccess();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      formik.setSubmitting(false);
      formik.setErrors({ email: error?.response?.data?.message });
    }
  });
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: ({ email }, { setSubmitting }) => {
      setSubmitting(true);
      mutate({ email });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Wpisz poprawny adres email")
        .required("Adres email jest wymagany")
    })
  });

  return (
    <Stack className={styles.ob__signupEmail} spacing={2}>
      <Typography variant="h3" component="div" fontWeight="700" mb="8px">
        Zarejestruj się
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        className={styles.ob__signupEmail_subtitle}
      >
        Aby dodać opinie o mieszkaniu/budynku musisz utworzyć konto.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            variant="filled"
            label="Email"
            placeholder="Wpisz swój email"
            name="email"
            fullWidth
            sx={{
              ".MuiFilledInput-root": {
                border: "1px solid rgba(228, 230, 232, 0.6)",
                overflow: "hidden"
              }
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={formik.isSubmitting}
            type="submit"
          >
            Zarejestruj się
          </Button>
        </Stack>
      </form>
      <Divider flexItem>lub</Divider>
      <Button
        variant="text"
        size="large"
        fullWidth
        onClick={() => router.push("/signin")}
      >
        Zaloguj się
      </Button>
    </Stack>
  );
};
