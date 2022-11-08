CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL, 
    salary FLOAT NOT NULL, 
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

/* a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. 
Explique os demais comandos que estão nessa query.
Resposta: VARCHAR é uma string com o seu limite de caracteres especificado dentro de (), DATE é do tipo data YYYY-MM-DD, PRIMARY KEY é um tipo de chave única dentro da tabela
e NOT NULL representa que o valor passado para coluna não pode ser nulo.

b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.
Resposta: O comando "SHOW DATABASES" me informa o nome do meu banco de dados e o comando "SHOW TABLES" o nome das minhas tabelas.

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.
Resposta: O comando "DESCRIBE Actor" me mostra as especificações de tipo de dados e restrições da minha tabela informada. */

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES ("001","Tony Ramos", 40000, "1948-08-25", "male");

-- a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES ("002", "Glória Pires",1200000, "1963-08-23", "female");

/* b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. 
Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. 
Resposta: "Entrada duplicada '002' para chave 'PRIMÁRIA'." Este erro aconteceu pois a chave primária é uma chave única na tabela. */

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES ("002", "Giovana Vieira", 1400, "1999-04-01", "female");

/* Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e 
explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta */

INSERT INTO Actor (id, `name`, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- c) Resposta: Não funcionou pois os valores foram todos passados, mas faltou informar todos os parâmetros.alter

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- d) Resposta: Não funcionou pois o parâmetro e o valor de 'name' não foram informados.

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- e) Resposta: Não funcionou pois o valor do parâmetro 'birth_day' precisa ser informado entre aspas.

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
  "004",
  "Milton Gonçalves",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
	"006",
    "Kaitlyn Dever",
    55000.28,
	"1996-12-21",
    "female"
);

INSERT INTO Actor (id, `name`, salary, birth_date, gender)
VALUES(
	"007",
    "Michael Keaton",
    150000,
    "1951-09-05",
    "male"
);

SELECT * FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE `name` = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";

-- c) Retornou uma tabela vazia, pois não tem nenhum gender = "invalid"

SELECT id, `name`, salary FROM Actor WHERE salary < 500000;

SELECT id, `name` from Actor WHERE id = "002";

SELECT * FROM Actor WHERE (`name` LIKE "A%" OR `name` LIKE "J%") AND salary > 300000;

SELECT * FROM Actor WHERE `name` NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE `name` LIKE "%G%" OR `name` LIKE "%g%";

SELECT * FROM Actor WHERE (`name` LIKE "%A%" OR `name` LIKE "%a%" OR `name` LIKE "%G%" OR `name` LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Films (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lançamento DATE NOT NULL,
    avaliação FLOAT DEFAULT 5
);

INSERT INTO Films (nome, sinopse, data_de_lançamento, avaliação)
VALUES ("Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);

INSERT INTO Films (nome, sinopse, data_de_lançamento, avaliação)
VALUES ("Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

INSERT INTO Films (nome, sinopse, data_de_lançamento, avaliação)
VALUES ("Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Films (nome, sinopse, data_de_lançamento, avaliação)
VALUES ("Era Uma Vez", "Um garoto da favela que trabalha em um quiosque de uma prestigiosa praia do Rio de Janeiro se apaixona pela filha de um milionário. Eles seguem o romance apesar das objeções do pai da menina.", "2008-07-25", 7);

SELECT id, nome, avaliação FROM Films WHERE id = 2;

SELECT * FROM Films WHERE nome = "Era Uma Vez";

SELECT id, nome, sinopse FROM Films WHERE avaliação >= 7;

/* Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra `vida`

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

c) Procure por todos os filmes que já tenham lançado

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.  */

SELECT * FROM Films WHERE nome LIKE "%vida%";

SELECT * FROM Films WHERE nome LIKE "%Flor%" OR sinopse LIKE "%Flor%";

SELECT * FROM Films WHERE data_de_lançamento < CURDATE();

SELECT * FROM Films WHERE (data_de_lançamento < "2022-11-08") AND (nome LIKE "%Vez%" OR sinopse LIKE "Vez%") AND avaliação > 7;
