
const form = document.getElementById('form');
const campo = document.getElementsByClassName('required');
const span = document.getElementsByClassName('span-required');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate(); 
    emailValidate();
    birthData();
    cpfValidate();
    telValidate();
    nameMotherValidate();
    cepValidate();
    bairroValidate();
    ruaValidate();
})

function setErro(index) {
    campo[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeErro(index) {
    campo[index].style.border = '';
    span[index].style.display = 'none';
}

function nameValidate() {
    const nome = document.getElementById('nome').value;
    if(nome.trim() === ""){
        setErro(0);
        span[0].textContent = "O campo não pode estar vazio";
        
    }else if(campo[0].value.length < 3) {
        setErro(0);
        span[0].textContent = "O nome deve ter no mínimo 3 caracteres";
    }else{
        removeErro(0);
        span[0].textContent = "";
    }
}

function emailValidate() {
    const email = document.getElementById('email').value;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

    if(email === "") {
        setErro(1);
        span[1].textContent = "O campo não pode estar vazio";   
    }else if(emailRegex.test(campo[1].value)) {
        removeErro(1);
        span[1].textContent = "";   
    }else {
        setErro(1);
        span[1].textContent = "Adicione um email válido";
    }
}

function birthData() {
    const birth = document.getElementById('date').value;
    const birthRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    
    if(birth === "") {
        setErro(2);
        span[2].textContent = "O campo não pode estar vazio";
    }else if(birthRegex.test(campo[2].value)) {
        removeErro(2);
        span[2].textContent = "";
    }else {
        setErro(2);
        span[2].textContent = "Adicione uma data valido";
    }

    date.addEventListener('keypress', () => {
        let dateLength = date.value.length;

        if(dateLength === 2 || dateLength === 5) {
            date.value += '/';
        }
    })
}

function cpfValidate() {
    const cpfValidate = document.getElementById('cpf').value;
    const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
    
    if(cpfValidate === "") {
        setErro(3);
        span[3].textContent = "O campo não pode estar vazio";
    }else if(cpfRegex.test(campo[3].value)) {
        console.log('valido')
        removeErro(3);
        span[3].textContent = "";
    }else {
        setErro(3);
        span[3].textContent = "Adicione o cpf valido";
    }

    cpf.addEventListener('keypress', () => {
        let cpfLength = cpf.value.length;

        if(cpfLength === 3 || cpfLength === 7) {
            cpf.value += '.';
        }else if( cpfLength === 11) {
            cpf.value += '-';
        }
    })
}

function telValidate() {
    const telValidate = document.getElementById('tel').value;
    const telRegex = /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/;
    
    if(telValidate === "") {
        setErro(4);
        span[4].textContent = "O campo não pode estar vazio";
    }else if(campo[4].value.length < 14) {
        setErro(4);
        span[4].textContent = "Adicione um número valido";
    }else if(!telRegex.test(campo[4].value)) {
        removeErro(4);
        span[4].textContent = "";
    }

    tel.addEventListener('input', () => {
        let telLength = tel.value;

        if(telLength.length == 2) {
            tel.value += ') ';
            tel.value = '(' + tel.value;
        }else if( telLength.length == 10) {
            tel.value += '-';
        }
    });
}

function nameMotherValidate() {
    const nomeMae = document.getElementById('nomemae').value;
    if(nomeMae.trim() === ""){
        setErro(5);
        span[5].textContent = "O campo não pode estar vazio";
        
    }else if(campo[5].value.length < 3) {
        setErro(5);
        span[5].textContent = "O nome deve ter no mínimo 3 caracteres";
    }else{
        removeErro(5);
        span[5].textContent = "";
    }
}

//        ENDEREÇO             #######################################################################################

function cepValidate() {
    const cepValidate = document.getElementById('cep').value;
    
    if(cepValidate === "") {
        setErro(6);
        span[6].textContent = "O campo não pode estar vazio";
    }else {
        removeErro(6);
        span[6].textContent = "";
    }
}

function pesquisacep(valor) {
     var cep = valor.replace(/\D/g, '');

     if (cep != "") {
         var validacep = /^[0-9]{8}$/;

         if(validacep.test(cep)) {
             document.getElementById('rua').value = "...";
             document.getElementById('bairro').value = "...";
             document.getElementById('cidade').value = "...";
             document.getElementById('uf').value = "...";

             var script = document.createElement('script');

             script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

             document.body.appendChild(script);

         }
         else {
             limpa_formulario_cep();
             alert("Formato de CEP inválido.");
         }
     }
     else {
         limpa_formulario_cep();
     }
}

function limpa_formulario_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        limpa_formulario_cep();
        alert("CEP não encontrado.");
    }
}