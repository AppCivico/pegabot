/* global VueChartJs */

import options from './chartOptions';

const { Line } = VueChartJs;

export default {
	name: 'TheChart',
	extends: Line,

	props: {
		data: {
			type: Object,
			default: () => ({}),
		},
	},

	mounted() {
		const { labels, datasets = [], data } = this.data;
		let normalizedDatasets;

		if (!datasets.length) {
			if (data) {
				normalizedDatasets = datasets.concat([{
					data,
					label: 'Tweets',
					backgroundColor: 'rgb(26, 145, 208)',
					borderWidth: 0, // <-- set this for a plain legend
				}]);
			} else {
				throw new Error('unexpected data layout');
			}
		} else {
			normalizedDatasets = Object.keys(datasets)
				.map(x => (!datasets[x].backgroundColor && !!datasets[x].color
					? Object.assign(datasets[x], { backgroundColor: datasets[x].color })
					: datasets[x]));
		}


		this.renderChart({ labels, datasets: normalizedDatasets }, options);
	},

	beforeDestroy() {
		// eslint-disable-next-line no-underscore-dangle
		this.$data._chart.destroy();
	},
};
