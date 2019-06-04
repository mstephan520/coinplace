var ctx = document.getElementById("canvas").getContext("2d");
var lineChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            fill: false,
            borderColor: '#1652F0',
            pointRadius: 0,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            pointBackgroundColor: '#ffffff',
            pointHoverBorderWidth: 3,
            /*  pointHoverRadius: 4,
             pointBorderWidth: 0, */

            // label: 'test 2',
            data: [{ x: 5, y: 8470.37 },
            { x: 10, y: 8477.99 },
            { x: 20, y: 8466.79 },
            { x: 30, y: 8478.35 },
            { x: 40, y: 8482.88 },
            { x: 50, y: 8480.23 },
            { x: 60, y: 8473.96 },
            { x: 70, y: 8482.49 },
            { x: 80, y: 8478.76 },
            { x: 90, y: 8463.18 },
            { x: 100, y: 8454.96 }]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Ethereum'
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: 'rgb(21, 35, 44)',
            titleFontSize: 16,
            displayColors: false,
            mode: 'index',
            titleAlign: 'center',
            bodyAlign: 'center',
            intersect: false,
            yAlign: 'bottom',
            xAlign: 'center',
            caretPadding: 13,
            // yPadding: 20,
            /* intersect: true, */
        },
        pointRadius: 10,
        hover: {
            mode: 'index',
            intersect: false
        },
        /* responsive: true, */
    	/* tooltips: {mode: "index",intersect: false},
    	      hover: {intersect:true, mode:"nearest"}, */
        /*         tooltips: {
                  callbacks: {
                    title(datasets) {
                      var time = new Date(datasets[0].xLabel * 1000);
                      return (time.getMonth() + 1) + '/' + time.getDate() + ' ' + time.getHours();
                    }
                  }
                }, */
        scales: {
            xAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'bottom',
                    ticks: {
                        display: false,
                        maxTicksLimit: 4,
                        suggestedMin: 10

                        /* source: 'auto' */
                        /*             callback(value) {
                                      var time = new Date(value * 1000);
                                      return (time.getMonth() + 1) + '/' + time.getDate() + ' ' + time.getHours();
                                    } */
                    },
                    gridLines: { display: false, drawBorder: false }
                }
            ],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: { display: false }
            }]
        }
    }
});

Chart.defaults.global.tooltips.titleAlign = 'center';
Chart.defaults.global.tooltips.bodyAlign = 'center';