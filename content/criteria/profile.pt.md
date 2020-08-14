---
title: "Perfil de usuário"
date: 2020-08-14T00:38:52-03:00
draft: false
menu:
slug: ""
weight: 1
---
Dados a serem coletados: Nome Nome da tela Descrição Etiqueta de verificação do Twitter Foto do perfil Número de seguidores Número de amigos Data de criação Número de Tweets Número de Favoritos

Preparação dos dados: conte o número de caracteres no nome. Conte o número de caracteres no nome da tela. Tente encontrar a subcadeia "bot" no nome ou no nome da tela. Remova todo o espaço e o sublinhado no nome e no nome da tela. semelhança do nome e do nome da tela Conte o número de caracteres na descrição Faça uma proporção do número de amigos no número de seguidores Transforme a data de criação na idade do dia da conta Calcule o número de tweets publicados por dia

Lista de subíndice:

Semelhança de nome e nome de tela
Número de dígitos no nome da tela
Comprimento do nome
Comprimento do nome da tela
Comprimento da descrição
Era
Tweets por dia
Favorito
Foto do perfil
Proporção de amigos / seguidores
Cálculo da probabilidade:

Se a conta for confirmada pelo Twitter, o resultado final será sempre sempre 0

Valor base de cada subíndice: 0,

A pontuação de similaridade é calculada comparando o número de letras e cada letra em comum, o intervalo é entre 0 e 1. Se o nome ou o nome da tela contiver a subcadeia “bot”, esse valor será 1

Número de dígitos: se for maior que 2, o número de dígitos será multiplicado por 0,12; o máximo será 1; caso contrário, o valor base será mantido.

Comprimento do nome: se for maior que 15, o comprimento será multiplicado por 0,009, o máximo será 1; caso contrário, o valor base será mantido

Comprimento do nome da tela: se for maior que 10, o comprimento será multiplicado por 0,012; o máximo será 1; caso contrário, o valor base será mantido.

Comprimento da descrição: se for menor que 10, o comprimento é multiplicado por 0,1 e removido de 1; o mínimo é 0; caso contrário, o valor base é mantido

Idade: se for mais de 90 (3 meses), a idade é multiplicada por 0,001 e removida de 1, o máximo é 0, caso contrário, 1 é usado

Tweets por dia: Número de tweets por dia multiplicado por 0,01 (sem limite máximo)

Favorito: o número de favoritos é multiplicado por 0,01 e removido de 1, no mínimo em 0

Foto do perfil: se existe uma foto do perfil, a pontuação é a pontuação base; caso contrário, é 10 Proporção de amigos / seguidores: Removemos a proporção de 1, no mínimo, a 0

Em seguida, uma média de todo o subíndice é calculada e usada para a pontuação do usuário.

Mais explicações: Uma conta verificada no Twitter (etiqueta azul) significa que a conta foi verificada por um agente humano, que confirmou que a conta é autêntica. A conta teve que fornecer muitas informações e validá-las com um número de telefone. Podemos supor que um especialista para avaliar uma conta sempre será melhor do que um algoritmo para localizar se uma conta é humana ou bot.

O valor base pode ser 0, mas significa que começamos considerando todos os perfis como humanos. Isso não é muito bom. Pode ser 1, então começamos assumindo que todas as contas verificadas são bot, é o pior. O número oficial do Twitter é 15% das contas são bot. Então, usamos esse valor base (0,15) para nossos cálculos

Na maioria das vezes, os seres humanos criarão um nome de tela semelhante ao seu nome. Um bot pode, às vezes, gerar dois nomes totalmente diferentes para isso. Existem alguns bot oficiais que colocam "bot" em seu nome. Se for verdade, a Similaridade será igual a 1.

Um nome longo ou nome de tela é suspeito, um humano normalmente não precisa de tanto personagem. Mas se o bot gerar um nome aleatório, pode ser longo às vezes.

Para a descrição, é o oposto: é mais provável que um bot faça uma descrição vazia, ou muito curta, do que longa.

O número usual de dígitos (se usado) em um nome é geralmente dois para um ser humano, que pode representar os dois primeiros números de um CEP, uma idade ou um ano de nascimento. Mais de 2, torna-se suspeito e pode deixar pensar que o nome foi gerado aleatoriamente

Se você precisar verificar uma nova conta no Twitter (menos de três meses), podemos considerar essa conta suspeita. Então, usamos o valor de 1 (certamente um bot) para a média, após 3 meses. A pontuação começa a diminuir, com um mínimo de 0, para cada dia mais na idade.

Tweets por dia é a única pontuação que não tem um máximo, se um usuário pode postar mais de 5.000 tweets em um dia, é quase certamente um bot, portanto, o score máximo não se limita a influenciar mais a média

A maioria dos bot não tem uma foto de perfil, então o valor de 1 é usado no caso de nenhuma imagem.

Existem muitos tipos de bots, às vezes eles estão trabalhando sozinhos e apenas tentam seguir muitas pessoas para obter muitos seguidores em troca e serem mais influentes. Às vezes, os bots são seguidos automaticamente por todos os outros bot da mesma rede. Um usuário humano normal geralmente possui um número de seguidores próximo ao número de amigos. Quanto mais a proporção estiver longe de 1, mais a conta será considerada como bot

Teste / Exemplos:

Perfil Nosso resultado Índice de usuários do botômetro
resultado
Realidade
@ solneversets100 68% 61% Bot
@ Betelgeuse_3 42% 47% Bot
@infinite_scream 41% 44% Bot
@tinycarebot 45% 35% Bot
@Tremor de terra
