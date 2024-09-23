
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
        console.log('valido')
        removeErro(4);
        span[4].textContent = "";
    }
    // cpf.addEventListener('keypress', () => {
    //     let cpfLength = cpf.value.length;

    //     if(cpfLength === 3 || cpfLength === 7) {
    //         cpf.value += '.';
    //     }else if( cpfLength === 11) {
    //         cpf.value += '-';
    //     }
    // })
}