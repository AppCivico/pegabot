/* global Vue */
/* global gtag */

// eslint-disable-next-line import/no-unresolved import/extensions
import * as params from '@params';
import 'cookieconsent';

import chart from './TheChart';

const toPercentageFilter = function toPercentageFilter(value) {
	return `${Math.round(parseFloat(value) * 100)}%`;
};

const lang = params.language;

Vue.filter('toPercentage', toPercentageFilter);

Vue.prototype.window = window;

const booleanToStringFilter = function booleanToStringFilter(value, trueText, falseText) {
	return value ? trueText || 'true' : falseText || 'false';
};

Vue.filter('booleanToString', booleanToStringFilter);

Vue.component('the-chart', chart);

const components = {};

if (document.querySelector('#results__profile')) {
	components.profile = {
		template: '#results__profile',
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
			focusable: {
				type: Boolean,
				required: false,
				default: false,
			},
			removeProfile: {
				type: Function,
				required: true,
			},
			toApprove: {
				type: Function,
				required: true,
			},
			toDisapprove: {
				type: Function,
				required: true,
			},
		},
		filters: {
			profileLink(username = '') {
				return `https://twitter.com/${username.replace('@', '')}`;
			},
			permalink(username = '') {
				return `${window.location.origin}${window.location.pathname}?socialnetwork=twitter&profile=${username.replace('@', '')}&search_for=profile`;
			},
			whatsAppItLink(username = '') {
				const url = encodeURIComponent(window.location.href);
				const title = encodeURIComponent(`O @pegabots quer saber se @${username.replace('@', '')} é um bot ou não. Qual a sua opinião?`);

				return `https://api.whatsapp.com/send?text=${title}%20${url}`;
			},
			facebookItLink(username = '') {
				const url = encodeURIComponent(window.location.href);
				const title = encodeURIComponent(`O @pegabots quer saber se @${username.replace('@', '')} é um bot ou não. Qual a sua opinião?`);

				return `https://www.facebook.com/sharer.php?u=${url}&t=${title}`;
			},
			tweetItLink(username = '') {
				const hashtags = 'Pegabot';
				const title = encodeURIComponent(`O @pegabots quer saber se @${username.replace('@', '')} é um bot ou não. Qual a sua opinião?`);
				const url = encodeURIComponent(window.location.href);

				return `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hashtags}`;
			},
			resultLevel(value = 0) {
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
					level = 5;
				}

				return `test-result--level-${level}`;
			},
		},
	};
}

if (document.querySelector('#results__footer')) {
	components['results-footer'] = {
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
	};
}

if (document.querySelector('#results__form')) {
	components['results-form'] = {
		template: '#results__form',
		props: {
			metadata: {
				type: Object,
				required: true,
			},
		},
	};
}

if (document.querySelector('#results__detail')) {
	components['results-detail'] = {
		template: '#results__detail',
		props: {
			item: {
				type: Object,
				required: true,
				default: () => ({}),
			},
			loading: {
				type: Boolean,
				required: true,
				default: false,
			},
			propertyName: {
				type: String,
				required: true,
				default: '',
			},
		},
	};
}

if (!document.getElementById('app')) throw new Error('exit');

