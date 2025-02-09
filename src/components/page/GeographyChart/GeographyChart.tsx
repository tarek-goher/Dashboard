import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { geo } from "./world_countries";
import Header from "../../Heder";

const data = [
  {
    id: "AFG",
    value: 771680,
  },
  {
    id: "AGO",
    value: 433008,
  },
  {
    id: "ALB",
    value: 661323,
  },
  {
    id: "ARE",
    value: 740247,
  },
  {
    id: "ARG",
    value: 149600,
  },
  {
    id: "ARM",
    value: 984977,
  },
  {
    id: "ATA",
    value: 472793,
  },
  {
    id: "ATF",
    value: 428560,
  },
  {
    id: "AUT",
    value: 899945,
  },
  {
    id: "AZE",
    value: 368158,
  },
  {
    id: "BDI",
    value: 156468,
  },
  {
    id: "BEL",
    value: 208104,
  },
  {
    id: "BEN",
    value: 585547,
  },
  {
    id: "BFA",
    value: 745693,
  },
  {
    id: "BGD",
    value: 873504,
  },
  {
    id: "BGR",
    value: 377874,
  },
  {
    id: "BHS",
    value: 972698,
  },
  {
    id: "BIH",
    value: 142082,
  },
  {
    id: "BLR",
    value: 467130,
  },
  {
    id: "BLZ",
    value: 230323,
  },
  {
    id: "BOL",
    value: 930204,
  },
  {
    id: "BRN",
    value: 95961,
  },
  {
    id: "BTN",
    value: 78640,
  },
  {
    id: "BWA",
    value: 303379,
  },
  {
    id: "CAF",
    value: 262727,
  },
  {
    id: "CAN",
    value: 258163,
  },
  {
    id: "CHE",
    value: 841932,
  },
  {
    id: "CHL",
    value: 133107,
  },
  {
    id: "CHN",
    value: 712560,
  },
  {
    id: "CIV",
    value: 33530,
  },
  {
    id: "CMR",
    value: 224159,
  },
  {
    id: "COG",
    value: 129635,
  },
  {
    id: "COL",
    value: 682318,
  },
  {
    id: "CRI",
    value: 671605,
  },
  {
    id: "CUB",
    value: 295258,
  },
  {
    id: "-99",
    value: 916238,
  },
  {
    id: "CYP",
    value: 506568,
  },
  {
    id: "CZE",
    value: 642511,
  },
  {
    id: "DEU",
    value: 209948,
  },
  {
    id: "DJI",
    value: 958362,
  },
  {
    id: "DNK",
    value: 235344,
  },
  {
    id: "DOM",
    value: 750897,
  },
  {
    id: "DZA",
    value: 678410,
  },
  {
    id: "ECU",
    value: 775350,
  },
  {
    id: "EGY",
    value: 905436,
  },
  {
    id: "ERI",
    value: 13999,
  },
  {
    id: "ESP",
    value: 998253,
  },
  {
    id: "EST",
    value: 254492,
  },
  {
    id: "ETH",
    value: 468868,
  },
  {
    id: "FIN",
    value: 347667,
  },
  {
    id: "FJI",
    value: 772541,
  },
  {
    id: "FLK",
    value: 456392,
  },
  {
    id: "FRA",
    value: 647267,
  },
  {
    id: "GAB",
    value: 151877,
  },
  {
    id: "GBR",
    value: 514848,
  },
  {
    id: "GEO",
    value: 398720,
  },
  {
    id: "GHA",
    value: 566291,
  },
  {
    id: "GIN",
    value: 760480,
  },
  {
    id: "GMB",
    value: 733570,
  },
  {
    id: "GNB",
    value: 799739,
  },
  {
    id: "GNQ",
    value: 770174,
  },
  {
    id: "GRC",
    value: 109219,
  },
  {
    id: "GTM",
    value: 756100,
  },
  {
    id: "GUY",
    value: 591130,
  },
  {
    id: "HND",
    value: 480576,
  },
  {
    id: "HRV",
    value: 96003,
  },
  {
    id: "HTI",
    value: 988018,
  },
  {
    id: "HUN",
    value: 45234,
  },
  {
    id: "IDN",
    value: 584299,
  },
  {
    id: "IND",
    value: 1897,
  },
  {
    id: "IRL",
    value: 132272,
  },
  {
    id: "IRN",
    value: 320757,
  },
  {
    id: "IRQ",
    value: 558028,
  },
  {
    id: "ISL",
    value: 993646,
  },
  {
    id: "ISR",
    value: 248609,
  },
  {
    id: "ITA",
    value: 872115,
  },
  {
    id: "JAM",
    value: 674712,
  },
  {
    id: "JOR",
    value: 597354,
  },
  {
    id: "JPN",
    value: 803114,
  },
  {
    id: "KAZ",
    value: 764121,
  },
  {
    id: "KEN",
    value: 123588,
  },
  {
    id: "KGZ",
    value: 982692,
  },
  {
    id: "KHM",
    value: 983107,
  },
  {
    id: "OSA",
    value: 351460,
  },
  {
    id: "KWT",
    value: 612922,
  },
  {
    id: "LAO",
    value: 85069,
  },
  {
    id: "LBN",
    value: 168990,
  },
  {
    id: "LBR",
    value: 509200,
  },
  {
    id: "LBY",
    value: 265723,
  },
  {
    id: "LKA",
    value: 34370,
  },
  {
    id: "LSO",
    value: 450153,
  },
  {
    id: "LTU",
    value: 501398,
  },
  {
    id: "LUX",
    value: 660841,
  },
  {
    id: "LVA",
    value: 265417,
  },
  {
    id: "MAR",
    value: 861293,
  },
  {
    id: "MDA",
    value: 215497,
  },
  {
    id: "MDG",
    value: 681589,
  },
  {
    id: "MEX",
    value: 42814,
  },
  {
    id: "MKD",
    value: 69412,
  },
  {
    id: "MLI",
    value: 122774,
  },
  {
    id: "MMR",
    value: 793439,
  },
  {
    id: "MNE",
    value: 563357,
  },
  {
    id: "MNG",
    value: 25854,
  },
  {
    id: "MOZ",
    value: 130976,
  },
  {
    id: "MRT",
    value: 429345,
  },
  {
    id: "MWI",
    value: 312987,
  },
  {
    id: "MYS",
    value: 925333,
  },
  {
    id: "NAM",
    value: 140439,
  },
  {
    id: "NCL",
    value: 100632,
  },
  {
    id: "NER",
    value: 232548,
  },
  {
    id: "NGA",
    value: 298883,
  },
  {
    id: "NIC",
    value: 828049,
  },
  {
    id: "NLD",
    value: 84108,
  },
  {
    id: "NOR",
    value: 472489,
  },
  {
    id: "NPL",
    value: 487981,
  },
  {
    id: "NZL",
    value: 551663,
  },
  {
    id: "OMN",
    value: 359800,
  },
  {
    id: "PAK",
    value: 879098,
  },
  {
    id: "PAN",
    value: 219786,
  },
  {
    id: "PER",
    value: 574600,
  },
  {
    id: "PHL",
    value: 565375,
  },
  {
    id: "PNG",
    value: 543688,
  },
  {
    id: "POL",
    value: 538876,
  },
  {
    id: "PRI",
    value: 256978,
  },
  {
    id: "PRT",
    value: 5693,
  },
  {
    id: "PRY",
    value: 780638,
  },
  {
    id: "QAT",
    value: 286442,
  },
  {
    id: "ROU",
    value: 602928,
  },
  {
    id: "RUS",
    value: 728206,
  },
  {
    id: "RWA",
    value: 884135,
  },
  {
    id: "ESH",
    value: 246656,
  },
  {
    id: "SAU",
    value: 76387,
  },
  {
    id: "SDN",
    value: 74470,
  },
  {
    id: "SDS",
    value: 447753,
  },
  {
    id: "SEN",
    value: 841242,
  },
  {
    id: "SLB",
    value: 508392,
  },
  {
    id: "SLE",
    value: 665746,
  },
  {
    id: "SLV",
    value: 456655,
  },
  {
    id: "ABV",
    value: 30481,
  },
  {
    id: "SOM",
    value: 849319,
  },
  {
    id: "SRB",
    value: 388452,
  },
  {
    id: "SUR",
    value: 266599,
  },
  {
    id: "SVK",
    value: 28612,
  },
  {
    id: "SVN",
    value: 15505,
  },
  {
    id: "SWZ",
    value: 83223,
  },
  {
    id: "SYR",
    value: 257045,
  },
  {
    id: "TCD",
    value: 697051,
  },
  {
    id: "TGO",
    value: 454762,
  },
  {
    id: "THA",
    value: 993928,
  },
  {
    id: "TJK",
    value: 723973,
  },
  {
    id: "TKM",
    value: 668771,
  },
  {
    id: "TLS",
    value: 966257,
  },
  {
    id: "TTO",
    value: 786048,
  },
  {
    id: "TUN",
    value: 97196,
  },
  {
    id: "TUR",
    value: 942100,
  },
  {
    id: "TWN",
    value: 932344,
  },
  {
    id: "TZA",
    value: 412840,
  },
  {
    id: "UGA",
    value: 440374,
  },
  {
    id: "UKR",
    value: 692162,
  },
  {
    id: "URY",
    value: 548414,
  },
  {
    id: "USA",
    value: 359111,
  },
  {
    id: "UZB",
    value: 950831,
  },
  {
    id: "VEN",
    value: 281883,
  },
  {
    id: "VNM",
    value: 233241,
  },
  {
    id: "VUT",
    value: 529207,
  },
  {
    id: "PSE",
    value: 987130,
  },
  {
    id: "YEM",
    value: 876073,
  },
  {
    id: "ZAF",
    value: 73519,
  },
  {
    id: "ZMB",
    value: 165818,
  },
  {
    id: "ZWE",
    value: 587808,
  },
  {
    id: "KOR",
    value: 314112,
  },
];

const GeographyChart = ({ isDashboard = false }) => {
  const them = useTheme();
  return (
    <Box>
      <Header
        title={"Geography"}
        suptitle={"simple Geography chart"}
        isdashboard={false}
      />
      <Box
        sx={{
          height: isDashboard ? "50vh" : "75vh",
          border: isDashboard
            ? null
            : `1px solid ${them.palette.text.primary} `,
          borderRadius: "5px",
        }}
      >
        <ResponsiveChoropleth
          data={data}
          projectionScale={150}
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
          features={geo.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -30,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: them.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: them.palette.text.secondary,
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
          }
        />
      </Box>
    </Box>
  );
};

export default GeographyChart;
