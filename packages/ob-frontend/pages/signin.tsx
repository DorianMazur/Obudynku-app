import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { SigninForm } from "@/components/Form/SigninForm/SigninForm";
import { useContext } from "react";
import { SnackbarContext } from "@/context/SnackbarContext";
import { useSearchParams } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const snackbar = useContext(SnackbarContext);
  return (
    <Layout>
      <SigninForm
        onSuccess={() => {
          router.push(searchParams.get("redirect") || "/");
          snackbar.showSnackbar({
            message: "Pomyślnie zalogowano",
            severity: "success"
          });
        }}
      />
    </Layout>
  );
};

export default SignIn;
