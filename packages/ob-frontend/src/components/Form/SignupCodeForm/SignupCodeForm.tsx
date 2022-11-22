import { Stack, Button, Divider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import ReactCodeInput from 'react-code-input';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { useUser, verifyEmailCode } from '@/hooks/useUser';
import * as yup from 'yup';
import styles from './SignupCodeForm.module.scss';

export interface SignupCodeFormProps {
  onSuccess(): void;
}

export const SignupCodeForm: React.FC<SignupCodeFormProps> = ({
  onSuccess,
}) => {
  const { registrationEmail, setRegisterToken } = useUser();
  const { mutate } = useMutation('verifyEmailCode', verifyEmailCode, {
    onSuccess: (data) => {
      setRegisterToken(data.token);
      onSuccess();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      formik.setSubmitting(false);
      formik.setErrors({ code: error?.response?.data?.message });
    },
  });
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: ({ code }, { setSubmitting }) => {
      if (registrationEmail) {
        mutate({ code, email: registrationEmail });
        setSubmitting(true);
      }
    },
    validationSchema: yup.object({
      code: yup
        .number()
        .typeError('Kod powinien zawierać tylko cyfry')
        .required('Wpisz kod przesłany an twój adres email'),
    }),
  });

  return (
    <Stack className={styles.ob__signupCode} spacing={2}>
      <Typography
        variant="h3"
        component="div"
        fontWeight="700"
        mb="8px"
        textAlign="center"
      >
        Potwierdź adres email
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        textAlign="center"
        className={styles.ob__signupCode_subtitle}
      >
        Kod został wysłany na {registrationEmail}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <ReactCodeInput
            type="text"
            fields={5}
            name="code"
            onChange={formik.handleChange('code')}
            inputMode="numeric"
          />
          {formik.touched.code && formik.errors.code && (
            <Typography color="error.main">{formik.errors.code}</Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={formik.isSubmitting}
            type="submit"
          >
            Prześlij kod
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
