console.log("exercicio 3");


const login = (email = "", password = "") => {

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let regexPassword = /[0-9a-zA-Z$*&@#]{6,}/

    if(regexEmail.test(email) === false && regexPassword.test(password) === false){
        console.log("E-mail inválido e senha deve possuir no mínimo 6 caracteres.")
    } if(regexEmail.test(email) === false && regexPassword.test(password) === true){
        console.log("E-mail inválido.")
    } if(regexEmail.test(email) === true && regexPassword.test(password) === false){
        console.log("Senha deve possuir no mínimo 6 caracteres.")
    } else if(regexEmail.test(email) === true && regexPassword.test(password) === true){
        console.log("Login bem-sucedido!")
    }
    
}

login("gioivieira@gmail.com.br", "123456")

