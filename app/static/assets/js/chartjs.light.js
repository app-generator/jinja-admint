$.exists = function(selector) {
  return $(selector).length > 0;
};

/* Line chart Variable */
var lineChartToolTips = {
  displayColors: false,
  mode: "nearest",
  intersect: false,
  position: "nearest",
  xPadding: 8,
  yPadding: 8,
  caretPadding: 8,
  backgroundColor: "#fff",
  cornerRadius: 4,
  titleFontSize: 13,
  titleFontStyle: "normal",
  bodyFontSize: 13,
  titleFontColor: "#222",
  bodyFontColor: "rgba(0, 0, 0, 0.7)",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 0.1)"
}
var scalesYaxes = [{
  ticks: {
    fontSize: 14,
    fontColor: "rgba(0, 0, 0, 0.4)",
    padding: 15,
    beginAtZero: true,
    autoSkip: false,
    maxTicksLimit: 4
  },
  gridLines: {
    color: "rgba(0, 0, 0, 0.1)",
    zeroLineWidth: 1,
    zeroLineColor: "transparent",
    drawBorder: false,
    tickMarkLength: 0
  }
}]
var scalesXaxes = [{
  ticks: {
    fontSize: 14,
    fontColor: "rgba(0, 0, 0, 0.4)",
    padding: 5,
    beginAtZero: true,
    autoSkip: false,
    maxTicksLimit: 4
  },
  gridLines: {
    display: false
  }
}];
/* End Line chart Variable */



// Type4
if ($.exists("#yoo-chart5-type4")) {
  var ctx5 = document.querySelector("#yoo-chart5-type4");
  var myChart5 = new Chart(ctx5, {
    type: "line",
    data: {
      labels: [
        "3 Dec",
        "28 Dec",
        "3 Jan",
        "8 Jan",
        "13 Jan",
        "20 Jan",
        "25 Jan"
      ],
      datasets: [{
          label: "Orders",
          data: ["0", "15", "25", "10", "5", "20", "0"],
          backgroundColor: "rgba(0, 122, 255, 0.1)",
          borderColor: "#007aff",
          borderWidth: 3,
          pointBackgroundColor: "#fff",
          pointDotRadius: 10
        },
        {
          label: "Orders",
          data: ["15", "30", "15", "30", "15", "25", "20"],
          backgroundColor: "rgba(52, 199, 89, 0.1)",
          borderColor: "#34c759",
          borderWidth: 3,
          pointBackgroundColor: "#fff",
          pointDotRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      tooltips: lineChartToolTips,
      scales: {
        yAxes: [{
          position: "left",
          ticks: {
            fontSize: 14,
            fontColor: "rgba(0, 0, 0, 0.4)",
            padding: 15,
            autoSkip: false,
            maxTicksLimit: 6,
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 40
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.1)",
            zeroLineWidth: 0,
            zeroLineColor: "transparent",
            drawBorder: false,
            tickMarkLength: 0
          }
        }],
        xAxes: scalesXaxes
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  });
}

/* Start Line Chart3 Initialize */
if ($.exists("#yoo-chart3")) {
  var ctx3 = document.querySelector("#yoo-chart3").getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "pie",
    data: {
      labels: ["Desktop", "Mobile", "Tablet", "Miscellaneous"],
      datasets: [{
        backgroundColor: ["#ffcc00", "#ff9500", "#ff3b30", "#5856d6"],
        hoverBackgroundColor: ["#ffcc00", "#ff9500", "#ff3b30", "#5856d6"],
        data: [60, 15, 10, 15],
        borderWidth: 0,
        hoverBorderColor: ["#ffcc00", "#ff9500", "#ff3b30", "#5856d6"],
        hoverBorderWidth: 8
      }]
    },
    options: {
      cutoutPercentage: 80,
      legend: false,
      tooltips: lineChartToolTips
    }
  });
}
