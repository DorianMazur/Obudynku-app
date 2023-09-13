import { Layout } from "@/components/Layout/Layout";
import { useContext, useState } from "react";
import { SignupEmailForm } from "@/components/Form/SignupEmailForm/SignupEmailForm";
import { SignupCodeForm } from "@/components/Form/SignupCodeForm/SignupCodeForm";
import { SignupPasswordForm } from "@/components/Form/SignupPasswordForm/SignupPasswordForm";
import { useRouter } from "next/router";
import { SnackbarContext } from "@/context/SnackbarContext";

enum SignUpSteps {
  Email = "EMAIL_SIGNUP_STEP",
  Code = "CODE_SIGNUP_STEP",
  Password = "PASSWORD_SINGUP_STEP"
}

const SignUp = () => {
  const router = useRouter();
  const snackbar = useContext(SnackbarContext);
  const [step, setStep] = useState(SignUpSteps.Email);

  return (
    <Layout>
      {step === SignUpSteps.Email && (
        <SignupEmailForm onSuccess={() => setStep(SignUpSteps.Code)} />
      )}
      {step === SignUpSteps.Code && (
        <SignupCodeForm onSuccess={() => setStep(SignUpSteps.Password)} />
      )}
      {step === SignUpSteps.Password && (
        <SignupPasswordForm
          onSuccess={() => {
            router.push("/");
            snackbar.showSnackbar({
              message: "Pomyślnie zarejestrowano",
              severity: "success"
            });
          }}
        />
      )}
    </Layout>
  );
};

export default SignUp;
