"use client";


import { Box, Typography } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

export default function Loading() {

    if (window !== "undefined") {
        // browser code
        return (
          <Box className="loading-page">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            <Typography variant="h4">Yükleniyor ...</Typography>
          </Box>
        );
      }
}