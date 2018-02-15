/* global Vue */

const toPercentageFilter = function toPercentageFilter(value) {
	return `${Math.round(parseFloat(value) * 100)}%`;
};

Vue.filter('toPercentage', toPercentageFilter);

const booleanToStringFilter = function booleanToStringFilter(value, trueText, falseText) {
	return value ? trueText || 'true' : falseText || 'false';
};

Vue.filter('booleanToString', booleanToStringFilter);

window.$vue = new Vue({
	el: '#results__list',
	data: {
		debug: true,
		profileList: [],
		error: null,
		metadata: {
			apiURL: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
				? 'https://dev.pegabots.com.br/botometer'
				: '/botometer',
			loading: false,
			current: 0,
			total: 0,
			download: '.',
			query: {},
		},
		xhr_request: [],
	},
	components: {
		profile: {
			template: '#profile',
			props: {
				user: {
					type: Object,
					required: false,
				},
				transform: {
					type: String,
					required: false,
					default: '0 43 43',
				},
				to: {
					type: String,
					required: false,
					default: '0 43 43',
				},
				value: {
					type: Number,
					required: false,
					default: 0,
				},
				index: {
					type: Number,
					required: true,
				},
				'remove-profile': {
					type: Function,
					required: true,
				},
			},
			filters: {
				tweetItLink(username) {
					const via = 'PegaBots';
					const hashtags = 'pegabots';
					const title = encodeURIComponent(`Is ${username} a real person?`);
					const url = encodeURIComponent(window.location.href);

					return `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${via}&hashtags=${hashtags}`;
				},
				resultLevel(value) {
					let level = 0;

					if (value <= (1 / 5)) {
						level = 1;
					} else if (value <= (1 / 5) * 2) {
						level = 2;
					} else if (value <= (1 / 5) * 3) {
						level = 3;
					} else if (value <= (1 / 5) * 4) {
						level = 4;
					} else {
						level = 4;
					}

					return `test-result--level-${level}`;
				},
			},
		},
		'results-footer': {
			template: '#results__footer',
			props: {
				metadata: {
					type: Object,
					required: true,
				},
				'cancel-request': {
					type: Function,
					required: true,
				},
			},
		},
		'results-form': {
			template: '#results__form',
			props: {
				metadata: {
					type: Object,
					required: true,
				},
			},
		},
	},
	methods: {
		getQueryString(uri) {
			const queryString = uri || window.location.search;
			const params = {};
			const queries = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

			for (let i = 0; i < queries.length; i += 1) {
				const element = queries[i].split('=');
				params[decodeURIComponent(element[0])] = decodeURIComponent(element[1] || '');
			}

			return params;
		},
		loadProfiles() {
			this.error = null;
			this.metadata.loading = true;

			this.$http.get('/botometer', { params: this.metadata.query })
				.then(
					(response) => {
						if (response.status === 200) {
							if (Array.isArray(response.body.profiles)) {
								this.profileList = response.body.profiles;
								this.metadata.current = response.body.profiles.length;
							} else {
								this.profileList = [response.body.profiles];
								this.metadata.current = 1;
							}

							this.metadata.download = response.url;
							this.metadata.total = response.body.metadata.count;
						}
						this.metadata.loading = false;
					},
					{
						beforeSend(xhr) {
							this.xhr_request.push(xhr);
						},
					}, (error) => {
						alert(error.statusText); // eslint-disable-line no-alert
					},
				);
		},
		cancelRequest() {
			for (let i = 0; i < this.xhr_request.length; i += 1) {
				this.xhr_request.shift().abort();
			}
		},
		removeProfile(index) {
			this.profileList.splice(index, 1);
		},
		showElement() {
			if (this.$el.hasAttribute('hidden')) {
				this.$el.removeAttribute('hidden');
			}
		},
	},
	created() {
		this.metadata.query = this.getQueryString();
	},
	mounted() {
		this.loadProfiles();
		this.showElement();
	},
});

