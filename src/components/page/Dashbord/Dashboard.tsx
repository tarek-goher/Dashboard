import { Box, Button } from "@mui/material";
import Row1 from "./Row/row1";
import { DownloadOutlined } from "@mui/icons-material";
import Row2 from "./Row/row2";
import Row3 from "./Row/row3";
import Header from "../../Heder";

const Dashboard = () => {
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Header  title={"DASHBOARD"} suptitle={"Welcome to your dashboard"} isdashboard={true} />
      <Box sx={{ textAlign: "right", mb: 1.5 }}>
        <Button sx={{ padding: "6px 8px" }} variant="contained" color="primary">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
