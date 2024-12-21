

  //// statistics1
export const Statistics1= {
    series: [
        {
          name: "Sales",
          type: "area",
          data: [[0, 3.128957947555989],
          [1, 4.84817222898398],
          [2, 5.082875592706364],
          [3, 7.379792694345753],
          [4, 8.547667054986002],
          [5, 4.773069367954017],
          [6, 3.0454348426761015],
          [7, 3.185480541480409],
          [8, 4.450143911018419],
          [9, 8.546949979037999],
          [10, 6.050127209461188],
          [11, 4.410453949908726],
          [12, 2.8471832046168135],
          [13, 3.2079540734030276],
          [14, 0.9162857987827975],
          [15, 4.6063565674411855],
          [16, 3.8108543994622526],
          [17, 0.07206516983173028],
          [18, 2.0235838597966103],
          [19, 3.11038525002839],
          [20, 7.661023220500137],
          [21, 4.392807043336401],
          [22, 2.095095656433122],
          [23, 3.6570708335265856],
          [24, 2.4750755395505095],
          [25, 7.365775338287607],
          [26, 3.160729824900333],
          [27, 5.540806251220914],
          [28, 0.6666892513129863],
          [29, 0.45739329594884204],
          [30, 3.0811785305861257],
          [31, 2.6892574426453804],
          [32, 9.518442007203902],
          [33, 9.031943999285872],
          [34, 11.195611227357478],
          [35, 14.843438986023465],
          [36, 12.379026518714024],
          [37, 13.460750940722328],
          [38, 12.40015951232427],
          [39, 10.358446800608565]]
        },
        {
          name: "Refunds",
          type: "area",
          data: [[0, 3.324329988896064],
          [1, 4.5545479994319145],
          [2, 6.100415206277958],
          [3, 7.432637151690175],
          [4, 5.60263986254995],
          [5, 4.832425480686457],
          [6, 0.9075445440427758],
          [7, 3.1482139596880163],
          [8, 3.5885516133784767],
          [9, 8.182754904215557],
          [10, 6.837879179399149],
          [11, 7.716258659531048],
          [12, 9.75364233299447],
          [13, 7.201169154192655],
          [14, 9.630620744220206],
          [15, 11.538477281715668],
          [16, 13.035970513058636],
          [17, 9.503486957660966],
          [18, 2.105314699985755],
          [19, 2.573652620996299],
          [20, 4.36838092867314],
          [21, 5.350295101555055],
          [22, 4.69794643352061],
          [23, 3.35219679846173],
          [24, 6.91736598898101],
          [25, 4.911176901130386],
          [26, 3.090864789052763],
          [27, 3.48061479748539],
          [28, 6.426374503640886],
          [29, 7.891864381778447],
          [30, 6.837879179399149],
          [31, 7.716258659531048],
          [32, 9.75364233299447],
          [33, 7.201169154192655],
          [34, 9.630620744220206],
          [35, 11.538477281715668],
          [36, 13.035970513058636],
          [37, 9.503486957660966],
          [38, 10.105314699985755],
          [39, 11.573652620996299],],
        }
      ],
    options: {
        chart: {
            height: 220,
            toolbar: {
              show: false
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true
            }
          },
          colors: [
            "rgba(12, 215, 177, 0.8)", "var(--primary07)"
          ],
          fill: {
            type: 'solid'
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
            position: "top",
            offsetX: 0,
            offsetY: 8,
            markers: {
              width: 10,
              height: 4,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 5,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 0,
              offsetY: 0
            },
          },
          stroke: {
            curve: 'smooth',
            width: [1, 1],
            lineCap: 'round',
          },
          grid: {
            borderColor: "#edeef1",
            strokeDashArray: 2,
          },
          yaxis: {
            axisBorder: {
              show: false,
              color: "rgba(119, 119, 142, 0.05)",
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: false,
              color: "rgba(119, 119, 142, 0.05)",
              width: 6,
              offsetX: 0,
              offsetY: 0,
            },
            labels: {
              show: false,
              formatter: function (y) {
                return y.toFixed(0) + "";
              },
            },
          },
          xaxis: {
            axisBorder: {
              show: false,
              color: "rgba(119, 119, 142, 0.05)",
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: false,
              borderType: "solid",
              color: "rgba(119, 119, 142, 0.05)",
              offsetX: 0,
              offsetY: 0,
            },
            labels: {
              show: false,
              rotate: -90,
            },
          },
          tooltip: {
            enabled: false,
          }
  }
}
// statistics2
export const Statistics2= {
    series: [{
        name: 'Sales',
        data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
      }, {
        name: 'Revenue',
        data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 86]
      }, {
        name: 'Profit',
        data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
      }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 280,
            type: 'line',
            toolbar: {
              show: false,
            },
            background: 'none',
            // fill: "#fff",
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 7,
              left: 0,
              blur: 1,
            //   color: ["var(--primary-color)", "rgb(12, 215, 177)", "rgb(215, 124, 247)"],
              opacity: 0.05,
            },
          },
          grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
          },
          colors: ["var(--primary-color)", "rgb(12, 215, 177)", "rgb(215, 124, 247)"],
        //   background: 'transparent',
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          legend: {
            show: true,
            position: 'top',
            offsetY: 30,
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
              show: false,
              color: 'rgba(119, 119, 142, 0.05)',
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: false,
              borderType: 'solid',
              color: 'rgba(119, 119, 142, 0.05)',
              offsetX: 0,
              offsetY: 0
            },
            labels: {
              show: false,
              rotate: -90,
              offsetX: 0,
              offsetY: 0,
            },
            tooltip: {
              enabled: false,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            }
          },
          tooltip: {
            y: [{
              formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) : e
              }
            }, {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) + "K" : e
              }
            }, {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) + "K" : e
              }
            }],
            theme: "dark",
          }
    }
}

//TOP SELLING CATEGORIES

export const Salescategories= {
    series: [{
        name: 'Electronics',
        data: [80, 50, 30, 40, 100, 20, 40],
      }, {
        name: 'Fashion',
        data: [20, 30, 40, 90, 20, 90, 35],
      }, {
        name: 'Furniture',
        data: [40, 76, 78, 13, 43, 10, 80],
      }],
    options: {
          chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 280,
            type: 'radar',
            toolbar: {
              show: false,
            }
          },
          title: {
            align: 'left',
            style: {
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#8c9097'
            },
          },
          colors: ["var(--primary08)", "rgba(215, 124, 247, 0.85)", "rgba(12, 215, 177, 0.85)"],
          stroke: {
            width: 1
          },
          fill: {
            opacity: 0.05
          },
          markers: {
            size: 0
          },
          legend: {
            show: true,
            fontSize: "12px",
            position: 'top',
            horizontalAlign: 'center',
            fontFamily: "Montserrat",
            fontWeight: 500,
            offsetX: 0,
            offsetY: -8,
            height: 50,
            labels: {
              colors: '#9ba5b7',
            },
            markers: {
              width: 7,
              height: 7,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 7,
              offsetX: 0,
              offsetY: 0
            },
          },
          xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          }
    }
}

