"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import BarChart from "@/components/BarChart";

export default function Bar() {
  return (
    <Box m="5px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart">
        <Box height="90vh">
          <BarChart />
        </Box>
      </Header>
    </Box>
  );
}
