import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import React, { useEffect } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { DefaultSeo } from "next-seo";
import { SnackbarContext } from "@/context/SnackbarContext";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import "../styles/globals.css";

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }: AppProps) {
  const [snackbar, setSnackbar] = React.useState<{
    message: string;
    severity: AlertColor;
  } | null>(null);
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        queryCache,
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 60 * 24 // 24 hours
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultSeo
            title="Obudynku - Opinie o Budynkach i Mieszkaniach w Polsce"
            description="Odkryj szczegółowe opinie o budynkach i mieszkaniach w Polsce. Znajdź idealne mieszkanie dla siebie, uwzględniając ważne informacje i recenzje dostępne na Obudynku.pl."
            canonical="https://www.obudynku.pl/"
            openGraph={{
              url: "https://www.obudynku.pl/",
              title: "Obudynku - Opinie o Budynkach i Mieszkaniach w Polsce",
              description:
                "Odkryj szczegółowe opinie o budynkach i mieszkaniach w Polsce. Znajdź idealne mieszkanie dla siebie, uwzględniając ważne informacje i recenzje dostępne na Obudynku.pl.",
              images: [
                {
                  url: "/og-image.png",
                  width: 1086,
                  height: 440,
                  alt: "Banner Obudynku.pl"
                }
              ]
            }}
          />
          <SnackbarContext.Provider
            value={{
              showSnackbar: setSnackbar
            }}
          >
            <Component {...pageProps} />
            <Snackbar
              open={!!snackbar}
              autoHideDuration={3000}
              onClose={() => setSnackbar(null)}
            >
              <Alert
                onClose={() => setSnackbar(null)}
                severity={snackbar?.severity}
                sx={{ width: "100%" }}
              >
                {snackbar?.message}
              </Alert>
            </Snackbar>
          </SnackbarContext.Provider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
