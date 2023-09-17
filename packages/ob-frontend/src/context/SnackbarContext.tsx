import { AlertColor } from "@mui/material";
import React from "react";

export type SnackbarContextType = {
  showSnackbar(props: { message: string; severity: AlertColor }): void;
};

export const SnackbarContext = React.createContext<SnackbarContextType>({
  showSnackbar: () => {}
});
