

  //LEARNING ACTIVITY
export const Learningactivity= {
    series: [{
        name: 'This Week',
        type: 'column',
        data: [25, 18, 20, 25, 50, 20, 40]
      }, {
        name: 'Last Week',
        type: 'line',
        data: [45, 55, 40, 65, 20, 45, 25]
      }, {
        name: 'Average',
        type: 'line',
        data: [30, 25, 35, 30, 45, 35, 65]
      }],
    options: {
        chart: {
            height: 290,
            type: 'line',
            stacked: false,
            toolbar: {
              show: false
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 5,
              left: 0,
              blur: 3,
              // colors: ["transparent", 'rgba(215, 124, 247, 0.2)', 'var(--primary02)'],
              opacity: 0.5
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          colors: ["var(--primary01)", "rgb(215, 124, 247)", "var(--primary-color)"],
          grid: {
            show: true,
            borderColor: 'rgba(119, 119, 142, 0.1)',
            strokeDashArray: 4,
          },
          stroke: {
            width: [0, 2, 2],
            curve: 'smooth',
          },
          plotOptions: {
            bar: {
              columnWidth: '25%',
              borderRadius: 5,
            }
          },
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          markers: {
            size: 0,
          },
          legend: {
            show: true,
            position: 'top',
            fontFamily: "Montserrat",
            markers: {
              width: 10,
              height: 10,
            }
          },
          xaxis: {
            categories: [
              ['UI/UX Design'],
              ['Programming'],
              ['QA Analyst'],
              ['SEO'],
              ['Digital Marketing'],
              ['Marketing'],
              ['DevOpsPro'],
            ],
            // fontFamily: "Montserrat",
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
            //   width: 6,
              offsetX: 0,
              offsetY: 0
            },
            labels: {
              rotate: -90
            }
          },
          yaxis: {
            title: {
              text: 'Growth',
              style: {
                color: '	#adb5be',
                fontSize: '14px',
                fontFamily: 'Montserrat, sans-serif',
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
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " Hours";
                }
                return y;
      
              }
            }
          }
    }
}
//
  //PAYOUTS
  export const Payouts= {
    series: [6560, 3354],
    options: {
          chart: {
            height: 180,
            type: 'donut',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)"],
          labels: ["Paid", "Unpaid"],
          legend: {
            show: false,
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: '85%',
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
          stroke: {
            width: 0
          },
          dataLabels: {
            enabled: false,
            dropShadow: {
              enabled: false,
            },
          },
    }
}
  //COURSES STATISTICS
  export const Coursesstatistics= {
    series: [{
        name: 'Completed',
        data: [44, 42, 57, 86, 58, 55, 70],
      }, {
        name: 'Ongoing',
        data: [34, 22, 47, 56, 21, 35, 60],
      }
      ],
    options: {
          chart: {
            type: 'bar',
            stacked: true,
            height: 338,
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
          },
          grid: {
            show: true,
            borderColor: 'rgba(119, 119, 142, 0.1)',
            strokeDashArray: 4,
          },
          colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)"],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '25%',
              borderRadius: 4,
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          states: {
            hover: {
              filter: {
                type: 'none'
              }
            }
          }, 
          yaxis: {
            title: {
              style: {
                color: '	#adb5be',
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
            categories: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            //   width: 6,
              offsetX: 0,
              offsetY: 0
            },
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: "top"
          },
    }
}