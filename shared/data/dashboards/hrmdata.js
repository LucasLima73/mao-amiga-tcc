

// SUBSCRIPTIONS OVERVIEW
export const Subscrptionoverview= {
    series: [
        {
          name: "Starter",
          data: [44, 55, 41, 42, 22, 43, 21],
        },
        {
          name: "Pro",
          data: [33, 21, 32, 37, 23, 32, 47],
        },
        {
          name: "Premium",
          data: [30, 25, 36, 30, 45, 35, 64],
        },
      ],
    options: {
        chart: {
            type: "bar",
            height: 345,
            fontFamily: "Montserrat, sans-serif",
            foreColor: "#d4d7d9",
            toolbar: {
              show: false,
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            zoom: {
              enabled: true,
            },
          },
          grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
            position: "top",
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            shared: true,
            intersect: false,
          },
          colors: ["var(--primary08)", "var(--primary05)", "var(--primary02)"],
          labels: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 2,
            },
          },
          yaxis: {
            show: false
          },
          xaxis: {
      
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false
            }
          }
    }
}
///WORKING FORMAT
export const Workingformat= {
    series: [44, 55, 67],
    options: {
          chart: {
            height: 240,
            type: 'radialBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                  offsetY: 0
                },
                value: {
                  fontSize: '14px',
                  offsetY: 5
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return '249';
                }
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          },
          grid: {
              padding: {
                  bottom: -10,
                  top: -10
              }
          },
          colors: ["var(--primary-color)", "rgba(215, 124, 247, 1)", "rgba(12, 215, 177, 1)"],
          labels: ['From Office', 'From Home', 'Remote'],
    }
}
///Total Employees
export const Totalemployees= {
    series: [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
      }],
    options: {
          chart: {
            height: 50,
            type: 'area',
            fontFamily: 'Montserrat, sans-serif',
            foreColor: '#5d6162',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: [1.5],
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.5,
              opacityTo: 0.2,
              stops: [0, 60],
              colorStops: [
                [
                  {
                    offset: 0,
                    color: 'var(--primary01)',
                    opacity: 1
                  },
                  {
                    offset: 60,
                    color: 'var(--primary01)',
                    opacity: 1
                  }
                ],
              ]
            },
          },
          title: {
            text: undefined,
          },
          grid: {
            borderColor: 'transparent',
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          colors: ["var(--primary-color)"],
    }
}

//On leave
export const Onleave= {
    series: [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
      }],
    options: {
          chart: {
            height: 50,
            type: 'area',
            fontFamily: 'Montserrat, sans-serif',
            foreColor: '#5d6162',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: [1.5],
          },
          title: {
            text: undefined,
          },
          grid: {
            borderColor: 'transparent',
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          colors: ["rgb(215, 124, 247)"],
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.5,
              opacityTo: 0.2,
              stops: [0, 60],
              colorStops: [
                [
                  {
                    offset: 0,
                    color: 'rgba(215, 124, 247, 0.1)',
                    opacity: 1
                  },
                  {
                    offset: 60,
                    color: 'rgba(215, 124, 247, 0.1)',
                    opacity: 1
                  }
                ],
              ]
            },
          },
    }
}
//New Employees
export const Newemployees= {
    series: [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
      }],
    options: {
          chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 50,
            type: 'area',
            fontFamily: 'Montserrat, sans-serif',
            foreColor: '#5d6162',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            }
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: [1.5],
          },
          title: {
            text: undefined,
          },
          grid: {
            borderColor: 'transparent',
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          colors: ["rgb(12, 215, 177)"],
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.5,
              opacityTo: 0.2,
              stops: [0, 60],
              colorStops: [
                [
                  {
                    offset: 0,
                    color: 'rgba(12, 215, 177, 0.1)',
                    opacity: 1
                  },
                  {
                    offset: 60,
                    color: 'rgba(12, 215, 177, 0.1)',
                    opacity: 1
                  }
                ],
              ]
            },
          },
    }
}
//Resigned employee

export const Resignedemployeee= {
    series: [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
      }],
    options: {
          chart: {
            height: 50,
            type: 'area',
            fontFamily: 'Montserrat, sans-serif',
            foreColor: '#5d6162',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          tooltip: {
            enabled: true,
            theme: "dark",
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: [1.5],
          },
          title: {
            text: undefined,
          },
          grid: {
            borderColor: 'transparent',
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          colors: ["rgb(254, 124, 88)"],
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.5,
              opacityTo: 0.2,
              stops: [0, 60],
              colorStops: [
                [
                  {
                    offset: 0,
                    color: 'rgba(254, 124, 88, 0.1)',
                    opacity: 1
                  },
                  {
                    offset: 60,
                    color: 'rgba(254, 124, 88, 0.1)',
                    opacity: 1
                  }
                ],
              ]
            },
          },
    }
}