// eslint-disable-next-line no-unused-vars
window.newVue = {
	el: '#app',
	data() {
		return {
			profileDetails: null,
			debug: true,
			profileList: [],
			pending: {
				toApprove: false,
				toDisapprove: false,
			},
			error: null,
			metadata: {
				apiURL: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
					? ''
					: 'https://backend.pegabot.com.br',
				loading: true,
				current: 0,
				total: 0,
				download: '',
				query: {},
				limit: 12,
			},
			xhr_request: [],
		};
	},
	components,
	computed: {
		isDetailedView() {
			return window.document.documentElement.className.indexOf('details-page') !== -1;
		},
	},
	methods: {
		getQueryString(uri) {
			const queryString = uri || window.location.search;
			const queryParams = {};
			const queries = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

			for (let i = 0; i < queries.length; i += 1) {
				const element = queries[i].split('=');
				queryParams[decodeURIComponent(element[0])] = decodeURIComponent(element[1] || '');
			}

			return queryParams;
		},
		loadResults(requestParams, currentIndex = 0) {
			const endPoint = this.isDetailedView
				? `${this.metadata.apiURL}/analyze`
				: `${this.metadata.apiURL}/botometer`;

			this.error = null;
			this.metadata.loading = true;

			this.$http.get(endPoint, {
			// dev only on /results
			// this.$http.get('/botometer.json', {
			// dev only on /details
			// this.$http.get('/details.json', {
				headers: {
					'Accept-Language': lang,
					'Content-type': 'application/json',
				},
				timeout: 120000,
				params: requestParams,
				before(xhr) {
					this.xhr_request.push(xhr);
				},
			}).then((response) => {
				if (response.body.request_url) {
					window.location = response.body.request_url;
				} else if (response.headers.get('content-type')
					&& response.headers.get('content-type').indexOf('application/octet-stream') !== -1
				) {
					const url = window.URL.createObjectURL(new Blob([response.body]));
					const link = document.createElement('a');
					const filename = !response.headers.get('content-disposition')
						? 'file'
						: response.headers.get('content-disposition')
							.split('filename=')[1]
							.split(';')[0]
							.replace('"', '');

					link.href = url;
					link.setAttribute('download', filename);
					document.body.appendChild(link);
					link.click();
				} else {
					if (response.body.metadata && response.body.metadata.error) {
						window.alert(response.body.metadata.error); // eslint-disable-line no-alert
					}

					if (response.status === 200) {
						if (response.body.analysis_id) {
							this.analysisId = response.body.analysis_id;
						}

						if (this.isDetailedView) {
							this.profileDetails = response.body.root;
						}

						if (response.body.profiles) {
							let profileList = response.body.profiles;

							if (requestParams.search_for === 'followers' || requestParams.search_for === 'friends') {
								if (this.metadata.limit > 0 && this.metadata.limit < profileList.length) {
									profileList = profileList.slice(0, this.metadata.limit);
								} else if (this.metadata.limit > profileList.length) {
									this.metadata.limit = profileList.length;
								}
								this.metadata.total = profileList.length;
							} else if (requestParams.search_for === 'profile') {
								this.metadata.current += 1;
							}

							if (requestParams.search_for === 'profile') {
								this.$set(this.profileList, currentIndex, profileList[0]);
							} else if (requestParams.search_for === 'followers' || requestParams.search_for === 'friends') {
								this.profileList = this.profileList.concat(profileList);

								for (let index = 0; index < profileList.length; index += 1) {
									const thisProfile = profileList[index];
									this.$set(this.profileList, index, thisProfile);

									const newParams = Object.assign({}, requestParams);
									newParams.profile = thisProfile.username;
									newParams.search_for = 'profile';

									this.loadResults(newParams, index);
								}
							}
						}
					} else {
						window.alert(response.body.message || 'Error'); // eslint-disable-line no-alert
					}

					if (currentIndex === this.metadata.limit - 1) {
						this.metadata.loading = false;
					}
				}

				this.metadata.loading = false;
			}).catch((error) => {
				this.cancelRequest();
				this.error = error.body.message ? error.body.message : error.statusText;
				this.metadata.loading = false;
				// window.alert(error.status === 0 // eslint-disable-line no-alert
				// 	? 'API did not respond'
				// 	: error.body.message || error.status);
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
		toApprove(index) {
			if (gtag) {
				gtag('event', 'aprovar');
			}
			this.pending.toApprove = true;
			return this.submitApproval('approve', index)
				.finally(() => { this.pending.toApprove = false; });
		},
		toDisapprove(index) {
			if (gtag) {
				gtag('event', 'desaprovar');
			}
			this.pending.toDisapprove = true;
			return this.submitApproval('disapprove', index)
				.finally(() => { this.pending.toDisapprove = false; });
		},
		submitApproval(value = 'approve', index) {
			if (!this.profileList[index]) {
				throw Error('unknown profile submited');
			}

			if (value !== 'approve' && value !== 'disapprove') {
				throw Error('unknown approval value submited');
			}

			this.$set(this.profileList[index], 'loading', true);

			return this.$http.post(`${this.metadata.apiURL}/feedback`, {
				opinion: value,
				analysis_id: this.analysisId,
				before(xhr) {
					this.xhr_request.push(xhr);
				},
			}).then((response) => {
				if (response.ok) {
					return response;
				}
				const error = new Error(response.body);
				error.name = response.status;

				if (response.status === 425) {
					window.alert('No Reason Phrase'); // eslint-disable-line no-alert
				}

				return Promise.reject(error);
			}).then(() => {
				this.$set(this.profileList[index], 'opinionSubmitted', value);
				this.$set(this.profileList[index], 'loading', false);
			}).catch((error) => {
				this.$set(this.profileList[index], 'loading', false);
				this.cancelRequest();
				this.error = error.message;
				this.metadata.loading = false;
				window.alert(error.message); // eslint-disable-line no-alert
				throw error;
			});
		},
	},
	created() {
		this.metadata.query = this.getQueryString();

		if (this.metadata.query.search_for) {
			this.metadata.loading = true;
		}
	},
	mounted() {
		const requestParams = {
			socialnetwork: this.metadata.query.socialnetwork,
			profile: this.metadata.query.profile,
			search_for: this.metadata.query.search_for,
			limit: (this.metadata.query.limit || 12),
		};

		if (this.metadata.query.verbose) {
			requestParams.verbose = this.metadata.query.verbose;
			requestParams.responseType = 'blob';
		}

		if (this.metadata.query.search_for === 'profile') {
			this.metadata.limit = 1;
			this.metadata.total = 1;
			requestParams.limit = 1;
		}

		if (this.isDetailedView) {
			requestParams.wantsDocument = 1;
			requestParams.wants_document = 1;
			this.metadata.limit = 1;
			this.metadata.total = 1;
			requestParams.limit = 1;
		}

		if (this.metadata.query.authenticated) {
			requestParams.authenticated = this.metadata.query.authenticated;
		}

		if (this.metadata.query.oauth_token) {
			requestParams.oauth_token = this.metadata.query.oauth_token;
		}

		if (this.metadata.query.oauth_verifier) {
			requestParams.oauth_verifier = this.metadata.query.oauth_verifier;
		}

		this.loadResults(requestParams);

		this.showElement();
	},
};

window.$vue = new Vue(window.newVue);
