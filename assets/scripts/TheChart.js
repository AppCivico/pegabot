/* global VueChartJs */

const { Line } = VueChartJs;

export default {
	name: 'TheChart',
	extends: Line,

	props: {
		chartData: {
			type: Array,
			default: () => ([]),
		},
		chartLabels: {
			type: Array,
			default: () => ([]),
		},
	},

	mounted() {
		const { chartData: dataset, chartLabels: labels } = this;

		this.renderChart({ labels, dataset });
	},

	beforeDestroy() {
		// eslint-disable-next-line no-underscore-dangle
		this.$data._chart.destroy();
	},
};
