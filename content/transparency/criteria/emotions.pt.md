---
title: "Análise de sentimentos"
date: 2020-08-14T00:41:05-03:00
draft: false
menu:
layout: none
weight: 3
slug: ""
intro: "Os algoritmos do PegaBot  selecionam uma amostra de até 100 tweets mais recentes publicados pelo perfil analisado. O objetivo é identificar a neutralidade do perfil analisado. Quanto mais neutro, menor a chance de ser considerado um bot."
language: pt
rootOf: false
---
Os algoritmos do PegaBot  selecionam uma amostra de até 100 tweets mais recentes publicados pelo perfil analisado. O objetivo é identificar a neutralidade do perfil analisado. Quanto mais neutro, menor a chance de ser considerado um bot.

Após coletar os dados, os algoritmos do PegaBot fornecem uma pontuação, em uma escada de -5 a 5, de cada uma das palavras dos tweets coletados. A classificação se baseia em uma biblioteca, onde, cada uma das palavras possui uma pontuação, sendo considerada mais ou menos negativa. Assim, ao final da classificação, calcula-se a pontuação média para a quantidade de palavras positivas, negativas e neutras utilizadas pelo usuário.

Como o PegaBot prepara os dados:

- Seleciona os últimos tweets publicados pelo usuário (até 100);
- Pontua o discurso de cada tweet baseado em uma dicionário de sentimento, onde cada palavra é pontuada de acordo com uma classificação;
- Pontuações variam de -5 a 5, sendo -5 mais negativas e 5 mais positivas
- Palavras neutras são avaliadas com uma pontuação zero;
- É realizada uma ponderação das pontuações obtidas por cada tweet;

**Observações**

Ao calcular as médias entre palavras neutras, negativas e positivas, observamos uma tendência de, quanto menos neutro o sentimento, maiores são as probabilidades do usuário receber uma pontuação maior, assemelhando-se mais a um comportamento de bot.
