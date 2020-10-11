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

		if (!datasets.length) {
			if (data) {
				datasets.push({
					data,
					label: 'Tweets',
					backgroundColor: 'rgb(26, 145, 208)',
					borderWidth: 0, // <-- set this for a plain legend
				});
			} else {
				throw new Error('unexpected data layout');
			}
		}

		this.renderChart({ labels, datasets }, options);
	},

	beforeDestroy() {
		// eslint-disable-next-line no-underscore-dangle
		this.$data._chart.destroy();
	},
};
