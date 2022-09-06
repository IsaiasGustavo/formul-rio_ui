var btpj = document.getElementById("btpj");

btpj.addEventListener("click", function() {

    var pj = document.getElementById("pj");
    if(pj.style.display ==="block") {
        pj.style.display ="none";
    } else{
        pj.style.display = "block";
    }

});



// Máscaras 

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

//aceitando só números

var dnNumber = document.getElementById("dnNumber");

dnNumber.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
};

cpfNumber.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
};

cnpjNumber.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
};

cepNumber.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
};

telNumber.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
};

var end = document.getElementById("end");

end.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }
};

function checaCPF (CPF) {
    if (CPF.length != 11 || CPF == "00000000000" || CPF == "11111111111" ||
    CPF == "22222222222" || CPF == "33333333333" || CPF == "44444444444" ||
    CPF == "55555555555" || CPF == "66666666666" || CPF == "77777777777" ||
    CPF == "88888888888" || CPF == "99999999999" || CPF == "01234567890")
    return "o CPF não é válido";
    soma = 0;
    for (i=0; i < 9; i ++)
    soma += parseInt(CPF.charAt(i)) * (10 - i);
    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11)
    resto = 0;
    if (resto != parseInt(CPF.charAt(9)))
    return "o CPF não é válido";
    soma = 0;
    for (i = 0; i < 10; i ++)
    soma += parseInt(CPF.charAt(i)) * (11 - i);
    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11)
    resto = 0;
    if (resto != parseInt(CPF.charAt(10)))
    return "o CPF não é válido";
          
    return "O CPF é válido";
    }

    
     

    

   // alert(checaCPF('34485861023'));

