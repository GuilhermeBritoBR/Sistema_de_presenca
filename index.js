function login()   {
    var cpf = prompt("Digite seu CPF:").value;
    var senha = prompt("Digite sua senha:").value;
    var dados ={
        'cpf': ['888', '999', '1010', '1111', '1212'],
        'senha': ['123', '123', '123', '123', '123'],
    }
    if( (dados.cpf.includes(cpf)) )
    if( (dados.senha.includes(senha))){
        window.location.assign("user.html");
    }
    else{
        alert("Senha ou CPF incorreto!");
    }else{
        alert("Senha ou CPF incorreto!");
    }

}