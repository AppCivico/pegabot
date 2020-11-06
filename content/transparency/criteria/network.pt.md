---
title: "Rede"
date: 2020-08-14T00:39:57-03:00
draft: false
menu:
layout: none
slug: ""
weight: 2
intro: "O algoritmo do PegaBot coleta uma amostra da linha do tempo do usuário, identificando hashtags utilizadas e menções ao perfil para realizar suas análises. O objetivo é identificar características de distribuição de informação na rede da conta analisada."
language: pt
rootOf: false
---
O algoritmo do PegaBot coleta uma amostra da linha do tempo do usuário, identificando hashtags utilizadas e menções ao perfil para realizar suas análises. O objetivo é identificar características de distribuição de informação na rede da conta analisada.

Após coletar as informações os dados, o PegaBot processa e transforma os dados recebidos em variáveis que compõem o cálculo final de probabilidade.

Como o PegaBot prepara os dados

- Todas as hashtags coletadas são separadas e distribuídas em uma matriz;
- Elementos repetidos não são contabilizados;
- Não são contabilizados dados de menções ao perfil se elas pertencerem a uma resposta;

O que o PegaBot analisa:

- **Distribuição das hashtags**: calcula o tamanho da distribuição dessas hashtags na rede;
- **Distribuição das menções**: calcula o tamanho da distribuição de menções ao perfil do usuário na rede;
- **Hashtags e menções**: encontra a quantidade de hashtags utilizadas e quantidade de menções realizadas ao perfil do usuário dentro da amostra coletada.

**Observações**

O índice de rede busca compreender se o usuário está, por exemplo, encaminhando mensagens de spam para uma certa hashtag. Perfis que possuem grandes quantidades de interações e um perfil monotemático quanto às hashtags utilizadas tendem a ter uma pontuação superior nas análises.
