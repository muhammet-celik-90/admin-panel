"use client";

import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { mockDataInvoices } from "@/data/mockData";
import Header from "@/components/Header";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const mySaveOnServerFunction = (updatedRow) => {
    console.log(updatedRow)
  }

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      editable: true,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box>
      <Header title="INVOICES" subtitle="List of Invoice Balance">
        <Box
          m="10px 0 0 0"
          height="90vh"
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: colors.blueAccent[700],
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-root": {
              fontSize: "13px",
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            checkboxSelection
            processRowUpdate={(updatedRow, originalRow) =>
              mySaveOnServerFunction(updatedRow)
            }
          />
        </Box>
      </Header>
    </Box>
  );
}
