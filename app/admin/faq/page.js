"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Header from "@/components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "@/app/theme";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="5px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page">

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              An Important Question 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              An Important Question 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              An Important Question 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              An Important Question 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Header>
    </Box>
  );
}
