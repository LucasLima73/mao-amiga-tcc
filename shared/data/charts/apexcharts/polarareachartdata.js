
//Basic Polar Area Chart

export const Basicpolararea = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            type: 'polarArea',
            height: 300,
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        legend: {
            position: 'bottom'
        },
        colors: ["#546dfe", "#d77cf7", "#f4a742", "#0ca3e7", "#fe5454", "#0cd7b1", "#fe7c58", "#0ca3e7", "#7b76fe"],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
      
}

//Polar Area Monochrome Chart

export const Monochromepolar = {
    series: [42, 47, 52, 58, 65],
    options: {
        chart: {
            height: 300,
            type: 'polarArea',
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6,
                color: "#546dfe",
            }
        }
    }
}