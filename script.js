
const form = document.getElementById('form');
const campo = document.getElementsByClassName('required');
const span = document.getElementsByClassName('span-required');

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); 

// })

function blockLetters(event) {
    const key = event.key;
    if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Tab') {
      event.preventDefault();
    }
}

function setError(index, mensage) {
    campo[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
    span[index].textContent = mensage;
}

function removeError(index) {
    campo[index].style.border = '';
    span[index].style.display = 'none';
    span[index].textContent = '';
}

function nameValidateField(index, valueName) {
    if (valueName.trim() === "") {
        setError(index, "O campo não pode estar vazio");
    } else if (valueName.length < 3) {
        setError(index, "O nome deve ter no mínimo 3 caracteres");
    } else {
        removeError(index);
    }
}

function nameValidate(inputId, index) {
    const valueName = document.getElementById(inputId).value;
    nameValidateField(index, valueName);
}

function validateField(inputId, index, regex, mensageErro) {
    const valueField = document.getElementById(inputId).value;

    if (valueField.trim() === "") {
        setError(index, "O campo não pode estar vazio");
    } else if (!regex.test(valueField)) {
        setError(index, mensageErro);
    } else {
        removeError(index);
    }
}

function emailValidate() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    validateField('email', 1, emailRegex, "Adicione um email válido");
}

function birthData() {
    const birthRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    validateField('date', 2, birthRegex, "Adicione uma data válida");

    date.addEventListener('keypress', () => { 
        let dateLength = date.value.length;

        if(dateLength === 2 || dateLength === 5) {
            date.value += '/';
        }
    })
}

function cpfValidate() {

    const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
    validateField('cpf', 3, cpfRegex, "CPF inválido")

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

    const telRegex = /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/;
    validateField('tel', 4, telRegex, "Adicione um número válido")

    tel.addEventListener('input', () => {
        let telLength = tel.value;

        if(telLength.length === 2) {
            tel.value += ') ';
            tel.value = '(' + tel.value;
        }else if( telLength.length === 10) {
            tel.value += '-';
        }
    });
}

//        ENDEREÇO             #######################################################################################

function cepValidate() {
    const cepRegex = /\d{5}-\d{3}/;
    validateField('cep', 6, cepRegex, "CEP inválido")

    cep.addEventListener('input', () => { 
        let cepLength = cep.value;

        if(cepLength.length === 5) {
            cep.value += '-';
        }
    });
}

function pesquisacep(valor) {
     let cep = valor.replace(/\D/g, ''); // o replace com o regex (/\D/g, ""), ele vai substituir os dados que não são numéricos por ""(nada)

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