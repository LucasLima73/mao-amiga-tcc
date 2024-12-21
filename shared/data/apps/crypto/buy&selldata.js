
  
export const SellStatistics = {
    series: [{
        name: "Buy",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
    }, {
        name: "Sell",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    options: {
        chart: {
            events: {
                mounted: (chart) => {
                    chart.windowResizeHandler();
                }
                },
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "35%",
                borderRadius: 2
            }
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
            width: [1, 1],
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        colors: ["rgb(84, 109, 254)", "rgba(215, 124, 247, 1)"],
        yaxis: {
            title: {
                text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
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

/** Selectdata**/
export const Data1 = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'XRP', label: 'XRP' },
    { value: 'DASH', label: 'DASH' },
    { value: 'NEO', label: 'NEO' },
    { value: 'LTC', label: 'LTC' },
    { value: 'BSD', label: 'BSD' }
];
export const Data2 = [
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'AUD', label: 'AUD' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BRL', label: 'BRL' }
];
