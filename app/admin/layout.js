"use client";

import "../globals.css";
import { Source_Sans_3 } from "next/font/google";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
