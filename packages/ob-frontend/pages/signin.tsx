import { Layout } from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import { SigninForm } from '@/components/Form/SigninForm/SigninForm';
import { useContext } from 'react';
import { SnackbarContext } from '@/context/SnackbarContext';

const SignIn = () => {
  const router = useRouter();
  const snackbar = useContext(SnackbarContext);
  return (
    <Layout>
      <SigninForm
        onSuccess={() => {
          router.push('/');
          snackbar.showSnackbar({
            message: 'Pomyślnie zalogowano',
            severity: 'success',
          });
        }}
      />
    </Layout>
  );
};

export default SignIn;
