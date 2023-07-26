"use client";

import React from "react"
import Header from "@/components/Header";
import { Box } from "@mui/material";
import Content from "@/components/Content";

export default function Create() {
  return (
    <Box m="5px">
      <Header title="BLOG OLUŞTUR" subtitle="Yeni bir blog yazısı oluştur">
        <Content />
      </Header>
    </Box>
  );
}
