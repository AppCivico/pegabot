const { CMS } = window;

const cmsBranch = window.location.hostname.indexOf('dev') === 0 ? 'dev' : 'master';

const config = {
	backend: {
		name: 'git-gateway',
		branch: cmsBranch,
		repo: 'AppCivico/pegabot',
	},
	load_config_file: true,
	media_folder: 'content/uploads',
	public_folder: '/uploads',
	publish_mode: 'editorial_workflow',
	squash_merges: true,
	locale: 'pt',
	show_preview_links: false,
	sortable_fields: [
		'commit_date',
		'draft',
		'language',
		'title',
		'weight',
	],
	logo_url: '/assets/images/logos/logotype--no-text.png',
	slug: {
		encoding: 'ascii',
		clean_accents: true,
		sanitize_replacement: '-',
	},
	editor: {
		preview: false,
	},
};

// Make the config object available on the global scope for processing by
// subsequent scripts.Don't rename this to `CMS_CONFIG` - it will cause the
// config to be loaded without proper processing.
window.CMS_CONFIGURATION = config;

CMS.init({
	config,
});
