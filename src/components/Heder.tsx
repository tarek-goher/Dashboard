import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface HeaderProps {
  title: string;
  suptitle: string;
  isdashboard: boolean;
}
const Header: React.FC<HeaderProps> = ({
  title,
  suptitle,
  isdashboard = false,
}) => {
  const theme = useTheme();

  return (
    <Box mb={isdashboard ? 2 : 4}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
          textTransform: isdashboard ? null : "capitalize",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ textTransform: "capitalize" }} variant="body1">
        {suptitle}
      </Typography>
    </Box>
  );
};

export default Header;
