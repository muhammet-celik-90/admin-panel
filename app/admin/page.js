"use client";

import Header from "@/components/Header";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StatBox from "@/components/StatBox";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import GeoChart from "@/components/GeoChart";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import { mockTransactions } from "@/data/mockData";
import ProgressCircle from "@/components/ProgressCircle";
import PieChart from "@/components/PieChart";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="5px">
      <Header title="DASHBOARD" subtitle="Welcome to Dashboard">
        <Box justifyContent="flex-end" display="flex">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>

        {/* GRID & CHARTS */}
        <Box>
          <Grid container mt={1} rowGap={0.5} justifyContent="space-between">
            {/* ROW 1 */}
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={6}
              lg={3}
            >
              <StatBox
                title="12,361"
                subtitle="Email sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailOutlinedIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Grid>
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={5.9}
              lg={3}
            >
              <StatBox
                title="431,225"
                subtitle="Sales obtained"
                progress="0.5"
                increase="+21%"
                icon={
                  <PointOfSaleOutlinedIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Grid>
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={6}
              lg={3}
            >
              <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.3"
                increase="+5%"
                icon={
                  <PersonOutlineOutlinedIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Grid>
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={5.9}
              lg={2.9}
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Inbound"
                progress="0.80"
                increase="+43%"
                icon={
                  <AdsClickOutlinedIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Grid>
          </Grid>
          <Grid container mt={1} rowGap={0.5} justifyContent="space-between">
            {/* ROW 2 */}
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={8}
              height="300px"
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="500"
                    color={colors.greenAccent[500]}
                  >
                    $59,342,32
                  </Typography>
                </Box>

                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>

              <Box height="250px" mt="-20px">
                <LineChart isDashboard={true} />
              </Box>
            </Grid>
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={3.95}
              height="300px"
              overflow="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="600"
                >
                  Recent Transactions
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => (
                <Box
                  key={`${transaction.txId} - ${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`2px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      color={colors.greenAccent[500]}
                      fontWeight="600"
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>

          {/* ROW 3 */}
          <Grid container mt={1} justifyContent="space-between">
            {/* PROGRESSIVE CIRCLE */}
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={8}
              lg={4}
              height="300px"
              mb={3}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600">
                Campaign
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle size="125" />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Grid>

            {/* BAR CHART */}
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={8}
              lg={4}
              height="300px"
              mb={3}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
              </Box>
            </Grid>

            {/* GEO CHART */}
            <Grid
              item
              backgroundColor={colors.primary[400]}
              xs={12}
              md={8}
              lg={3.95}
              height="300px"
              mb={3}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                <GeoChart isDashboard={true} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Header>
    </Box>
  );
}
