/* global Vue */

function query(uri) {
	const queryString = uri || window.location.search;
	const params = {};
	const queries = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

	for (let i = 0; i < queries.length; i += 1) {
		const element = queries[i].split('=');
		params[decodeURIComponent(element[0])] = decodeURIComponent(element[1] || '');
	}

	return params;
}

const data = {
	profileList: [
		{
			username: 'Laís',
			url: '.',
			avatar: 'valiria.com/avatar',
			content: {
				value: 0.5,
			},
			language_independant: {
				friend: 0.5,
				temporal: 0.5,
				network: 0.5,
				user: 0.5,
			},
			language_dependent: {
				content: 0.5,
				sentiment: 0.5,
			},
			bot_probability: {
				all_features: 0.5,
				language_independent: 0.5,
			},
			share_link_on_social_network: '.',
			user_profile_language: '.',
			feedback_report_link: '.',
		},
	],
};


data.current = 0;
data.downloadResults = {
	value: '.',
};

data.query = query();

Vue.component('profile', {
	template: '#profile',
	props: [
		'user',
	],
});

const app = new Vue({
	el: '#results__list',
	data,
	methods: {
	},
	created() {
	},
	mounted() {
		if (this.$el.hasAttribute('hidden')) {
			this.$el.removeAttribute('hidden');
		}
	},
});
