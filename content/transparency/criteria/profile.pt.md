---
title: "Perfil de usuário"
date: 2020-08-14T00:38:52-03:00
draft: false
menu:
layout: none
slug: ""
weight: 1
intro: "Algumas das informações públicas dos perfis consideradas na análise do PegaBot são o nome do perfil do usuário, e quantos caracteres ele possui, quantidade de perfis seguidos (following) e seguidores (followers), texto da descrição do perfil, número de postagens (tweets) e favoritos."
language: pt
rootOf: false
---
Algumas das informações públicas dos perfis consideradas na análise do PegaBot são o nome do perfil do usuário, e quantos caracteres ele possui, quantidade de perfis seguidos (following) e seguidores (followers), texto da descrição do perfil, número de postagens (tweets) e favoritos.
Após coletar as informações, os algoritmos do PegaBot processam e transformam  os dados recebidos em variáveis que compõem o cálculo final de probabilidade.

Como o PegaBot prepara os dados:

- Conta o número de caracteres no nome do usuário (arroba/handle);
- Conta o número de caracteres do nome do perfil do usuário;
- Realiza uma busca da palavra "bot" no nome do usuário;
- Realiza comparações entre o nome do usuário (arroba/handle) com seu nome de perfil e busca similaridades em número de caracteres.

O que o PegaBot analisa:

- **Semelhança de nome do usuário e nome**: compara cada uma das letras que compõe o nome do usuário (arroba/handle) e o nome que aparece no perfil. Caso exista a palavra "bot", um peso maior será adicionado.
- **Número de dígitos no nome do usuário**: Busca por uma composição de nome de perfil que contenha letras e números. Caso existam uma quantidade superior a dois dígitos na composição, maior peso é adicionado.
- **Comprimento do nome**: pesos maiores são adicionados em nomes que possuem uma quantidade superior a 15 caracteres.
- **Comprimento do nome  do usuário (ou arroba)**: pesos maiores são adicionados em nomes que possuem uma quantidade superior a 10 caracteres.
- **Comprimento da descrição do perfil**: pesos maiores são adicionados em descrições de perfil que possuem uma quantidade de caracteres inferior a 10.
- **Idade do perfil**: Perfis com uma data de criação inferior a 3 meses (90 dias) ganham uma pontuação maior.
- **Número de Tweets**: Perfis que tuitam muito em um curto intervalo de tempo recebem uma pontuação maior.
- **Favoritos**: A quantidade de favoritos de um perfil também é considerada. Perfis com maior quantidade de favoritos recebem uma pontuação maior.
- **Foto do perfil**: Verificamos a existência de uma foto de perfil. Perfis que não possuem, recebem uma pontuação maior.

**Observações**

A presença do selo de verificação oferecido pelo Twitter influencia positivamente nos resultados, uma vez que a plataforma possui um procedimento manual para validar a identidade desses usuários.
