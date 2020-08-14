---
title: "Rede"
date: 2020-08-14T00:39:57-03:00
draft: false
menu:
slug: ""
weight: 2
---
Dados a serem coletados: todas as hashtags usadas na amostra da linha do tempo Todas as menções usadas na amostra da linha do tempo Tamanho da amostra

Preparação dos dados: para cada dado coletado, coloque-o em uma matriz de distribuição que contenha um elemento exclusivo de cada elemento diferente coletado. Por exemplo, se tivermos cinco vezes a hashtag "# eleçoes", colocaremos esses dados apenas uma vez na matriz. Para menções, não conte uma menção se pertencer a uma resposta

Lista de subíndice:

Comprimento de distribuição para hashtags
Duração da distribuição das menções
Total de hashtags e menções
Cálculo da probabilidade:

Contar o tamanho da distribuição de hashtags
Contar o tamanho da distribuição de menções
Obtenha a pontuação média da rede adicionando o número de hashtags na amostra com o número de menções e dividido pelo tamanho da amostra multiplicada por dois.
Em seguida, dividimos o tamanho da distribuição de hashtag pelo total de hashtag que temos na amostra; por exemplo, se tivermos apenas 5 hashtags diferentes para um total de 50 hashtags usadas na amostra, dividimos 5 por 50. Prosseguimos o o mesmo para as menções e removemos as duas pontuações de 1. Em seguida, fazemos a média das duas pontuações que obtemos e adicionamos a média da pontuação da rede

Pontuação = ((Total de hashtags + menções) / (Número de dados * 2)) + ((1 - (Número de hashtags diferentes usadas / Total de hashtags)) + (1 - (Número de menções diferentes usadas / Total de menções ))) / 2;

Mais explicações: este índice calcula se o perfil está enviando spam para alguma hashtag ou usuário. Quanto mais hashtags / menções houver, maior será a pontuação, a proporção normal de hashtags / menções por tweets será considerada como duas. Mais do que isso, a pontuação começará a aumentar. No caso de um bot de spam, geralmente são as mesmas hashtags / menções usadas, também é o que esse índice faz. Se 50 hashtags forem usadas na linha do tempo e forem 50 hashtags diferentes, nada será suspeito, mas se for uma hashtag usada 100% do tempo, será realmente suspeito.
