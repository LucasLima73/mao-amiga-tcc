

//// Attendenceoverview
export const Attendenceoverview= {
    series: [{
        name: 'Boys',
        data: [44, 42, 57, 86, 58, 55, 70],
    }, {
        name: 'Girls',
        data: [-34, -22, -37, -56, -21, -35, -60],
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            stacked: true,
            type: 'bar',
            height: 300,
            toolbar: {
                show: false
            }
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        colors: ["var(--primary09)", "rgba(215, 124, 247, 0.9)"],
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
                columnWidth: '25%',
            }
        },
        dataLabels: {
            enabled: false,
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
        yaxis: {
            title: {
                text: 'Attendance',
                style: {
                    color: '	#adb5be',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                    fontWeight: 500,
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
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        tooltip: {
          enabled: true,
          theme: "dark",
        }
  }
}

//// Overallattendence
export const Overallattendence= {
    series: [72, 84],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 240,
            type: "radialBar",
        },
        
        colors: ["var(--primary09)", "rgba(215, 124, 247, 0.9)"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%",
                    background: "#fff",
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#4b9bfa",
                        fontSize: "16px",
                        show: false,
                    },
                    value: {
                        offsetY: 10,
                        color: "#4b9bfa",
                        fontSize: "22px",
                        show: true,
                    },
                    total: {
                        show: true,
                        label: 'Total',
                    }
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
  }
}

//// Earningsreport
export const Earningsreport= {
    series: [{
        name: 'Received Payments',
        type: "column",
        data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Pending Payments',
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            fontFamily: 'Montserrat',
            height: 290,
            type: 'line',
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        grid: {
            borderColor: '#f2f6f7',
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'top'
        },
        colors: ["var(--primary09)", "rgb(215, 124, 247)"],
        stroke: {
            width: [1.5, 1.5],
            curve: ['straight', 'straight'],
            dashArray:[0, 4]
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        plotOptions: {
            bar: {
                columnWidth: "20%",
                borderRadius: 2
            }
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        }
  }
}

export const Classesdata=[
{value:'All Classes', label:'All Classes'},
{value:'Class-X', label:'Class-X'},
{value:'Class-IX', label:'Class-IX'},
]
export const Sectionsdata=[
{value:'All Sections', label:'All Sections'},
{value:'Section-A', label:'Section-A'},
{value:'Section-B', label:'Section-B'},
{value:'Section-C', label:'Section-C'},
]
export const Subjectsdata=[
{value:'Maths', label:'Maths'},
{value:'Physics', label:'Physics'},
{value:'Chemistry', label:'Chemistry'},
]