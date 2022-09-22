$('#btpj').click(
    function() {
        $('#pj').fadeToggle(750);
        $('#pj').css('display','flex');
    }
);

$('#fc').validate({
    rules:{

        nome:{
            required:true,
            minlength: 4
        },
        sobrenome:{

        },
        emailNumber:{
            required:true,
            email:true
        },
        senha:{
            required:true,
            rangelength:[4,10]
        },
        cSenha:{
            required:true,
            equalTo: "#senha"
        },
        telNumber:{
            phoneUS:true,
            number:true
        },
        dnNumber:{
            dateDE:true
        },
        rs:{
            required:true
        },
        cnpjNumber:{
            numberDE:true
        },
        nf:{
            required:true
        },
        tc:{
            required:true
        }
    },    
    messages:{
        nome:{
            required: "Este Campo é Obrigatório",
            minlength: "O Nome deve ter no mínimo 4 caracteres"
        },
        sobrenome:{
    
        },
        emailNumber:{
            required: "Este Campo é Obrigatório",
            email: "insira um Email válido"
        },
        senha:{
            required: "Este Campo é Obrigatório",
            rangelength: "Sua senha deve ter de 4 à 10 caracteres"
        },
        cSenha:{
            required: "Este Campo é Obrigatório",
            equalTo: "Verifique se a Senha está correta"
        },
        telNumber:{
            phoneUS:true,
            number:true
        },
        dnNumber:{
            dateDE:true
        },
        rs:{
            required: "Este Campo é Obrigatório"
        },
        cnpjNumber:{
            
        },
        nf:{
            required: "Este Campo é Obrigatório"
        },
        tc:{
            required: "Aceite os Termos e Condições"
        }
    }
});




// Máscaras 

$('#cpf_verifica').mask("000.000.000-00");

$('#cnpjNumber').mask("00.000.000/0000-00");

$('#dnNumber').mask("00/00/0000");

$('#telNumber').mask("(00)0000-0000");

$('#cep').mask("00000-000");


//aceitando só números

$('#dnNumber').keypress(function(e) {

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

$('#cpf_verifica').keypress(function(e) {

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

$('#cnpjNumber').keypress(function(e) {

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

$('#cep').keypress(function(e) {

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

$('#telNumber').keypress(function(e) {

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

function validacpf () {

    var cpf = document.formulario1.cpf_verifica.value;
    cpf = cpf.replace( "." , "" );
    cpf = cpf.replace( "-" , "" );
    cpf = cpf.replace( "." , "" );
    
    if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"){
    document.getElementById("cpf_verifica").style.backgroundColor = ""; //isso deixa o campo avermelhado
    document.formulario1.cpf_verifica.focus();
    return false;
    } else {
    var soma = 0;
    soma = soma + (parseInt(cpf.substring( 0 , 1))) * 10;
    soma = soma + (parseInt(cpf.substring( 1 , 2))) * 9;
    soma = soma + (parseInt(cpf.substring( 2 , 3))) * 8;
    soma = soma + (parseInt(cpf.substring( 3 , 4))) * 7;
    soma = soma + (parseInt(cpf.substring( 4 , 5))) * 6;
    soma = soma + (parseInt(cpf.substring( 5 , 6))) * 5;
    soma = soma + (parseInt(cpf.substring( 6 , 7))) * 4;
    soma = soma + (parseInt(cpf.substring( 7 , 8))) * 3;
    soma = soma + (parseInt(cpf.substring( 8 , 9))) * 2;
    }
    
    var resto1 = (soma * 10) % 11;
    
    if ((resto1 == 10) || (resto1 == 11)) {
    resto1 = 0;
    }
    
    var soma = 0;
    soma = soma + (parseInt(cpf.substring( 0 , 1))) * 11;
    soma = soma + (parseInt(cpf.substring( 1 , 2))) * 10;
    soma = soma + (parseInt(cpf.substring( 2 , 3))) * 9;
    soma = soma + (parseInt(cpf.substring( 3 , 4))) * 8;
    soma = soma + (parseInt(cpf.substring( 4 , 5))) * 7;
    soma = soma + (parseInt(cpf.substring( 5 , 6))) * 6;
    soma = soma + (parseInt(cpf.substring( 6 , 7))) * 5;
    soma = soma + (parseInt(cpf.substring( 7 , 8))) * 4;
    soma = soma + (parseInt(cpf.substring( 8 , 9))) * 3;
    soma = soma + (parseInt(cpf.substring( 9 , 10))) * 2;
    
    var resto2 = (soma *10) % 11;
    if ((resto2 == 10) || (resto2 == 11)) {
    resto2 = 0;
    }
    
    if (
    (resto1 == (parseInt(cpf.substring( 9 , 10)))) &&
    (resto2 == (parseInt(cpf.substring( 10 , 11)))) ) {
    return true;
    } else {
    document.getElementById("cpf_verifica").style.backgroundColor = "";
    document.formulario1.cpf_verifica.focus();
    return false;
    }
    
    }




$('#cnpjNumber').keypress(
    
    function _cnpj(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');
    
        if (cnpj == '') return false;
    
        if (cnpj.length != 14)
            return false;
    
     
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
    
     
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
    
        return true;
    
    });



    $('#emailNumber').keypress(

    function validacaoEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $('#sSi').text("E-mail valido");
        }
        else{
            $('#sSi').text("E-mail valido").css('color','red');
        }
        });