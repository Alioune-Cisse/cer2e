let myChart = document.getElementById('canvas1').getContext('2d');
let massPopchart = new Chart(myChart, {
	type: 'line',
	data: {
		labels:['Date', 'U1 RMS'],
		datasets:[{
			label:'Population',
			data:[234,567,321,654,321,678,549,543,901],
			backgroundColor: "white"
		}]
	},
	options:{}
})

let myChart2 = document.getElementById('canvas2').getContext('2d');
let massPopchart2 = new Chart(myChart2, {
	type: 'line',
	data: {
		labels:['Date', 'U1 RMS'],
		datasets:[{
			label:'Population',
			data:[234,567,321,654,321,678,549,543,901, 789, 323],
			backgroundColor: "white"
		}]
	},
	options:{}
})

let myChart3 = document.getElementById('canvas3').getContext('2d');
let massPopchart3 = new Chart(myChart3, {
	type: 'line',
	data: {
		labels:['Date', 'U1 RMS'],
		datasets:[{
			label:'Population',
			data:[234,567,321,654,321,678,549,543,901, 789, 323],
			backgroundColor: "white"
		}]
	},
	options:{}
})

let myChart4 = document.getElementById('canvas4').getContext('2d');
// Load the dataset
      

function makeChart(players) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

  var playerLabels = players.map(function(d) {
    return d.Heure;
  });
  var weeksData = players.map(function(d) {
    return +d.W1;
  });

  var chart = new Chart('canvas4', {
    type: "line",
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          	data: weeksData,
			backgroundColor: "white"
        }
      ]
    }
  });
}

// Request data using D3
d3
  .csv("https://isaac.africantine.com/sorties/csv/Courbes%20Puissances_STEP%202.csv")
  .then(makeChart);