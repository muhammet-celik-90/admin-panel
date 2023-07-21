"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import PieChart from "@/components/PieChart";

export default function Pie() {
  return (
    <Box m="5px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart">
        <Box height="90vh">
          <PieChart />
        </Box>
      </Header>
    </Box>
  );
}
