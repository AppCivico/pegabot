---
language: es
draft: false
title: ¿Qué significan los resultados?
slug: o-que-a-nota-significa
date: 2018-03-13T18:04:04-03:00
weight: 7
layout: none
type: faq
---
El algoritmo de Atrapabot utiliza informaciones públicas de los perfiles en Twitter para realizar sus análisis. El objetivo es identificar características que ayuden a determinar si el perfil es más o menos bot. En este momento, Atrapabot se basa en los patrones de comportamiento para identificar la probabilidad de que un determinado perfil sea utilizado por un humano o por un robot. Utilizamos los siguientes criterios:

* **Perfil de Usuario** : Algunas de las informaciones públicas de los perfiles consideradas en el análisis de Atrapabot son: el nombre del perfil de usuario y cuantos caracteres posee, la cantidad de perfiles seguidos (following) y seguidores (followers), texto de la descripción del perfil, número de publicaciones (tuits) y favoritos.  Elementos como la ausencia de imagen de perfil y descripción, por ejemplo, incrementan la probabilidad de que la cuenta sea un robot.
* **Número de Tuits**: Perfiles que tuitean mucho en un breve intervalo de tiempo reciben una calificación mayor, una vez que este comportamiento se asemeja al comportamiento de los bots. Un breve intervalo de tiempo entre cada publicación, 2 segundos por ejemplo, puede indicar que ésta ha sido realizada por un robot. La frecuencia y la aletoriedad en el tiempo que se suben las publicaciones también señalan características de comportamiento: publicaciones subidas siempre en el mismo horario, a las 10 de la mañana, por ejemplo, pueden haber sido realizadas por un robot.
* **Red**:El algoritmo de AtrapaBot recopila una muestra de línea del tiempo, identificando hasgtags utilizados y menciones al perfil, para realizar sus análisis. El objetivo es identificar caracteristicas de distribución en la red de la cuenta analizada.
* **Análisis de sentimiento**: Los algoritmos de Atrapabot seleccionan una muestra de hasta los 100 tuits más recientes publicados por el perfil analizado. El objetivo es identificar palabras que hacen con que la publicación del usuario sea más o menos negativa (sentimiento).  

Para una explicación completa a cerca de los criterios, accede a la página Transparencia.