export default {
	type: 'line',
	scales: {
		color: 'pink',
		yAxes: [
			{
				gridLines: {
					borderDash: [2, 2],
				},
			},
		],

		xAxes: [
			{
				gridLines: {
					borderDash: [2, 2],
				},
			},
		],
	},
	legend: {
		display: true,
		position: 'bottom',
		align: 'center',
		labels: {
			boxWidth: 12,
			borderWidth: 0,
		},
	},
	elements: {
		point: {
			pointStyle: 'rect',
			radius: 4,
			backgroundColor: 'rgb(26, 145, 208',
			borderWidth: 0,
		},
		line: {
			borderWidth: 2,
			showLine: true,
			fill: false,
			tension: 0,
			borderJoinStyle: 'round',
			borderColor: 'rgb(26, 145, 208)',
			backgroundColor: 'rgb(26, 145, 208)',
		},
	},

	title: {
		display: true,
		text: 'Atividade de tweets - tweets',
		fontColor: '#bdbdbd',
	},

	// datasets: {
	// 	line: {
	// 		borderWidth: 0,
	// 		backgroundColor: 'rgb(26, 145, 208)',
	// 	},
	// },
	maintainAspectRatio: false,
};
