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
			},
			filters: {
				tweetItLink(username) {
					const via = 'PegaBots';
					const hashtags = 'pegabots';
					const title = encodeURIComponent(`Is ${username} a real person?`);
					const url = encodeURIComponent(window.location.href);

					return `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${via}&hashtags=${hashtags}`;
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

			this.$http.get('/assets/data/test.json', { params: this.metadata.query })
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

