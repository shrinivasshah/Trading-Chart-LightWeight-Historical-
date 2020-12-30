import React, { useState, useEffect } from "react";

import Chart from "react-apexcharts";
const ApexChart = ({ category, seriesData }) => {
  //   console.log(category);
  // cluster name historical
  return (
    <Chart
      options={{
        chart: {
          // animations: {
          //   enabled: true,
          //   easing: "easeout",
          //   speed: 200,
          //   animateGradually: {
          //     enabled: true,
          //     delay: 150,
          //   },
          //   dynamicAnimation: {
          //     enabled: true,
          //     speed: 100,
          //   },
          // },

          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: false,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        // dropShadow: {
        //   enabled: false,
        //   enabledOnSeries: undefined,
        //   top: 0,
        //   left: 0,
        //   blur: 3,
        //   color: "#000",
        //   opacity: 0.35,
        // },
        markers: {
          size: 0,
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["red"],
          width: 4,
          dashArray: 0,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return `₹${val}`;
            },
          },
          title: {
            text: "Price",
          },
        },
        xaxis: {
          title: {
            text: "1 MINUTE CHART",
          },
          categories: category,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: "#78909C",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "#78909C",
            height: 2,
            offsetX: 0,
            offsetY: 0,
          },
          // tickAmount: 20,
          // tickPlacement: "between",
          // min: 0,
          // max: 100,
          // range: undefined,
          // floating: false,
          // position: "bottom",
          // title: {
          //   text: undefined,
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     color: undefined,
          //     fontSize: "12px",
          //     fontFamily: "Helvetica, Arial, sans-serif",
          //     fontWeight: 600,
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
        },
        // crosshairs: {
        //   show: true,
        //   width: 1,
        //   position: "back",
        //   opacity: 0.9,
        //   stroke: {
        //     color: "#b6b6b6",
        //     width: 0,
        //     dashArray: 0,
        //   },
        //   fill: {
        //     type: "solid",
        //     color: "#B1B9C4",
        //     gradient: {
        //       colorFrom: "#D8E3F0",
        //       colorTo: "#BED1E6",
        //       stops: [0, 100],
        //       opacityFrom: 0.4,
        //       opacityTo: 0.5,
        //     },
        //   },
        // },
        // max: 99,
        // min: 0,
        colors: ["#9C27B0"],

        // tooltip: {
        //   shared: false,
        //   y: {
        //     formatter: function (val) {
        //       return (val / 1000000).toFixed(0);
        //     },
        //   },
        // },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: true,
          intersect: false,
          inverseOrder: false,
          // custom: false,
          fillSeriesColor: false,
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
          // x: {
          //   show: true,
          //   format: "dd MMM",
          //   formatter: undefined,
          // },
          // y: {
          //   formatter: undefined,
          //   title: {
          //     formatter: (seriesName) => seriesName,
          //   },
          // },
          // z: {
          //   formatter: undefined,
          //   title: "Size: ",
          // },
          marker: {
            show: false,
          },
          // items: {
          //   display: flex,
          // },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
      }}
      series={[
        {
          name: "BTCINR",
          data: seriesData,
        },
      ]}
      type="area"
      //   markers={{ size: 0 }}
    />
  );
};

export default ApexChart;

// {
//     optionsMixedChart: {
//       chart: {
//         id: "basic-bar",
//         toolbar: {
//           show: false
//         }
//       },
//       plotOptions: {
//         bar: {
//           columnWidth: "50%"
//         }
//       },
//       stroke: {
//         width: [4, 0, 0]
//       },
//       xaxis: {
//         categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//       },
//       markers: {
//         size: 6,
//         strokeWidth: 3,
//         fillOpacity: 0,
//         strokeOpacity: 0,
//         hover: {
//           size: 8
//         }
//       },
//       yaxis: {
//         tickAmount: 5,
//         min: 0,
//         max: 100
//       }
//     },
//     seriesMixedChart: [
//       {
//         name: "series-1",
//         type: "line",
//         data: [30, 40, 25, 50, 49, 21, 70, 51]
//       },
//       {
//         name: "series-2",
//         type: "column",
//         data: [23, 12, 54, 61, 32, 56, 81, 19]
//       },
//       {
//         name: "series-3",
//         type: "column",
//         data: [62, 12, 45, 55, 76, 41, 23, 43]
//       }
//     ],
//     optionsRadial: {
//       plotOptions: {
//         radialBar: {
//           startAngle: -135,
//           endAngle: 225,
//           hollow: {
//             margin: 0,
//             size: "70%",
//             background: "#fff",
//             image: undefined,
//             imageOffsetX: 0,
//             imageOffsetY: 0,
//             position: "front",
//             dropShadow: {
//               enabled: true,
//               top: 3,
//               left: 0,
//               blur: 4,
//               opacity: 0.24
//             }
//           },
//           track: {
//             background: "#fff",
//             strokeWidth: "67%",
//             margin: 0, // margin is in pixels
//             dropShadow: {
//               enabled: true,
//               top: -3,
//               left: 0,
//               blur: 4,
//               opacity: 0.35
//             }
//           },

//           dataLabels: {
//             showOn: "always",
//             name: {
//               offsetY: -20,
//               show: true,
//               color: "#888",
//               fontSize: "13px"
//             },
//             value: {
//               formatter: function (val) {
//                 return val;
//               },
//               color: "#111",
//               fontSize: "30px",
//               show: true
//             }
//           }
//         }
//       },
//       fill: {
//         type: "gradient",
//         gradient: {
//           shade: "dark",
//           type: "horizontal",
//           shadeIntensity: 0.5,
//           gradientToColors: ["#ABE5A1"],
//           inverseColors: true,
//           opacityFrom: 1,
//           opacityTo: 1,
//           stops: [0, 100]
//         }
//       },
//       stroke: {
//         lineCap: "round"
//       },
//       labels: ["Percent"]
//     },
//     seriesRadial: [76],
//     optionsBar: {
//       chart: {
//         stacked: true,
//         stackType: "100%",
//         toolbar: {
//           show: false
//         }
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true
//         }
//       },
//       dataLabels: {
//         dropShadow: {
//           enabled: true
//         }
//       },
//       stroke: {
//         width: 0
//       },
//       xaxis: {
//         categories: ["Fav Color"],
//         labels: {
//           show: false
//         },
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         }
//       },
//       fill: {
//         opacity: 1,
//         type: "gradient",
//         gradient: {
//           shade: "dark",
//           type: "vertical",
//           shadeIntensity: 0.35,
//           gradientToColors: undefined,
//           inverseColors: false,
//           opacityFrom: 0.85,
//           opacityTo: 0.85,
//           stops: [90, 0, 100]
//         }
//       },

//       legend: {
//         position: "bottom",
//         horizontalAlign: "right"
//       }
//     },
//     seriesBar: [
//       {
//         name: "blue",
//         data: [32]
//       },
//       {
//         name: "green",
//         data: [41]
//       },
//       {
//         name: "yellow",
//         data: [12]
//       },
//       {
//         name: "red",
//         data: [65]
//       }
//     ]
//   };
