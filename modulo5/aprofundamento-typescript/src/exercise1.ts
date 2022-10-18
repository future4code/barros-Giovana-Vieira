/* a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
Resposta: Acusou erro pois atribui que ela deveria ter um valor do tipo "string" e tentei atribuir um valor do tipo "number". */

let myString: string = "Hello World!"

/* b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? 
Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor? 
Resposta: Posso usar um | para possibilitar que a variável possa receber os dois tipos de valores. */

let myNumber: string | number = 8

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string. */

/* d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso. */

enum Colors {
    RED= "Red",
    BLACK= "Black",
    ORANGE= "Orange"
}

type Person = {
    name: string,
    age: number,
    favoriteColor: string
}

let person1: Person = {
    name: "Giovana",
    age: 23,
    favoriteColor: Colors.RED
}

let person2: Person = {
    name: "Júlia",
    age: 27,
    favoriteColor: Colors.BLACK
}

let person3: Person = {
    name: "Eloisa",
    age: 20,
    favoriteColor: Colors.ORANGE
}