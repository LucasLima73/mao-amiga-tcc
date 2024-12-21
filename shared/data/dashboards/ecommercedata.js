

// AUDIENCE REPORT
export const Audiencereport= {
    series: [
        {
            name: "Male",
            data: [29, 18, 26, 30, 23, 28, 23, 34]
        },
        {
            name: "Female",
            data: [23, 15, 21, 23, 18, 22, 18, 28]
        },
        {
            name: "Others",
            data: [18, 10, 15, 18, 12, 16, 12, 20]
        }
    ],
    options: {
        chart: {
            height: 263,
            type: 'area',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 0,
                blur: 10,
                opacity: 0.2
            },
            sparkline: {
                enabled: true,
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
        },
        colors: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [0, 0, 0],
            curve: 'smooth'
        },
        title: {
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
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
                            color: "rgba(255, 255, 255, 0.1)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(255, 255, 255, 0.1)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(255, 255, 255, 0.1)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(255, 255, 255, 0.2)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(255, 255, 255, 0.2)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(255, 255, 255, 0.2)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(255, 255, 255, 0.3)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(255, 255, 255, 0.3)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(255, 255, 255, 0.3)",
                            opacity: 1
                        }
                    ],
                ]
            }
        },
        grid: {
            borderColor: 'transparent',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        xaxis: {
            title: {
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: -3,
                offsetY: -20,
            },
        },
        yaxis: {
            title: {
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: false,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
                offsetX: 15,
                offsetY: 0,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: 100
        },
        tooltip: {
            theme: "dark",
        },
    }
}
//ORDERS STATUS

export const Orderstatus= {
    series: [{
        name: "Paid",
        type: "column",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }, {
        name: "Unpaid",
        type: "area",
        data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
    }, {
        name: "Refunded",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    options: {
        chart: {
            height: 294,
            type: "line",
            stacked: !1,
            toolbar: {
                show: !1
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
        },
        stroke: {
            width: [0, 0, 1.5],
            dashArray: [0, 0, 4],
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        xaxis: {
            axisBorder: {
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                borderRadius: 3
            }
        },
        legend: {
            position: "top"
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
            size: 0
        },
        colors: ['var(--primary-color)', "var(--primary005)",'rgb(215, 124, 247)'],
        tooltip: {
            theme: "dark",
        },
    }
}
////RECENT ORDERS

//export const Recentorders= {
//    series: [1754, 1234, 878],
//    options: {
//        chart: {
//            height: 135,
//            type: 'donut',
//            events: {
//                mounted: (chart) => {
//                    chart.windowResizeHandler();
//                }
//            },
//        },
//        labels: ["Delivered", "Cancelled", "Pending"],
//        dataLabels: {
//            enabled: false,
//        },
//        legend: {
//            show: false,
//        },
//        stroke: {
//            show: true,
//            curve: 'smooth',
//            lineCap: 'round',
//            width: 0,
//            dashArray: 0,
//        },
//        plotOptions: {
//            pie: {
//                expandOnClick: false,
//                donut: {
//                    size: '80%',
//                    background: 'transparent',
//                    labels: {
//                        show: true,
//                        name: {
//                            show: true,
//                            fontSize: '20px',
//                            color: '#495057',
//                            offsetY: 0
//                        },
//                        value: {
//                            show: true,
//                            fontSize: '14px',
//                            color: undefined,
//                            offsetY: 4,
//                            fontWeight: 500,
//                            formatter: function (val) {
//                                return val + "%"
//                            }
//                        },
//                        total: {
//                            show: true,
//                            showAlways: true,
//                            label: 'Total',
//                            fontSize: '18px',
//                            fontWeight: 600,
//                            color: '#495057',
//                        }
    
//                    }
//                }
//            }
//        },
//        colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)", "rgba(12, 163, 231, 0.8)"],
//    }
//}
export const Recentorders= {
    series: [1754, 1234, 878],

    options: {
        chart: {
            //height: 150,
            type: 'donut',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
        },
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
        labels: ["Delivered", "Cancelled", "Pending"],
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
                            offsetY: 0
                        },
                        value: {
                            show: true,
                            fontSize: '14px',
                            color: undefined,
                            offsetY: 4,
                            fontWeight: 500,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#495057',
                        }

                    }
                }
            }
        },
        colors: ["var(--primary08)", "rgba(215, 124, 247, 0.8)", "rgba(12, 163, 231, 0.8)"],
    }
}
//TOP SELLING CATEGORIES

export const Topcategories= {
    series: [{
        name: 'Sales',
        data: [650, 770, 840, 890, 1100, 1380]
    }],
    options: {
        chart: {
            height: 305,
            type: 'bar', 
            events: {
                click: function (chart, w, e) {
                },
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['var(--primary-color)', 'rgba(215, 124, 247, 1)', 'rgba(12, 215, 177, 1)', 'rgba(254, 124, 88, 1)', 'rgba(12, 163, 231, 1)', 'rgba(243, 157, 45, 1)'],
        plotOptions: {
            bar: {
                barHeight: '20%',
                distributed: true,
                horizontal: true,
                borderRadius: 1,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        xaxis: {
            categories: [
                ['Electronics'],
                ['Fashion'],
                ['Kitchen Appliances'],
                ['Beauty Products'],
                ['Books'],
                ['Toys and Games'],
            ],
            labels: {
                show: false,
                style: {
                    fontSize: '12px'
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 500,
                    cssClass: 'apexcharts-yaxis-label',
                },
                offsetY: 8,
            }
        },
        tooltip: {
            enabled: true,
            shared: false,
            intersect: true,
            x: {
                show: false
            },
            theme: "dark",
        },
    }
}