import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { GridColDef } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../Heder";

const Team = () => {
  const them = useTheme();

  const columns: GridColDef[] = [
    {
      field: "ID",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { Access } }) => {
        return (
          <Box
            justifyContent={"space-evenly"}
            sx={{
              display: "flex",
              p: "5px",
              width: "99px",
              alignItems: "center",
              borderRadius: "3px",
              textAlign: "center",
              mx: "auto",
              marginTop: "10px",
              backgroundColor:
                Access === "Admin"
                  ? them.palette.primary.dark
                  : Access === "Manger"
                  ? them.palette.secondary.main
                  : "#3da58a ",
            }}
          >
            {Access === "Admin" ? (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            ) : (
              ""
            )}
            {Access === "Manger" ? (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            ) : (
              ""
            )}
            {Access === "User" ? (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            ) : (
              ""
            )}

            <Typography
              variant="body1"
              sx={{ fontSize: "13px", color: "#fff" }}
            >
              {Access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
  <Box>
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <Header title={"TEAM"} suptitle={"Managing the team members"}/>
      <DataGrid rows={rows} columns={columns} />
    </Box>
    </Box>
  );
};

export default Team;
