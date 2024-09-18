
const form = document.getElementById('form');
const campo = document.getElementsByClassName('required');
const span = document.getElementsByClassName('span-required').textContent;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate() 
    emailValidate()
    birthData() // ESTA FUNÇÃO NÃO ESTÁ CORRESPONDENDO A ESSE EVENTO
})

function setErro(index) {
    campo[index].style.border = '2px solid #e63636';
    console.log('test')
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
    
        span = "invalido"
       
    }else if(campo[0].value.length < 3) {
        setErro(0);
        //  span.textContent = "O campo deve ter no mínimo 3 caracteres"
    }else{
        removeErro(0)
    }
}

function emailValidate() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

    if(emailRegex.test(campo[1].value)) {
        removeErro(1)   
    }else {
        setErro(1)
    }

    // O CAMPO ESTÁ VALIDANDO CORRETAMENTE
}

function birthData() {
    const birth = document.getElementById('nascimento').value;
    
    if(birth === "") {
        console.log('campo vazio')
    
    }else {
        console.log('valido')
    }

    // A LÓGICA DEU CERTO, PORÉM, QUERO ADICIONAR A FUNÇÃO SETERRO NO CAMPO PARA DISSPARAR A BORDA VERMELHA
}