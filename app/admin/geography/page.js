"use client";

import { Box, useTheme } from "@mui/material";
import Header from "@/components/Header";
import GeoChart from "@/components/GeoChart";
import { tokens } from "@/app/theme";

export default function Geo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  return (
    <Box m="5px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geo Chart">
        <Box height="100vh" border={`1px solid ${colors.grey[100]}`} borderRadius="5px">
          <GeoChart />
        </Box>
      </Header>
    </Box>
  );
}
