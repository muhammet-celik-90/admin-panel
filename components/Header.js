"use client";

import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "@/app/theme";
import Sidenav from "@/scenes/global/Sidenav";
import Topbar from "@/scenes/global/Topbar";
import { useState } from "react";

export default function Header({ title, subtitle, children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      <Sidenav />
      <main className="content">
        <Topbar />
        <Box p={2} display="flex">
          <Box mb="5px">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ mb: "5px" }}
            >
              {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
              {subtitle}
            </Typography>
          </Box>
        </Box>
        <Box mr="10px" ml="10px">
            {children}
        </Box>
      </main>
    </div>
  );
}
