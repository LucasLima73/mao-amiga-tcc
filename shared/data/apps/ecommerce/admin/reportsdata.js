

// Order summary
export const Reportsordersummary= {
    series: [{
        name: 'Total Orders',
        type: 'column',
        data: [23, 17, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
    }, {
        name: 'Delivered Orders',
        type: 'column',
        data: [17, 12, 18, 23, 10, 17, 25, 18, 35, 18, 37, 28]
    }, {
        name: 'Cancelled Orders',
        type: 'line',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            toolbar: {
                show: false
            },
            height: 280,
            type: 'line',
            stacked: false,
            fontFamily: 'Montserrat, Arial, sans-serif',
        },
        grid: {
            borderColor: '#f5f4f4',
            strokeDashArray: 3
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: undefined,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: [
            {
                show: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                    color: '#4eb6d0'
                },
                labels: {
                    style: {
                        colors: '#4eb6d0',
                    }
                },
                title: {
                    text: undefined,
                },
            },
            {
                seriesName: 'Projects',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: undefined,
                },
            },
            {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                title: {
                    text: undefined,
                }
            },
        ],
        legend: {
            show: true,
            position: 'top',
            offsetX: 40,
            fontSize: '13px',
            fontWeight: 'normal',
            labels: {
                colors: '#acb1b1',
            },
            markers: {
                width: 10,
                height: 10,
            },
        },
        stroke: {
            width: [2, 2, 1.5],
            curve: 'smooth',
            lineCap: 'round',
            dashArray: [0, 0, 0],
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 2
            }
        },
        colors: ["var(--primary-color)", "var(--primary02)", "rgb(215, 124, 247)"]
    }
}
//PRODUCTS OVERVIEW

export const Productsoverview= {
    series: [
        {
            type: 'area',
            name: 'Total Products',
            data: [
                {
                    x: 'Jan',
                    y: 100
                },
                {
                    x: 'Feb',
                    y: 210
                },
                {
                    x: 'Mar',
                    y: 180
                },
                {
                    x: 'Apr',
                    y: 454
                },
                {
                    x: 'May',
                    y: 230
                },
                {
                    x: 'Jun',
                    y: 320
                },
                {
                    x: 'Jul',
                    y: 656
                },
                {
                    x: 'Aug',
                    y: 830
                },
                {
                    x: 'Sep',
                    y: 350
                },
                {
                    x: 'Oct',
                    y: 350
                },
                {
                    x: 'Nov',
                    y: 210
                },
                {
                    x: 'Dec',
                    y: 410
                }
            ]
        },
        {
            type: 'line',
            name: 'Published',
            // chart: {
            //     dropShadow: {
            //         enabled: true,
            //         enabledOnSeries: undefined,
            //         top: 5,
            //         left: 0,
            //         blur: 3,
            //         color: '#000',
            //         opacity: 0.1
            //     }
            // },
            data: [
                {
                    x: 'Jan',
                    y: 180
                },
                {
                    x: 'Feb',
                    y: 620
                },
                {
                    x: 'Mar',
                    y: 476
                },
                {
                    x: 'Apr',
                    y: 220
                },
                {
                    x: 'May',
                    y: 520
                },
                {
                    x: 'Jun',
                    y: 780
                },
                {
                    x: 'Jul',
                    y: 435
                },
                {
                    x: 'Aug',
                    y: 515
                },
                {
                    x: 'Sep',
                    y: 738
                },
                {
                    x: 'Oct',
                    y: 454
                },
                {
                    x: 'Nov',
                    y: 525
                },
                {
                    x: 'Dec',
                    y: 230
                }
            ]
        },
        {
            type: 'line',
            name: 'Unpublished',
            // chart: {
            //     dropShadow: {
            //         enabled: true,
            //         enabledOnSeries: undefined,
            //         top: 5,
            //         left: 0,
            //         blur: 3,
            //         color: '#000',
            //         opacity: 0.1
            //     }
            // },
            data: [
                {
                    x: 'Jan',
                    y: 200
                },
                {
                    x: 'Feb',
                    y: 530
                },
                {
                    x: 'Mar',
                    y: 110
                },
                {
                    x: 'Apr',
                    y: 130
                },
                {
                    x: 'May',
                    y: 480
                },
                {
                    x: 'Jun',
                    y: 520
                },
                {
                    x: 'Jul',
                    y: 780
                },
                {
                    x: 'Aug',
                    y: 435
                },
                {
                    x: 'Sep',
                    y: 475
                },
                {
                    x: 'Oct',
                    y: 738
                },
                {
                    x: 'Nov',
                    y: 454
                },
                {
                    x: 'Dec',
                    y: 480
                }
            ]
        }
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 350,
            animations: {
                speed: 500
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 8,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        colors: ["rgba(var(--primary-rgb), 0.05)", "rgba(215, 124, 247, 0.85)", "rgb(12, 215, 177)"],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        stroke: {
            curve: 'smooth',
            width: [0, 2, 1],
            dashArray: [0, 5, 0],
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: true,
            customLegendItems: ['Total Products', 'Published', 'Unpublished'],
            inverseOrder: true
        },
        title: {
            align: 'left',
            style: {
                fontSize: '.8125rem',
                fontWeight: 'semibold',
                color: '#8c9097'
            },
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        }
    }
}

//MOST USED BROWSERS

export const Browsers= {
    series: [1754, 544, 682, 263],
   
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 210,
            type: 'donut',
        },
        labels: ["Chrome", "Firefox", "Safari", "Opera"],
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
                    size: '70%',
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
        colors: ["var(--primary-color)", "rgba(215, 124, 247)", "rgb(12, 215, 177)", "rgb(254, 124, 88)"],
    }
}
//TOTAL VENDORS

export const Totalvendors= {
    series: [1754, 1234],
   
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 230,
            type: 'donut',
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#525050',
                opacity: 0.1
            }
        },
        labels: ["Inactive", "Active"],
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
    
        colors: ["var(--primary-color)", "rgb(215, 124, 247)"],
    }
}

//MONTHLY SALES REPORT

export const Monthlysales= {
    series: [{
        name: "Sales",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
    }],
    options: {
    chart: {
        events: {
            mounted: (chart) => {
                chart.windowResizeHandler();
            }
        },
        height: 290,
        type: 'line',
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
        toolbar: { show: false }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        dashArray: [0, 5],
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["var(--primary-color)"],
    yaxis: {
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "";
            }
        }
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
            rotate: -90
        }
    }
    }
}
//Totalcustomers

export const Totalcustomers= {
    series: [576, 876],
   
    options: {
    chart: {
        events: {
            mounted: (chart) => {
                chart.windowResizeHandler();
            }
        },
        height: 230,
        type: 'donut',
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#525050',
            opacity: 0.1
        }
    },
     labels: ["Inactive", "Active"],
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

    colors: ["var(--primary-color)", "rgb(215, 124, 247)"],
    }
}