---
language: es
draft: false
title: Análisis de sentimientos
date: 2020-11-09T18:48:05.000Z
weight: 3
intro: Los algoritmos de Atrapabot seleccionan una muestra de hasta los 100
  tuits más recientes publicados por el perfil analizado. El objetivo es
  identificar la neutralidad del perfil analizado. Cuanto más neutro, menor la
  probabilidad de que se lo considere un bot.
layout: none
rootOf: false
---
Los algoritmos de Atrapabot seleccionan una muestra de hasta los 100 tuits más recientes publicados por el perfil analizado. El objetivo es identificar la neutralidad del perfil analizado. Cuanto más neutro, menor la probabilidad de que se lo considere un bot.

Después de recopilar los datos, los algoritmos de Atrapabot proporcionan una calificación en una escala de -5 a 5, de cada una de las palabras de los tuits copilados. La clasificación está basada en una biblioteca, en la cual cada una de las palabras posee una calificación, considerándola más o menos negativa. De esa manera, al fin de la clasificación se calcula la calificación media para la cantidad de palabras positivas, negativas y neutras utilizadas por el usuario.

Cómo Atrapabot prepara los datos:

* Selecciona los últimos tuits publicados por el usuario (hasta 100);
* Califica el discurso de cada tuit basado en un diccionario de sentimiento, en el cual se puntua cada palabra de acuerdo con una clasificación;
* Las calificaciones difieren de -5 a 5, siendo -5 más negativas y 5 más positivas;
* Palabras neutras están evaluadas con una calificación zero;
* Se realiza una ponderación de las calificaciones obtenidas por cada tuit;

**Observaciones**

Al calcular las medias entre las palabras neutras, negativas y positivas, observamos una tendencia: cuanto menos neutro sea el sentimiento, mayores serán las posibilidades de que el usuario reciba una calificación mayor, asemejándose, de esa manera, a un comportamiento de bot.