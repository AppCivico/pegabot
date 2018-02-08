/* global Vue */

window.$vue = new Vue({
	el: '#results__list',
	data: {
		debug: true,
		profileList: [],
		loading: false,
		error: null,
		metadata: {
			current: 0,
			total: 0,
			download: '.',
			query: {},
		},
	},
	components: {
		profile: {
			template: '#profile',
			props: [
				'user',
			],
		},
		'results-footer': {
			template: '#results__footer',
			props: [
				'metadata',
			],
		},
		'results-form': {
			template: '#results__form',
			props: [
				'metadata',
			],
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
			this.loading = true;

			this.$http.get('/botometer', { params: this.metadata.query })
				.then((response) => {
					this.loading = false;
					if (response.status === 200) {
						if (Array.isArray(response.body.profiles)) {
							this.$set(this, 'profileList', response.body.profiles);
							this.$set(this.metadata, 'current', response.body.profiles.length);
						} else {
							this.$set(this, 'profileList', [response.body.profiles]);
							this.$set(this.metadata, 'current', 1);
						}

						this.$set(this.metadata, 'total', response.body.metadata.count);
					}
				}, (error) => {
					alert(error.statusText); // eslint-disable-line no-alert
				});
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

