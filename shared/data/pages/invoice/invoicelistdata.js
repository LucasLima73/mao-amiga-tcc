



    export const Manageinvoices  =[
    {id:"1", src:'../../../assets/images/faces/11.jpg', name:'Jack Miller', mail:'jackmiller2416@gmail.com', invoiceid:'#SPK12032901', amount:'$512.99', status:'Paid', issueddate:'25,Nov 2024', duedate:'25,Dec 2024', color:'success'},
    {id:"2", src:'../../../assets/images/faces/7.jpg', name:'Suzika Stallone', mail:'suzikastallone3214@gmail.com', invoiceid:'#SPK12032912', amount:'$512.99', status:'Pending', issueddate:'13,Nov 2024', duedate:'13,Dec 2024', color:'warning'},
    {id:"3", src:'../../../assets/images/faces/15.jpg', name:'Roman Killon', mail:'romankillon143@gmail.com', invoiceid:'#SPK12032945', amount:'$2199.49', status:'Overdue', issueddate:'30,Nov 2024', duedate:'30,Dec 2024', color:'danger'},
    {id:"4", src:'../../../assets/images/faces/12.jpg', name:'Charlie Davieson', mail:'charliedavieson@gmail.com', invoiceid:'#SPK12032922', amount:'$1569.99', status:'Paid', issueddate:'18,Nov 2024', duedate:'18,Dec 2024', color:'success'},
    {id:"5", src:'../../../assets/images/faces/4.jpg', name:'Selena Deoyl', mail:'sselenadeoyl114@gmail.com', invoiceid:'#SPK12032932', amount:'$4,873.99', status:'Due By 1 Day', issueddate:'18,Nov 2024', duedate:'18,Dec 2024', color:'primary'},
    {id:"6", src:'../../../assets/images/faces/7.jpg', name:'Kiara Advensh', mail:'kiaraadvensh87@gmail.com', invoiceid:'#SPK12032978', amount:'$1923.99', status:'Paid', issueddate:'02,Nov 2024', duedate:'18,Dec 2024', color:'success'},
    {id:"7", src:'../../../assets/images/faces/9.jpg', name:'Joseph Samurai', mail:'josephsamurai@gmail.com', invoiceid:'#SPK12032919', amount:'$1,623.99', status:'Paid', issueddate:'15,Nov 2024', duedate:'15,Dec 2024', color:'success'},
    {id:"8", src:'../../../assets/images/faces/13.jpg', name:'Kevin Powell', mail:'kevinpowell@gmail.com', invoiceid:'#SPK12032931', amount:'$3,423.99', status:'Pending', issueddate:'21,Nov 2024', duedate:'21,Dec 2024', color:'warning'},
    {id:"9", src:'../../../assets/images/faces/8.jpg', name:'Darla Jung', mail:'darlajung555@gmail.com', invoiceid:'#SPK12032958', amount:'$2,982.99', status:'Paid', issueddate:'15,Oct 2024', duedate:'15,Nov 2024', color:'success'}
    ]

    //INVOICE STATISTICS
    export const Invoicestatistics = {
        series: [{
            name: 'Total Invoices',
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        }, {
            name: 'Paid Invoices',
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        }, {
            name: 'Pending Invoices',
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        }, {
            name: 'Overdue Invoices',
            data: [34, 22, 37, 56, 21, 35, 60, 34, 56, 78, 89, 53],
        }],
        options: {
            chart: {
                type: "bar",
                height: 175,
                stacked: true,
                toolbar: {
                    show: false,
                },
                events: {
                    mounted: (chart) => {
                        chart.windowResizeHandler();
                    }
                },
              },
              plotOptions: {
                  bar: {
                      columnWidth: '25%',
                      borderRadius: 1,
                  }
              },
              grid: {
                  show: false,
                  borderColor: '#f2f6f7',
              },
              dataLabels: {
                enabled: false,
              },
              colors: ["rgba(254, 124, 88,1)", "rgba(12, 215, 177,1)", "rgba(215, 124, 247,1)", "var(--primary-color)"],
              stroke: {
                width: 0,
              },
              legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center', 
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
                labels: {
                  show: true,
                  style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 500,
                    cssClass: "apexcharts-xaxis-label",
                  },
                },
              },
              yaxis: {
                title: {
                  style: {
                    color: "#8c9097",
                  },
                },
                labels: {
                  show: true,
                  style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 500,
                    cssClass: "apexcharts-xaxis-label",
                  },
                },
              },
        }
    }
    