

  //// Projectstatistics
export const Projectstatistics= {
    series: [{
        name: 'Projects',
        type: 'line',
        data: [32, 15, 63, 51, 36, 62, 99]
    }, {
        name: 'Tasks',
        type: 'line',
        data: [56, 58, 38, 50, 64, 45, 55]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [48, 29, 50, 69, 20, 59, 52]
    }],
    options: {
          chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 0,
                blur: 3,
                opacity: 0.1
            },
        },
        colors: ["var(--primary-color)", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
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
                rotate: -90
            }
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'Mulish, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        tooltip: {
            shared: true,
            theme: "dark",
        }
  }
}

///   Taskactivity
export const Taskactivity= {
    series: [1754, 634, 878, 470],
   
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 232,
            type: 'donut',
        },
        labels: ["On Going", "Completed", "To do", "Pending"],
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
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
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
                            offsetY: -30
                        },
                        value: {
                            show: true,
                            fontSize: '15px',
                            color: undefined,
                            offsetY: -25,
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
        grid: {
            padding: {
                bottom: -100
            }
        },
        colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)", "rgba(12, 215, 177, 0.8)", "rgba(254, 124, 88, 0.8)"],
  }
}
///   Yearlyrevenue
export const Yearlyrevenue= {
    series: [{
        data: [462, 451, 350, 530, 470, 500, 485],
        name: 'Revenue',
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'bar',
            height: 375,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                barHeight: '40%',
                borderRadius: 2,
                horizontal: true,
                colors: {
                    ranges: [{
                        from: 0,
                        to: 500,
                        color: 'rgba(215, 124, 247, 1)'
                    },
                    {
                        from: 501,
                        to: Infinity,
                        color: "var(--primary-color)"
                    }]
                },
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#ffffff',
        },
        xaxis: {
            categories: [ '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisBorder: {
                show: true,
                color: '#c7cacd',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#c7cacd',
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        },
  }
}