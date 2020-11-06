---
date: 2018-03-13T18:04:04-03:00
draft: false
slug: "o-que-a-nota-significa"
title: "O que a nota significa?"
layout: none
type: faq
language: pt
weight: 7
---
O algoritmo do PegaBot utiliza informações públicas dos perfis no Twitter para realizar suas análises. O objetivo é identificar características que ajudem a determinar se o perfil é mais ou menos bot. Neste momento o PegaBot se baseia em padrões de comportamento para identificar se é mais provável que um humano utilize aquele perfil ou um robô. Utilizamos os seguintes critérios:

- **Perfil do Usuário**: Algumas das informações públicas dos perfis consideradas na análise do PegaBot são o nome do perfil do usuário e quantos caracteres ele possui, quantidade de perfis seguidos (following) e seguidores (followers), texto da descrição do perfil, número de postagens (tweets) e favoritos. Aqui, elementos como a ausência de imagem de perfil e descrição, por exemplo, aumentam a probabilidade da conta ser um robô.
- **Frequência e horário**: Perfis que tuitam muito em um curto intervalo de tempo recebem uma pontuação maior, pois este é um comportamento mais parecido ao de bots (bot-likeness). Um intervalo pequeno entre cada postagem, 2 segundos por exemplo, podem indicar que a postagem foi feita por um robô. A frequência e a aleatoriedade no tempo em que as postagens são feitas também apontam características do comportamento: postagens feitas sempre no mesmo horário, às 10 horas da manhã, por exemplo, podem ter sido feitas por um robô.
- **Rede**: O algoritmo do PegaBot coleta uma amostra da linha do tempo do usuário, identificando hashtags utilizadas e menções ao perfil para realizar suas análises. O objetivo é identificar características de distribuição de informação na rede da conta analisada.
- **Análise de sentimento**: Os algoritmos do PegaBot  selecionam uma amostra de até 100 tweets mais recentes publicados pelo perfil analisado. O objetivo é identificar palavras que tornam o que é publicado pelo usuário mais ou menos negativo (sentimento).

Para uma explicação completa dos critérios, acesse a página Transparência.
