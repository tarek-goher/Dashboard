import { EmailOutlined, PersonAdd, PointOfSale } from "@mui/icons-material";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Chart from "./CART";

const data = [
  {
    icon: <EmailOutlined />,
    title: "12.361",
    suptitle: "Email Sent",
    cart: <Chart />,
    text: "+14%",
  },
  {
    icon: <PointOfSale />,
    title: "431.225",
    suptitle: "Sales Obtained",
    cart: <Chart />,
    text: "+21%",
  },
  {
    icon: <PersonAdd />,
    title: "32.441",
    suptitle: "New Clients",
    cart: <Chart />,
    text: "+5%",
  },
  {
    icon: <PointOfSale />,
    title: "1.325.134",
    suptitle: "Teaffic received",
    cart: <Chart />,
    text: "+43%",
  },
];

const Row1 = () => {
  const them = useTheme();
  return (
    <div>
      <Stack
        direction={"row"}
        gap={2}
        justifyContent={{ xs: "center", sm: "space-between" }}
        flexWrap={"wrap"}
      >
        {data.map((index) => (
          <Paper
            key={index.text}
            sx={{
              flexGrow: 1,
              minWidth: "333px",
              padding: 1.5,
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Stack direction={"column"} justifyContent={"center"}>
              <Typography
                sx={{ fontSize: "23px", color: them.palette.secondary.main }}
              >
                {index.icon}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "16px" }}>
                {index.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "16px" }}>
                {" "}
                {index.suptitle}
              </Typography>
            </Stack>
            <Stack direction={"column"}>
              {index.cart}
              <Typography variant="body2" sx={{ fontSize: "16px" }}>
                {index.text}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </div>
  );
};
export default Row1;
