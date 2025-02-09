import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../../LineChart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";

const data = [
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
  { title: "test1", suptitle: "test2", text: "test3", span: "555$" },
];

const Row2 = () => {
  const them = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: "900px", flex: 1, minWidth: "400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              mb={1}
              mt={2}
              ml={4}
              color={them.palette.secondary.main}
            >
              Revenue Generated{" "}
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{ mb: 1, mt: 2, mr: 4, color: them.palette.secondary.main }}
            >
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <LineChart isDashboard={true} />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          maxHeight: "400px",
          minWidth: "270px",
          flex: 1,
        }}
      >
        <Paper>
          <Typography
            sx={{ color: them.palette.secondary.main }}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transections
          </Typography>
        </Paper>
        {data.map((index) => (
          <Paper
            key={index.title}
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Box p={1.2}>
              {" "}
              <Typography variant="body1" fontWeight={600}>
                {index.title}
              </Typography>
              <Typography variant="body2">{index.suptitle} </Typography>
            </Box>
            <Typography variant="body1">{index.text} </Typography>
            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={them.palette.error.main}
              color={them.palette.getContrastText(them.palette.error.main)}
              variant="body2"
            >
              {index.span}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};
export default Row2;
