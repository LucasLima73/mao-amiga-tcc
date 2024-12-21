
// Order summary
export const Ordersummary= {
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
            height: 315,
            type: 'line',
            stacked: false,
            fontFamily: 'Poppins, Arial, sans-serif',
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
                borderRadius: 3
            }
        },
        colors: ["var(--primary-color)", "var(--primary02)", "rgb(215, 124, 247)"]
    }
}