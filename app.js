/*Criar botão*/

var btpj = document.getElementById("btpj");

btpj.addEventListener("click", function() {

    var pj = document.getElementById("pj");
    pj.classList.toggle("show");
});

/*Validação do CPF*/

var cpfNumber = document.getElementById("cpfNumber");

cpfNumber.addEventListener("keypress", function() {
    var cpfLength = cpfNumber.value.length

    if(cpfLength === 3 || cpfLength === 7) {
        cpfNumber.value += '.'
    }else if(cpfLength === 11) {
        cpfNumber.value += '-'
    }
});

var cnpjNumber = document.getElementById("cnpjNumber");

cnpjNumber.addEventListener("keypress", function() {
    var cnpjLength = cnpjNumber.value.length

    if(cnpjLength === 2 || cnpjLength === 6) {
        cnpjNumber.value += '.'
    }else if(cnpjLength === 10) {
        cnpjNumber.value += '/'
    }else if(cnpjLength === 15) {
        cnpjNumber.value += '-'
    }
});

var telNumber = document.getElementById("telNumber");

telNumber.addEventListener("keypress", function() {
    var telLength = telNumber.value.length

    if(telLength === 0) {
        telNumber.value += '('
    }else if(telLength === 3) {
        telNumber.value += ')'
    }else if(telLength === 8) {
        telNumber.value += '-'
    }
});

var cepNumber = document.getElementById("cepNumber");

cepNumber.addEventListener("keypress", function() {
    var cepLength = cepNumber.value.length

    if(cepLength === 5) {
        cepNumber.value += '-'
    }
});