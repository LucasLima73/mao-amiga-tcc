import moment from "moment";
//Basic TImeline Chart

export const Basictimeline ={
    series: [
        {
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-04').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-18').getTime()
                    ]
                }
            ]
        }
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
                
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        colors: ["#546dfe"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        }
    }
}

//Multiple Colored TImeline Chart

export const Multiplecolored ={
    series: [
        {
            data: [
                {
                    x: 'Analysis',
                    y: [
                        new Date('2019-02-27').getTime(),
                        new Date('2019-03-04').getTime()
                    ],
                    fillColor: '#546dfe'
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ],
                    fillColor: '#d77cf7'
                },
                {
                    x: 'Coding',
                    y: [
                        new Date('2019-03-07').getTime(),
                        new Date('2019-03-10').getTime()
                    ],
                    fillColor: '#f4a742'
                },
                {
                    x: 'Testing',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ],
                    fillColor: '#0ca3e7'
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-17').getTime()
                    ],
                    fillColor: '#fe5454'
                }
            ]
        }
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: (val, opts) => {
                const label = opts.w.globals.labels[opts.dataPointIndex];
                const a = moment(val[0]);
                const b = moment(val[1]);
                const diff = b.diff(a, 'days');
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            borderColor: '#f2f5f7',
        }
    }
}

//Multi Series Timeline Chart

export const Advancedmultirange ={
    series: [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-01').getTime(),
                        new Date('2019-03-03').getTime()
                    ],
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-16').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-10').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-20').getTime(),
                        new Date('2019-03-22').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Dan',
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-17').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-09').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-07').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
            ]
        }
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        }
    }
}

//Advanced Timeline Chart

export const Timelinemulti ={
    series: [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-19').getTime()
                    ]
                }
            ]
        }
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: (val, opts) => {
                const label = opts.w.globals.labels[opts.dataPointIndex];
                const a = moment(val[0]);
                const b = moment(val[1]);
                const diff = b.diff(a, 'days');
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
            },
        },
        colors: ["#546dfe", "#d77cf7"], 
        grid: {
            borderColor: '#f2f5f7',
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        legend: {
            position: 'top'
        }
    }
}

//Timeline-Grouped Rows

export const Timelinegrouped1 ={
    series: [
        // George Washington
        {
            name: 'George Washington',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1789, 3, 30).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                },
            ]
        },
        // John Adams
        {
            name: 'John Adams',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1789, 3, 21).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Thomas Jefferson
        {
            name: 'Thomas Jefferson',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1809, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1790, 2, 22).getTime(),
                        new Date(1793, 11, 31).getTime()
                    ]
                }
            ]
        },
        // Aaron Burr
        {
            name: 'Aaron Burr',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1805, 2, 4).getTime()
                    ]
                }
            ]
        },
        // George Clinton
        {
            name: 'George Clinton',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1805, 2, 4).getTime(),
                        new Date(1812, 3, 20).getTime()
                    ]
                }
            ]
        },
        // John Jay
        {
            name: 'John Jay',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1789, 8, 25).getTime(),
                        new Date(1790, 2, 22).getTime()
                    ]
                }
            ]
        },
        // Edmund Randolph
        {
            name: 'Edmund Randolph',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1794, 0, 2).getTime(),
                        new Date(1795, 7, 20).getTime()
                    ]
                }
            ]
        },
        // Timothy Pickering
        {
            name: 'Timothy Pickering',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1795, 7, 20).getTime(),
                        new Date(1800, 4, 12).getTime()
                    ]
                }
            ]
        },
        // Charles Lee
        {
            name: 'Charles Lee',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 4, 13).getTime(),
                        new Date(1800, 5, 5).getTime()
                    ]
                }
            ]
        },
        // John Marshall
        {
            name: 'John Marshall',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 5, 13).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Levi Lincoln
        {
            name: 'Levi Lincoln',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1801, 2, 5).getTime(),
                        new Date(1801, 4, 1).getTime()
                    ]
                }
            ]
        },
        // James Madison
        {
            name: 'James Madison',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1801, 4, 2).getTime(),
                        new Date(1809, 2, 3).getTime()
                    ]
                }
            ]
        },
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                rangeBarGroupRows: true
            }
        },
        colors: [
            "#546dfe", "#d77cf7", "#f4a742", "#fe5454", "#7b76fe",
            "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
            "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        grid: {
            borderColor: '#f2f5f7',
        },
        fill: {
            type: 'solid'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
        }
    }

}
export const Advancedmultirange1 ={
    series: [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-01').getTime(),
                        new Date('2019-03-03').getTime()
                    ],
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-16').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-10').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-20').getTime(),
                        new Date('2019-03-22').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Dan',
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-17').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-09').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-07').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
            ]
        }
    ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        colors: ["#546dfe", "#d77cf7", "#f4a742"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        }
    }
}
//
export const Dumbbell ={
    series: [
        {
          data: [
            {
              x: 'Operations',
              y: [2800, 4500]
            },
            {
              x: 'Customer Success',
              y: [3200, 4100]
            },
            {
              x: 'Engineering',
              y: [2950, 7800]
            },
            {
              x: 'Marketing',
              y: [3000, 4600]
            },
            {
              x: 'Product',
              y: [3500, 4100]
            },
            {
              x: 'Data Science',
              y: [4500, 6500]
            },
            {
              x: 'Sales',
              y: [4100, 5600]
            }
          ]
        }
      ],
    options: {
        chart: {
            height: 320,
            type: 'rangeBar',
            zoom: {
              enabled: false
            },
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
          },
          colors: ["#546dfe", "#d77cf7"],
          plotOptions: {
            bar: {
              horizontal: true,
              isDumbbell: true,
              dumbbellColors: [["#546dfe", "#d77cf7"]]
            }
          },
          title: {
            text: 'Paygap Disparity'
          },
          legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Female', 'Male']
          },
          fill: {
            type: 'gradient',
            gradient: {
              gradientToColors: ['#d77cf7'],
              inverseColors: false,
              stops: [0, 100]
            }
          },
          grid: {
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
          }
    }
}