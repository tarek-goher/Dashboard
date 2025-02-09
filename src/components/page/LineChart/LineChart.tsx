import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import Header from "../../Heder";

const data = [
  {
    id: "japan",
    color: "hsl(91, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 14,
      },
      {
        x: "helicopter",
        y: 282,
      },
      {
        x: "boat",
        y: 138,
      },
      {
        x: "train",
        y: 133,
      },
      {
        x: "subway",
        y: 179,
      },
      {
        x: "bus",
        y: 169,
      },
      {
        x: "car",
        y: 65,
      },
      {
        x: "moto",
        y: 286,
      },
      {
        x: "bicycle",
        y: 297,
      },
      {
        x: "horse",
        y: 162,
      },
      {
        x: "skateboard",
        y: 127,
      },
      {
        x: "others",
        y: 6,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(40, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 245,
      },
      {
        x: "helicopter",
        y: 89,
      },
      {
        x: "boat",
        y: 98,
      },
      {
        x: "train",
        y: 272,
      },
      {
        x: "subway",
        y: 180,
      },
      {
        x: "bus",
        y: 1,
      },
      {
        x: "car",
        y: 51,
      },
      {
        x: "moto",
        y: 62,
      },
      {
        x: "bicycle",
        y: 205,
      },
      {
        x: "horse",
        y: 249,
      },
      {
        x: "skateboard",
        y: 40,
      },
      {
        x: "others",
        y: 118,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(356, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 282,
      },
      {
        x: "helicopter",
        y: 2,
      },
      {
        x: "boat",
        y: 168,
      },
      {
        x: "train",
        y: 264,
      },
      {
        x: "subway",
        y: 81,
      },
      {
        x: "bus",
        y: 97,
      },
      {
        x: "car",
        y: 109,
      },
      {
        x: "moto",
        y: 169,
      },
      {
        x: "bicycle",
        y: 271,
      },
      {
        x: "horse",
        y: 14,
      },
      {
        x: "skateboard",
        y: 171,
      },
      {
        x: "others",
        y: 93,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(355, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 288,
      },
      {
        x: "helicopter",
        y: 122,
      },
      {
        x: "boat",
        y: 231,
      },
      {
        x: "train",
        y: 59,
      },
      {
        x: "subway",
        y: 249,
      },
      {
        x: "bus",
        y: 109,
      },
      {
        x: "car",
        y: 74,
      },
      {
        x: "moto",
        y: 37,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 91,
      },
      {
        x: "skateboard",
        y: 100,
      },
      {
        x: "others",
        y: 253,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(99, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 2,
      },
      {
        x: "helicopter",
        y: 89,
      },
      {
        x: "boat",
        y: 67,
      },
      {
        x: "train",
        y: 200,
      },
      {
        x: "subway",
        y: 190,
      },
      {
        x: "bus",
        y: 96,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 80,
      },
      {
        x: "bicycle",
        y: 215,
      },
      {
        x: "horse",
        y: 228,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 4,
      },
    ],
  },
];

const LineChart = ({ isDashboard = false }) => {
  const them = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <Header
        title={"Line Chart"}
        suptitle={" simple line chart "}
        isdashboard={false}
      />
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: them.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: them.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: them.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: them.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: them.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: them.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: them.palette.text.primary,
              color: them.palette.background.default,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
