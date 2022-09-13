$('#btpj').click(
    function() {
        $('#pj').fadeToggle(750);
        $('#pj').css('display','flex');
    }
);


/*var btpj = document.getElementById("btpj");

btpj.addEventListener("click", function() {

    var pj = document.getElementById("pj");
    if(pj.style.display ==="block") {
        pj.style.display ="none";
    } else{
        pj.style.display = "block";
    }

});*/



// Máscaras 

$('#cpfNumber').mask("000.000.000-00");

$('#cnpjNumber').mask("00.000.000/0000-00");

$('#dnNumber').mask("00/00/0000");

$('#telNumber').mask("(00)0000-0000");

$('#cep').mask("00000-000");


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

cep.addEventListener("keypress", function(e) {

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




   function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};


$('#senha').keypress(function() {

})