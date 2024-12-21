
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//  Chartjs Line Chart

export const Option1 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			grid: {
				color: "rgba(165, 178, 189, 0.5)"
			}
		},
		y: { 
			grid: {
				color: "rgba(165, 178, 189, 0.5)"
			}
		}
	},
	cutout: 90,
};
export const Data1 = {
	type: "line",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
	],
	datasets: [{
		label: "My First dataset",
		backgroundColor: "rgb(84, 109, 254)",
		borderColor: "rgb(84, 109, 254)",
		data: [0, 10, 5, 2, 20, 30, 45],
	}]
};

//  Chartjs Bar Chart

export const Option2 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    },
    x:{
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    }
  }
};
export const Data2 = {
  type: 'bar',
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(84, 109, 254, 0.2)',
      'rgba(215, 124, 247, 0.2)',
      'rgba(244, 167, 66, 0.2)',
      'rgba(12, 163, 231, 0.2)',
      'rgba(254, 84, 84, 0.2)',
      'rgba(12, 215, 177, 0.2)',
      'rgba(10, 10, 10, 0.2)'
    ],
    borderColor: [
      'rgb(84, 109, 254)',
      'rgb(215, 124, 247)',
      'rgb(244, 167, 66)',
      'rgb(12, 163, 231)',
      'rgb(254, 84, 84)',
      'rgb(12, 215, 177)',
      'rgb(10, 10, 10)'
    ],
    borderWidth: 1
  }]
};

//Chartjs Pie Chart

export const Option3 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
};
export const Data3 = {
  type: 'pie',
  labels: [
    'Blue',
    'Pink',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    borderColor: 'rgba(142, 156, 173,0.1)',
    backgroundColor: [
      'rgb(84, 109, 254)',
      'rgb(215, 124, 247)',
      'rgb(244, 167, 66)'
    ],
    hoverOffset: 4
  }]
};

//Chartjs Doughnut Chart

export const Option4 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
};
export const Data4 = {
  type: 'donut',
  labels: [
    'Blue',
    'Pink',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    borderColor: 'rgba(142, 156, 173,0.1)',
    backgroundColor: [
      'rgb(84, 109, 254)',
      'rgb(215, 124, 247)',
      'rgb(244, 167, 66)'
    ],
    hoverOffset: 4
  }]
};

const Option5 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
const Data5 = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: ['10', '20', '30', '40'],
      borderColor: 'rgb(84, 109, 254)',
      backgroundColor: 'rgba(84, 109, 254, 0.2)'
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: ['50', '50', '50', '50'],
      fill: false,
      borderColor: 'rgb(215, 124, 247)'
    }
  ]
};
export function Chartjsmixed() {
  return (
    <Scatter options={Option5} data={Data5} height='300px' />
  );
}

//Chartjs Polar Chart

export const Option6 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },

};
export const Data6 = {
  type: 'polarArea',
  labels: [
    'Blue',
    'Green',
    'Yellow',
    'Grey',
    'Pink'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
    'rgb(84, 109, 254)',
    'rgb(75, 192, 192)',
    'rgb(244, 167, 66)',
    'rgb(201, 203, 207)',
    'rgb(215, 124, 247)'
    ]
  }]
};

//Chartjs Radial Chart

export const Option7 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(142, 156, 173,0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(142, 156, 173,0.1)'
        }
      }
    }
  },
  elements: {
    line: {
      borderWidth: 3,
      borderColor: 'rgba(142, 156, 173,0.1)',
    }
  }

};
export const Data7 = {
  type: 'radar',
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(84, 109, 254, 0.2)',
    borderColor: 'rgb(84, 109, 254)',
    pointBackgroundColor: 'rgb(84, 109, 254)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(84, 109, 254)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(215, 124, 247, 0.2)',
    borderColor: 'rgb(215, 124, 247)',
    pointBackgroundColor: 'rgb(215, 124, 247)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(215, 124, 247)'
  }]
};

//Chartjs Scatter Chart

export const Option8 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(142, 156, 173,0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(142, 156, 173,0.1)'
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    },
    y: {
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    }
  }

};
export const Data8 = {
  type: 'scatter',
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(84, 109, 254)'
  }],
};

//Chartjs Bubble Chart

export const Option9 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    },
    y: {
      grid: {
        color: 'rgba(142, 156, 173,0.1)'
      }
    }
  }

};
export const Data9 = {
  type: 'bubble',
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(84, 109, 254)'
  }]
};