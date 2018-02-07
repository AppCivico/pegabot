/* global Vue */

window.$vue = new Vue({
	el: '#results__list',
	data: {
		debug: true,
		profileList: [],
		query: {},
		loading: false,
		error: null,
		profilesMeta: {
			current: 0,
			total: 0,
			downloadResults: {
				value: '.',
			},
		},
	},
	components: {
		profile: {
			template: '#profile',
			props: [
				'user',
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

			this.$http.get('/assets/data/test.json', { params: this.query })
				.then((response) => {
					this.loading = false;
					if (response.status === 200) {
						this.profileList = response.body.profiles;
						this.profilesMeta.total = response.body.profiles.length;
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
		this.query = this.getQueryString();
	},
	mounted() {
		this.loadProfiles();
		this.showElement();
	},
});

