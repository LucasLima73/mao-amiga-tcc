

//// Device
export const Device= {
    series: [
        {
            name: "Tablet",
            data: [[10, 35, 80]]
        },
        {
            name: "Mobile",
            data: [[22, 10, 80]]
        },
        {
            name: "Desktop",
            data: [[25, 25, 150]]
        },
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 355,
            type: "bubble",
            toolbar: {
                show: false
            }
        },
        grid: {
            borderColor: '#f3f3f3',
            strokeDashArray: 3
        },
        colors: ["var(--primary-color)", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            fontSize: '13px',
            labels: {
                colors: '#959595',
            },
            markers: {
                width: 10,
                height: 10,
            },
        },
        xaxis: {
            min: 0,
            max: 50,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            max: 50,
            labels: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            theme: "dark",
        }
  }
}

//// Audience 
export const Audience = {
    series: [17546, 11378],
        
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 220,
            type: 'donut',
        },
        labels: ["Male", "Female"],
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
                            fontFamily: "Montserrat, sans-serif",
                            offsetY: -5
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            color: undefined,
                            offsetY: 5,
                            fontWeight: 600,
                            fontFamily: "Montserrat, sans-serif",
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Audience',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#495057',
                        }
                    }
                }
            }
        },
        colors: ["var(--primary-color)", "rgba(215, 124, 247, 1)"],
  }
}

//// Revenueearned 
export const Revenueearned = {
    series: [76, 67, 61, 90],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 180,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['var(--primary-color)', 'rgba(215, 124, 247, 1)', 'rgba(12, 215, 177, 1)', 'rgba(254, 124, 88, 1)'],
        labels: ['Youtube', 'Twitter', 'Facebook', 'Instagram'],
        legend: {
            show: false,
            floating: true,
            fontSize: '14px',
            position: 'left',
            labels: {
                useSeriesColors: true,
            },
            markers: {
                // size: 0
            },
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
        stroke: {
            lineCap: 'round',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
  }
}

//// Profileanalysis 
export const Profileanalysis = {
    series: [
        {
            name: "Followers",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
            name: "Account Reached",
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
            name: "People Engaged",
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        }
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            stacked: true,
            type: "area",
            height: 332, 
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 1,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
            toolbar: {
                show: false,
            }
        },
        grid: {
            borderColor: "#f5f4f4",
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true, // Ensure y-axis grids are shown
                },
            },
        },
        colors: [
            "var(--primary-color)",
            "rgba(215, 124, 247, 1)",
            "rgba(12, 215, 177, 1)",
        ],
        stroke: {
            curve: ["smooth", "smooth", "smooth"],
            width: [2, 2, 2],
        },
        dataLabels: {
            enabled: false,
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
                            color: "var(--primary05)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary05)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "var(--primary05)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(215, 124, 247,0.5)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(215, 124, 247,0.5)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(215, 124, 247,0.5)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(12, 215, 177,0.5)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(12, 215, 177,0.5)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(12, 215, 177,0.5)",
                            opacity: 1
                        }
                    ]
                ]
            }
        },
        legend: {
            show: true,
            position: "top",
        },
        yaxis: {
            title: {
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
            axisBorder: {
                show: true,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "sep",
                "oct",
                "nov",
                "dec",
            ],
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
                rotate: -90,
            },
        },
        tooltip: {
            theme: "dark",
        }
  }
}

//// AUDIENCE AGE METRICS 
export const Audienceage = {
    series: [{
        data: [462, 451, 350, 530, 470, 500, 485],
        name: 'Total Audience',
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
                barHeight: '30%',
                borderRadius: 2,
                horizontal: true,
                distributed: true,
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            borderColor: '#ffffff',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)", "rgba(12, 215, 177, 0.8)", "rgba(254, 124, 88, 0.8)", "rgba(12, 163, 231, 0.8)", "rgba(243, 157, 45, 0.8)", "rgba(254, 84, 84, 0.8)"],
        xaxis: {
            categories: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
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
        tooltip: {
            theme: "dark",
        }
  }
}

///youtube-subscribers
export const Youtubesubscribers = {
    series: [{
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 30,
            width: 100,
            type: 'area',
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
            curve: 'straight',
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
        colors: ["var(--primary-color)"],
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
                      color: 'var(--primary02)',
                      opacity: 1
                    },
                    {
                      offset: 60,
                      color: 'var(--primary02)',
                      opacity: 0.1
                    }
                  ],
                ]
            }
        },
  }
}

///twitter-followers
export const Twitterfollowers = {
    series: [{
        name: 'Value',
        data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 30,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            width: [1.5],
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
        colors: ["rgb(215, 124, 247)"],
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.5,
                opacityTo: 0.2,
                stops: [0, 60]
            }
        }

  }
}

///facebook-followers
export const Facebookfollowers = {
    series: [{
        name: 'Value',
        data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 30,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            width: [1.5],
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
        colors: ["rgb(12, 215, 177)"],
       
  }
}
///instagram-followers
export const Instagramfollowers = {
    series: [{
        name: 'Value',
        data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 30,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            width: [1.5],
        },
        fill: {
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
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
        colors: ["rgb(254, 124, 88)"],
       
  }
}
