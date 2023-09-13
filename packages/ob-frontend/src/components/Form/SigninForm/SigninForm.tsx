import { Stack, TextField, Button, Divider, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useUser } from "@/hooks/useUser";
import styles from "./SigninForm.module.scss";

export interface SigninFormProps {
  onSuccess(): void;
}

export const SigninForm: React.FC<SigninFormProps> = ({ onSuccess }) => {
  const router = useRouter();
  const { setUser, logIn } = useUser();
  const { mutate } = useMutation("logIn", logIn, {
    onSuccess: data => {
      setUser(data);
      onSuccess();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      formik.setSubmitting(false);
      formik.setErrors({
        email: error?.response?.data?.message,
        password: error?.response?.data?.message
      });
    }
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: ({ email, password }, { setSubmitting }) => {
      setSubmitting(true);
      mutate({ email, password });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Wpisz poprawny adres email")
        .required("Adres email jest wymagany"),
      password: yup
        .string()
        .required("Wpisz hasło")
        .min(6, "Hasło musi mieć minimum 6 znaków")
    })
  });

  return (
    <Stack className={styles.ob__signin} spacing={2}>
      <Typography variant="h3" component="div" fontWeight="700" mb="8px">
        Zaloguj się
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        className={styles.ob__signin_subtitle}
      >
        Aby dodać opinie o mieszkaniu/budynku musisz się zalogować.
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={formik.isSubmitting}
            type="submit"
          >
            Zaloguj się
          </Button>
        </Stack>
      </form>
      <Divider flexItem>lub</Divider>
      <Button
        variant="text"
        size="large"
        fullWidth
        onClick={() => router.push("/signup")}
      >
        Zarejestruj się
      </Button>
    </Stack>
  );
};
