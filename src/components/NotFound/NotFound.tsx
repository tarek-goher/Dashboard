import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        textAlign={"center"}
        color={theme.palette.error.main}
        variant="h5"
      >
        There is no disign Yet
        <br />
        <br />
        please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;
