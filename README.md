# Pega Bots

Social networks profiles bot-like analyzer.

Spanish version of this file can be found [here](README.md)

## Content modelling

### Profile

- profile username
- social network link
- avatar
- Language dependent tests
	+ content
		* value
	+ sentiment
		* value
- Language independent tests
	+ friend
	+ temporal
	+ network
	+ user
- bot probability
	+ all features
	+ language independent
- share link on social network
- user profile language
- feedback report link

### Bot Statistics

- number
- description

## Installation

This part of the project uses the following technologies, frameworks and conventions:

- [keep a changelog](https://keepachangelog.com/en/1.0.0/) convention;
- [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)
- [EditorConfig](http://editorconfig.org/) - to keep code style consistence;
- [ESLint](https://eslint.org/) - to keep the scripts clean;
- [Sass-Lint](https://github.com/sasstools/sass-lint) - to keep the stylesheets clean;
- [Hugo](https://gohugo.io/) - to manage the content and build the html of website;
- [Sass](http://sass-lang.com/) - on the stylesheets, following the 7-1 Pattern of the [Sass Guidelines](https://sass-guidelin.es/);
- [VueJS](https://vuejs.org/) - on the results management.

To run it locally, you need to install:

- [Hugo](https://gohugo.io/)
- [NodeJS](https://nodejs.org/en/)

Then you can run `npm install` or `yarn`, to install the dependencies, and then `npm run dev`, which will start and hugo server on [multilingual mode](https://gohugo.io/content-management/multilingual/#configure-multilingual-multihost).

## Build

To run `npm run build` will deploy every site version to the `./public` folder under a language coded directory.

Pushs to the `develop` branch trigger the deploy on develop and tests environment. To deploy on production, the merge commit on master needs to have a version tag. The process can be done using [`npm version`](https://docs.npmjs.com/cli/version) CLI command.

## Translation instructions

Files which need to be edited or added:

- strings file inside folder `./i18n` named as the language code;
- markdown content files on folder `./content`, suffixed with the language code;
- `languages` map on `config.yaml` being named with the language code;

Logotypes can be added to the `_header.scss` file, using the language prefix inside the `[role='banner'] a` rule:

```sass
	[lang='es-mx'] & {
		background-image: image('logotype--mx--150w.png');
	}
```
