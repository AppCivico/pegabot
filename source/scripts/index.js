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
			download: '',
			query: {},
			limit: 6,
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
				profileLink(username) {
					return `https://twitter.com/${username}`;
				},
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
		loadResults(params, index = 0) {
			this.error = null;
			this.metadata.loading = true;

			this.$http.get(this.metadata.apiURL, {
				params,
				before(xhr) {
					this.xhr_request.push(xhr);
				},
			}).then((response) => {
				this.metadata.current += 1;

				if (response.body.metadata.error) {
					window.alert(response.body.metadata.error[0].message); // eslint-disable-line no-alert
				}

				if (response.status === 200) {
					this.$set(this.profileList, index, response.body.profiles);

					if (this.metadata.total === 0) {
						this.metadata.total = response.body.metadata.total || response.body.metadata.count;
					}
				} else if (response[0].message) {
					this.cancelRequest();
					window.alert(response[0].message); // eslint-disable-line no-alert
				}

				this.metadata.loading = false;
			}, (error) => {
				alert(error.statusText); // eslint-disable-line no-alert
			});
		},
		loadProfiles(params) {
			this.error = null;
			this.metadata.loading = true;

			this.$http.get(this.metadata.apiURL, {
				params,
				before(xhr) {
					this.xhr_request.push(xhr);
				},
			}).then((response) => {
				if (response.body.metadata.error) {
					window.alert(response.body.metadata.error[0].message); // eslint-disable-line no-alert
				}

				if (response.status === 200) {
					if (this.metadata.limit > 0 && this.metadata.limit < response.body.metadata.total) {
						this.profileList = response.body.profiles.slice(0, this.metadata.limit);
					} else {
						this.metadata.limit = response.body.metadata.total;
						this.profileList = response.body.profiles;
					}

					this.metadata.total = response.body.metadata.total || response.body.metadata.count;

					for (let index = 0; index < this.profileList.length; index += 1) {
						this.loadResults({
							socialnetwork: this.metadata.query.socialnetwork,
							profile: this.profileList[index].username,
							search_for: 'profile',
						}, index);
					}
				} else if (response[0].message) {
					this.cancelRequest();
					window.alert(response[0].message); // eslint-disable-line no-alert
				}

				this.metadata.loading = false;
			}, (error) => {
				alert(error.statusText); // eslint-disable-line no-alert
			});
		},
		cancelRequest() {
			for (let i = 0; i < this.xhr_request.length; i += 1) {
				this.xhr_request.shift().abort();
			}
			this.metadata.loading = false;
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
		if (this.metadata.query.search_for === 'followers' || this.metadata.query.search_for === 'friends') {
			this.loadProfiles({
				socialnetwork: this.metadata.query.socialnetwork,
				profile: this.metadata.query.profile,
				search_for: this.metadata.query.search_for,
			});
		} else if (this.metadata.query.search_for === 'profile') {
			this.metadata.limit = 1;

			this.loadResults({
				socialnetwork: this.metadata.query.socialnetwork,
				profile: this.metadata.query.profile,
				search_for: this.metadata.query.search_for,
			});
		}

		this.showElement();
	},
});

