---
language: es
draft: false
title: Red
date: 2020-11-09T18:49:29.000Z
weight: 2
intro: El algoritmo de AtrapaBot recopila una muestra de línea del tiempo,
  identificando hasgtags utilizados y menciones al perfil, para realizar sus
  análisis. El objetivo es identificar caracteristicas de distribución en la red
  de la cuenta analizada.
layout: none
rootOf: false
---
El algoritmo de AtrapaBot recopila una muestra de línea del tiempo, identificando hasgtags utilizados y menciones al perfil, para realizar sus análisis. El objetivo es identificar caracteristicas de distribución en la red de la cuenta analizada.

Después de recopilar las informaciones de los datos, Atrapabot los proccesa y los transforma en variables que componen el calcula final de la probabilidad .

Cómo AtrapaBot prepara los datos

* Todos los hastags recopilados son separados y distribuídos en una matriz;
* No se contabilizan elementos repetidos;
* No se contabilizan datos de menciones caso pertenezcan a una respuesta;

Qué analiza Atrapabot:

* **Distribución de hashtags**: calcula el tamaño de la distribución de esos hashtags en la red;
* **Distribución de menciones**: calcula el tamaño de la distribución de menciones al perfil del usuario de la red;
* **Hashtags y menciones**: descubre la cantidad de hastags utilizados y la cantidad de menciones realizadas por el perfil del usuario dentro de la muestra recopilada.

**Observaciones**

El índice de red busca comprender si el usuario está, por ejemplo, reenviando mensajes de spam a un determinado hashtag. Perfiles que poseen grandes cantidades de interacciones y son monotemáticos en relación a los hastags utilizados suelen tener una calificación superior en los análisis.