---
date: 2018-03-13T18:04:04-03:00
draft: false
id: "o-que-a-nota-significa"
title: "¿Qué significan los resultados?"
layout: none
type: faq
weight: 4
---
Atrapabot analiza el historial de mensajes del perfil de la red social que usted solicita analizar. En este momento Atrapabot se basa en patrones de comportamiento para identificar si es más probable que un humano utilice ese perfil o un robot. Los criterios para hacer esta evaluación son el intervalo de tiempo entre cada entrada (un intervalo pequeño entre cada entrada, 2 segundos por ejemplo, pueden indicar que la entrada fue hecha por un robot); la frecuencia y la aleatoriedad en el tiempo en que se efectúan las entradas (las entradas hechas siempre a la misma hora, a las 10 de la mañana, por ejemplo, pueden haber sido hechas por un robot); y la personalidad dada a los textos publicados (textos repetidos o extraídos de otras publicaciones, preformateadas, son un indicativo de haber sido hecho por un robot). Con base en el promedio general de las entradas del perfil, Atrapabot da una calificación, que indica la probabilidad de que ese perfil sea o no un robot.

##Características para la identificación de bots   
|---|---|
|  Contenido (publicaciones) |  Se basa en claves lingüísticas a través del procesamiento del lenguaje natural. Incluye frecuencia de verbos, sustantivos y adverbios en los tuits. El sistema analiza la longitud y la entropía del contenido del tuit. Los mensajes engañosos generalmente exhiben un lenguaje informal y frases cortas.  |
| Sentimiento (emocional)  | Se extraen los diversos estados emocionales a partir del análisis de sentimiento de los tuits. Un humano suele expresar una variedad de estados emocionales, mientras un bot no.  |
|  Usuario | Las características del usuario están basadas en metadatos relacionados con la cuenta. Esto datos incluyen el número de amigos y seguidores, el número de tuits producidos por los usuarios, la descripción del perfil y las configuraciones de la cuenta  (lenguaje, ubicación, momento de creación de la cuenta).   |
|  Amigos | Incluye estadísticas relativas a los contactos sociales, como la media, los momentos y la entropía de la distribución del número de seguidos, seguidores y posts. Se analizan las relaciones seguido-seguidores, los retuits y las menciones. Para cada campo se extraen las características sobre el uso el lenguaje, tiempo local, popularidad.   |
|  Red |  La estructura de la red muestra varias dimensiones de los patrones de difusión de la información. El sistema reconstruye tres tipos de redes: retuits, menciones y co-ocurrencia de hashtags. Todas las redes se pesan de acuerdo con la frecuencia de la interacción o las co-ocurrencias.  |
| Tiempo | La característica del tiempo captura los patrones relacionados con la actividad del usuario. Incluye el periodo promedio en la generación de contenido (tuits) y el consumo (retuits), el tiempo entre dos publicaciones.   |
