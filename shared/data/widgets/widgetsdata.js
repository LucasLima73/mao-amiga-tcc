

//Number Of Sales
export const Numberofsales = {
    series: [{
        name: 'Value',
        data: [14, 38, 26, 44, 20, 65, 35, 40]
    }],
    options: {
        chart: {
            type: 'area',
            height: 60,
            width: 120,
            sparkline: {
                enabled: true
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "var(--primary-color)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(215, 124, 247)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(215, 124, 247)",
                            opacity: 0.03
                        },
                        {
                            offset: 90,
                            color: "var(--primary-color)",
                            opacity: 0.03
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['var(--primary-color)'],
    }
}
//Profit By Sale
export const Profitbysales = {
    series: [{
        name: 'Value',
        data: [14, 38, 26, 44, 20, 65, 35, 40]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 60,
            width: 120,
            sparkline: {
                enabled: true
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(244, 167, 66)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(187, 164, 44)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(244, 167, 66)",
                            opacity: 0.03
                        },
                        {
                            offset: 90,
                            color: "rgb(187, 164, 44)",
                            opacity: 0.03
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['var(--primary-color)'],
    }
}

//Total Revenue
export const Totalrevenue = {
    series: [{
        name: 'Value',
        data: [14, 38, 26, 44, 20, 65, 35, 40]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 60,
            width: 120,
            sparkline: {
                enabled: true
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(12, 215, 177)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(0, 142, 203)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(12, 215, 177)",
                            opacity: 0.03
                        },
                        {
                            offset: 90,
                            color: "rgb(0, 142, 203)",
                            opacity: 0.03
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['var(--primary-color)'],
    }
}

//Total Customers
export const Totalcustomers = {
    series: [{
        name: 'Value',
        data: [14, 38, 26, 44, 20, 65, 35, 40]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'area',
            height: 60,
            width: 120,
            sparkline: {
                enabled: true
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(254, 124, 88)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(245, 97, 130)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(254, 124, 88)",
                            opacity: 0.03
                        },
                        {
                            offset: 90,
                            color: "rgb(245, 97, 130)",
                            opacity: 0.03
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['var(--primary-color)'],
    }
}
//SALES REVENUE1

export const Salesrevenue = {
    series: [
        {
        name: 'sales',
        type: 'column',
        data: [200, 170, 250, 240, 220, 280, 170, 155, 130, 242],
    }, 
    {
        name: 'revenue',
        type: 'line',
        data: [13, 15, 25, 17, 19, 22, 11, 10, 9, 22],

    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 320,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            background: {
                enabled: false,
                foreColor: '#fff',
            },
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -10,
            style: {
                fontSize: '12px',
                colors: ["#8c9097"]
            }
        },
        stroke: {
            curve: 'smooth',
            width: [0, 2],
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 3,
            }
        },

        colors: ["rgb(215, 124, 247)", "rgb(12, 215, 177)"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0,
                inverseColors: false,
                gradientToColors: ["var(--primary-color)"],
                opacityFrom: [0.9, 1],
                opacityTo: [0.9, 1],
                stops: [0, 90, 100]
            }
        },
        labels: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0'],
        yaxis: [{

        }, {
            opposite: true,
        }],
    }
}

//SALES REVENUE2
export const Salesrevenue1 = {
    series: [{
        name: "Sales Revenue",
        data: [20, 15, 38, 20, 24, 19, 53, 19, 21, 18, 36, 18, 60, 20]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 320,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 2,
                left: 0,
                blur: 6,
                color: 'rgb(244, 167, 66)',
                opacity: 0.8
            },
            toolbar: { show: false }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            position: "top",
            offsetX: 0,
            offsetY: 8,
            markers: {
                width: 5,
                height: 5,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        grid: {
            borderColor: '#f5f4f4',
            strokeDashArray: 3
        },
        colors: ["rgb(244, 167, 66)"],
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        xaxis: {
            categories: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', '1.1', '1.2', '1.3', '1.4'],
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

//SALES REVENUE3

export const Salesrevenue2 = {
    series: [
        {
            name: "Sales",
            data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
        },
        {
            name: "Refunds",
            data: [-8, -40, -15, -32, -45, -30, -20, -35, -28, -43, -30, -40],
        }
    ],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: "line",
            height: 300,
            toolbar: {
                show: false
            },
        },
        colors: [
            "var(--primary-color)",
            "rgb(215, 124, 247)",
        ],
        markers: {
            size: 3,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
            offsetX: 0,
            offsetY: 8,
            markers: {
                width: 5,
                height: 5,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
        stroke: {
            curve: 'stepline',
            width: [2, 2],
            lineCap: 'round',
        },
        grid: {
            borderColor: "#edeef1",
            strokeDashArray: 2,
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: "rgba(215, 124, 247, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                color: "rgba(215, 124, 247, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            //labels: {
            //    formatter: function (y) {
            //        return y.toFixed(0) + "";
            //    },
            //},
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
                color: "rgba(215, 124, 247, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: "solid",
                color: "rgba(215, 124, 247, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
    }
}

// ACTIVE CUSTOMERS
export const Activecustomers = {
    series: [90, 80],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            height: 250,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                hollow: {
                    margin: 10,
                    size: '70%',
                },
                dataLabels: {
                    name: {
                        fontSize: '25px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return "249"
                        }
                    }
                }
            }
        },
        stroke: {
            dashArray: 4
        },
        colors: [
            "var(--primary-color)",
            "rgb(215, 124, 247)",
        ],
        labels: ['Female', 'Male'],
    }
}

// TOP SALES
export const Widgetstopsales = {
    series: [{
        name: 'Sales',
        data: [0, 44, 42, 57, 86, 86, 57, 42, 44, 34, 64, 55],
    },
    {
        name: 'Revenue',
        data: [0, 34, 22, 37, 56, 56, 37, 22, 34, 25, 34, 42],
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
            type: 'area',
            height: 330,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: false,
            borderColor: '#f2f6f7',
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
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
                            color: "rgba(215, 124, 247,0.05)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(215, 124, 247,0.05)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(215, 124, 247,0.05)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "var(--primary005)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary005)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "var(--primary005)",
                            opacity: 1
                        }
                    ]
                ]
            }
        },
        stroke: {
            curve: 'smooth',
            width: [1.5, 1.5],
            lineCap: 'round',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "bottom",
            offsetX: 0,
            offsetY: 8,
            markers: {
                width: 8,
                height: 8,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
        yaxis: {
            labels: {
                show: true,
            }
        },
        xaxis: {
            categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
        }
    }
}
//TOTAL SALES

export const Totalsales = {
    series: [{
        name: 'Value',
        data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'line',
            height: 40,
            width: 200,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                left: 0,
                blur: 3,
                color: 'var(--primary-color)',
                opacity: 0.3
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "var(--primary-color)",
                            opacity: 0.01
                        },
                        {
                            offset: 90,
                            color: "var(--primary-color)",
                            opacity: 0.8
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['var(--primary-color)'],
    }
}
//Revenue
export const Revenue = {
    series: [{
        name: 'Value',
        data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'line',
            height: 40,
            width: 200,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                left: 0,
                blur: 3,
                color: 'rgb(215, 124, 247)',
                opacity: 0.3
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(190, 114, 230)",
                            opacity: 0.01
                        },
                        {
                            offset: 90,
                            color: "rgb(190, 114, 230)",
                            opacity: 0.8
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['rgb(215, 124, 247)'],
    }
}

//Customers

export const Customers = {
    series: [{
        name: 'Value',
        data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'line',
            height: 40,
            width: 200,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                left: 0,
                blur: 3,
                color: 'rgb(12, 215, 177)',
                opacity: 0.3
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(12, 215, 177)",
                            opacity: 0.01
                        },
                        {
                            offset: 90,
                            color: "rgb(12, 215, 177)",
                            opacity: 0.8
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
       
        colors: ['rgb(12, 215, 177)'],
    }
}

//Profit

export const Profit = {
    series: [{
        name: 'Value',
        data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'line',
            height: 40,
            width: 200,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                left: 0,
                blur: 3,
                color: 'rgb(254, 124, 88)',
                opacity: 0.3
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(254, 124, 88)",
                            opacity: 0.01
                        },
                        {
                            offset: 90,
                            color: "rgb(254, 124, 88)",
                            opacity: 0.8
                        }
                    ]
                ]
            }
        },
        series: [{
            name: 'Value',
            data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
        }],
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['rgb(254, 124, 88)'],
    }
}

//Income

export const Income = {
    series: [{
        name: 'Value',
        data: [14, 20, 15, 25, 22, 35, 15, 30, 25]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            },
            type: 'line',
            height: 40,
            width: 200,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                left: 0,
                blur: 3,
                color: 'rgb(12, 163, 231)',
                opacity: 0.3
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(12, 163, 231)",
                            opacity: 0.01
                        },
                        {
                            offset: 90,
                            color: "rgb(12, 163, 231)",
                            opacity: 0.8
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
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        colors: ['rgb(12, 163, 231)'],
    }
}

//totalsaleschart

export const Totalsaleschart = {
    series: [
        {
            name: "This Week",
            data: [44, 42, 57, 86, 57, 42, 44],
        },
        {
            name: "Last Week",
            data: [-34, -22, -37, -56, -37, -22, -34],
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
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
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
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        }, 
        tooltip: {
            enabled: false
        }
    }
}

//Totalrevenuechart

export const Totalrevenuechart = {
    series: [
        {
            name: "This Week",
            data: [86, 57, 44, 42, 44, 57, 86],
        },
        {
            name: "Last Week",
            data: [-56, -37, -34, -22, -34, -37, -56],
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
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
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
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        }, 
        tooltip: {
            enabled: false
        }
    }
}

//Totalcustomerschart

export const Totalcustomerschart = {
    series: [
        {
            name: "This Week",
            data: [86, 57, 45, 40, 34, 30, 25],
        },
        {
            name: "Last Week",
            data: [-56, -37, -30, -24, -20, -18, -12],
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
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
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
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        }, 
        tooltip: {
            enabled: false
        }
    }
}

//Totalprofitchart

export const Totalprofitchart = {
    series: [
        {
            name: "This Week",
            data: [44, 42, 57, 86, 57, 42, 44],
        },
        {
            name: "Last Week",
            data: [-34, -22, -37, -56, -37, -22, -34],
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
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
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
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        }, 
        tooltip: {
            enabled: false
        }
    }
}

//Avaragechart

export const Avaragechart = {
    series: [85],
    labels: ["Total Sales"],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
            }, 
            height: 275,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '68%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: 'var(--text-muted)',
                        fontSize: '14px',
                        fontWeight: '400'
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val).toString(); // Convert the integer to a string
                            // Or use template literals if you prefer
                            // return `${parseInt(val)}`;
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        colors: ["rgb(215, 124, 247)", "var(--primary-color)"],
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            width: 0,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['var(--primary-color)'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
    }
}