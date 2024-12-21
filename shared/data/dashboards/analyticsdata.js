
  //SESSIONS OVERVIEW
export const Sessionoverview = {
      series: [{
        name: 'Clicks',
        type: "area",
        data: [34, 22, 37, 56, 21, 35, 60, 34, 56, 78, 89, 53],
    }, {
        name: "Actions",
        type: "line",
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34]
    }],
    options: {
          chart: {
            height: 338,
            type: 'line',
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 0,
                blur: 1,
                // color: ["var(--primary-color)", "rgba(215, 124, 247,0.6)"],
                opacity: 0.1,
                
            },
            events: {
              mounted: (chart) => {
                  chart.windowResizeHandler();
              }
          },
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1.5, 1.5],
            curve: "smooth",
            dashArray: [0, 4],
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            height: 40,
            offsetX: 0,
            offsetY: 10,
        },
        colors: ["var(--primary-color)", "rgba(215, 124, 247,0.6)"],
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 500,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 500,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "var(--primary01)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary01)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "var(--primary01)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(215, 124, 247, 0.6)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(215, 124, 247, 0.6)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(215, 124, 247, 0.6)",
                            opacity: 1
                        }
                    ],
                ]
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: "dark",
        },
    }
}
    
//EARNINGS REPORT

export const Earningsreport = {
  series: [{
    name: 'This Week',
    data: [44, 42, 57, 86, 58, 55, 70],
}, {
    name: 'Last Week',
    data: [34, 22, 37, 56, 21, 35, 60],
}],
options: {
    chart: {
      type: 'bar',
      height: 338,
      
      events: {
        mounted: (chart) => {
            chart.windowResizeHandler();
        }
    },
  },
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  stroke: {
      width: 3,
  },
  colors: ["var(--primary-color)", "rgba(215, 124, 247,1)"],
  plotOptions: {
      bar: {
          borderRadius: 2,
          colors: {
              ranges: [{
                  from: -100,
                  to: -46,
                  color: '#ebeff5'
              }, {
                  from: -45,
                  to: 0,
                  color: '#ebeff5'
              }]
          },
          columnWidth: '50%',
      }
  },
  dataLabels: {
      enabled: false,
  },
  legend: {
      show: true,
      position: 'top',
  },
  tooltip: {
      enabled: true,
      theme: "dark",
  },
  yaxis: {
      title: {
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
      labels: {
          formatter: function (y) {
              return y.toFixed(0) + "";
          }
      }
  },
  xaxis: {
      categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      axisBorder: {
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          // width: 6,
          offsetX: 0,
          offsetY: 0
      },
      labels: {
          rotate: -90
      }
  }
}
} 

//SESSIONS DEVICE
export const Sessionsdevice = {
  series: [1754, 1234, 878],
options: {
    chart: {
      height: 200,
      type: 'donut',
      events: {
        mounted: (chart) => {
            chart.windowResizeHandler();
        }
    },
  },
  labels: ["Mobile", "Tablet", "Desktop"],
  dataLabels: {
      enabled: false,
  },

  legend: {
      show: false,
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      width: 0,
      dashArray: 0,
  },
  plotOptions: {
      pie: {
          expandOnClick: false,
          donut: {
              size: '80%',
              background: 'transparent',
              labels: {
                  show: true,
                  name: {
                      show: true,
                      fontSize: '20px',
                      color: '#495057',
                      offsetY: -4
                  },
                  value: {
                      show: true,
                      fontSize: '18px',
                      color: undefined,
                      offsetY: 8,
                      formatter: function (val) {
                          return val + "%"
                      }
                  },
                  total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#495057',
                  }

              }
          }
      }
  },
  colors: ["var(--primary-color)", "rgba(215, 124, 247, 1)", "rgba(12, 163, 231, 1)"],
}
} 

//Impressions

export const Impression = {
  series: [{
    name: 'Value',
    data: [46, 34, 40, 35, 21, 46, 37, 22, 34, 34, 40, 44, 28, 23, 18, 15, 18, 16, 17, 12, 14]
}],
options: {
    chart: {
      events: {
        mounted: (chart) => {
            chart.windowResizeHandler();
        }
    },
      type: 'area',
      height: 50,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 0,
          blur: 1,
          color: 'var(--primary-color)',
          opacity: 0.15
      }
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
              [
                  {
                      offset: 0,
                      color: "var(--primary01)",
                      opacity: 1
                  },
                  {
                      offset: 75,
                      color: "var(--primary01)",
                      opacity: 1
                  },
                  {
                      offset: 100,
                      color: "var(--primary01)",
                      opacity: 1
                  }
              ]
          ]
      }
  },
  
  yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
    },
  },
  xaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ["var(--primary-color)"],
  tooltip: {
      enabled: false,
  }
}
} 
// New Subscriber
export const Newsubscriber = {
  series: [{
    name: 'Value',
    data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46]
}],
options: {
    chart: {
      type: 'line',
      height: 50,
      sparkline: {
          enabled: true
      },
      events: {
        mounted: (chart) => {
            chart.windowResizeHandler();
        }
    },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 0,
          blur: 1,
          color: 'rgb(243, 157, 45)',
          opacity: 0.1
      }
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
              [
                  {
                      offset: 0,
                      color: "rgba(243, 157, 45, 1)",
                      opacity: 1
                  },
                  {
                      offset: 75,
                      color: "rgba(243, 157, 45, 1)",
                      opacity: 1
                  },
                  {
                      offset: 100,
                      color: "rgba(243, 157, 45, 1)",
                      opacity: 1
                  }
              ]
          ]
      }
  },

  yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
    },
  },
  xaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ["rgb(243, 157, 45)"],
  tooltip: {
      enabled: false,
  }
}
} 

//VISITORS BY BROWSER
export const Visitors = {
  series: [{
    name: 'Total Visitors',
    data: [25, 98, 56, 22, 75, 19, 86],
}],
options: {
  chart: {
    height: 200,
    type: 'radar',
    toolbar: {
        show: false,
    },
    offsetY: 20,
    events: {
      mounted: (chart) => {
          chart.windowResizeHandler();
      }
  },
},

labels: ['Chrome', ' Firefox', 'Edge', 'Safari', 'Opera', 'Brave', 'Vivaldi'],
plotOptions: {
    radar: {
        size: 75,
        polygons: {
            fill: {
                colors: ['var(--primary005)', 'var(--primary005)']
            },
        }
    }
},
colors: ["#d77cf7"],
stroke: {
    width: 2,
    curve: 'straight',
},
markers: {
    size: 4,
    strokeColors: "#d77cf7",
    colors: ['#fff'],
    strokeWidth: 1,
},
}
} 