function maiorDeIdade(data) {
    if (!data) return false;

    const hoje = new Date();
    const nascimento = new Date(data);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade >= 18;
}

function enviarForm() {

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const dataNascimento = document.getElementById('dataNascimento');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirma-senha');
    const estados = document.getElementById('estados');

    //nome.classList.remove('borda-erro');
    //email.classList.remove('borda-erro');
    //dataNascimento.classList.remove('borda-erro');
    //senha.classList.remove('borda-erro');
    //confirmarSenha.classList.remove('borda-erro');
    const idioma = document.getElementsByName('idioma');

    idioma.forEach(element => {
        (element.classList.remove('borda-erro'))
    });
    estados.classList.remove('borda-erro');

    let idioma_selecionado;
    idioma.forEach(element => {
        if (element.checked) {
            idioma_selecionado = element.value
        }
    })


  /*  if (nome.value.length < 2) {
        nome.classList.add('borda-erro');
        alert('O nome deve ter pelo menos 2 caracteres.');
        return;
    }

    if (!maiorDeIdade(dataNascimento.value)) {
        dataNascimento.classList.add('borda-erro');
        alert('Você deve ser maior de 18 anos.');
        return;
    }

    if (senha.value.length === 0) {
        senha.classList.add('borda-erro');
        alert('A senha não pode estar vazia.');
        return;
    }

    if (confirmarSenha.value.length === 0) {
        confirmarSenha.classList.add('borda-erro');
        alert('A confirmação de senha não pode estar vazia.');
        return;
    }
    if (senha.value !== confirmarSenha.value) {
        senha.classList.add('borda-erro');
        confirmarSenha.classList.add('borda-erro');
        alert('As senhas não coincidem!');
        return;
        
    }
    
    if(!estados.value){
        alert("Selecione o estado!!!");
    }
*/
   // alert(`Formulário enviado com sucesso!\nNome: ${nome.value}\nEmail: ${email.value}`);
    
    let objetoBack = {};
    objetoBack.nome = nome.value;
    objetoBack.email = email.value;
    objetoBack.dataNascimento = dataNascimento.value;
    objetoBack.senha = senha.value;
    objetoBack.idioma = idioma_selecionado;
    objetoBack.estados = estados.value
    

    console.log(objetoBack);

}
/*let inputNome = document.getElementById('nome');
inputNome.addEventListener('input', function () {
    if (inputNome.value.length >= 2) {
        inputNome.classList.remove('borda-erro');
    }
});
let inputEmail = document.getElementById('email');
inputEmail.addEventListener('input', function () {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(inputEmail.value)) {
        inputEmail.classList.remove('borda-erro');
    }
});
function mostrarOutro() {
    const outroCheckbox = document.getElementById('outro-checkbox');
    const outroIdiomaDiv = document.getElementById('outro-idioma');
    
    if (outroCheckbox.checked) {
        outroIdiomaDiv.style.display = 'block';
    } else {
        outroIdiomaDiv.style.display = 'none';
    }
}
*/

