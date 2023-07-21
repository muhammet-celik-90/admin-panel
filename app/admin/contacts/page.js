"use client";

import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { mockDataContacts } from "@/data/mockData";
import Header from "@/components/Header";

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAling: "left",
      aling: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];
  return (
    <Box>
      <Header title="CONTACTS" subtitle="Contacts for Future Reference">
        <Box m="10px 0 0 0" height="90vh" sx={{
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700]
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: colors.blueAccent[700]
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-root": {
                fontSize: "13px"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`
            }
        }}>
          <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar}}/>
        </Box>
      </Header>
    </Box>
  );
}
