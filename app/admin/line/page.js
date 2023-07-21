"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";

export default function Pie() {
  return (
    <Box m="5px">
      <Header title="LINE CHART" subtitle="Simple Line Chart">
        <Box height="75vh">
          <LineChart />
        </Box>
      </Header>
    </Box>
  );
}
