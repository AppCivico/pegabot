# Atrapabot (Pegabot)

Analizador de perfiles de redes sociales tipo bot.

Para obtener instrucciones de instalación en inglés -> [here](README.md)

## Modelador de contenido

### Perfil

- Nombre de perfil de usuario
- enlace de red social
- foto de perfil
- Pruebas dependientes del idioma.
	+ contenido
		* value
	+ sentimiento
		* value
- Exámenes independientes del idioma.
	+ amigos
	+ temporal
	+ red
	+ usuario
- probabilidad de bot
	+ todas las características
	+ lenguaje independiente
- compartir enlace en red social
- lenguaje de perfil de usuario
- enlace de comentarios (feedback)

### Estadísticas de bot

- numero
- descripción

## Instalación

Esta parte del proyecto utiliza las siguientes tecnologías, marcos y convenciones:

- [keep a changelog](https://keepachangelog.com/en/1.0.0/) convención;
- [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)
- [EditorConfig](http://editorconfig.org/) - para mantener la coherencia del estilo del código;
- [ESLint](https://eslint.org/) -para mantener los scripts limpios;
- [Sass-Lint](https://github.com/sasstools/sass-lint) - para mantener limpias las hojas de estilo (css);
- [Hugo](https://gohugo.io/) - para administrar el contenido y construir el html del sitio web;
- [Sass](http://sass-lang.com/) - en las hojas de estilo, siguiendo el Patrón 7-1 de [Sass Guidelines](https://sass-guidelin.es/);
- [VueJS](https://vuejs.org/) - en la gestión de resultados.

Para ejecutarlo localmente, debe instalar:

- [Hugo](https://gohugo.io/)
- [NodeJS](https://nodejs.org/en/)

Luego puede ejecutar `npm install` o` yarn`, para instalar las dependencias, y luego `npm run dev`, que se iniciará en el servidor de hugo en [multilingual mode](https://gohugo.io/content-management/multilingual/#configure-multilingual-multihost).

## Construir (build)

Para ejecutar `npm run build` implementará cada versión del sitio en la carpeta`. / Public` en un directorio codificado por idioma.

Push a la rama `develop` desencadenar la implementación en el entorno de desarrollo y pruebas. Para implementar en producción, el commit de fusión en master debe tener una etiqueta de versión. El proceso se puede hacer usando[`npm version`](https://docs.npmjs.com/cli/version) CLI command.

## Instrucciones de traducción

Archivos que deben editarse o agregarse:

- archivo de cadenas dentro de la carpeta `. / i18n` nombrado como código de idioma;
- archivos de contenido de rebajas en la carpeta `. / content`, con el sufijo del código de idioma;
- el mapa `languages` en` config.yaml` se nombra con el código de idioma;


Los logotipos se pueden agregar al archivo `_header.scss`, utilizando el prefijo de idioma dentro de la regla` [role = 'banner'] a`:

```sass
	[lang='es-mx'] & {
		background-image: image('logotype--mx--150w.png');
	}
```
