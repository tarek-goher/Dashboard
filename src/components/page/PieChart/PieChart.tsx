import { Box } from "@mui/material";

import Pie from "./pie";
import Header from "../../Heder";

const PieChart = () => {
  return (
    <Box>
      <Header
        title={"PIE CHART"}
        suptitle={"Simple pie chart"}
        isdashboard={false}
      />

      <Pie />
    </Box>
  );
};

export default PieChart;
