function validar() {
    var nome = formulario.nome.value;
    var mail = formulario.mail.value;
    if (nome == "") {
        window.alert("Preencha o campo com seu nome!");
        formulario.nome.focus();
    }
    if (mail == "") {
        window.alert("Preencha o campo com seu e-mail!");
        formulario.mail.focus();
    }
}