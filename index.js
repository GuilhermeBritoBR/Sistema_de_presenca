function login()   {
    let cpf = prompt("Digite seu CPF:");
    let senha = prompt("Digite sua senha:");
    const dados ={
        'cpf': ['888', '999', '1010', '1111', '1212',],
        'senha': ['123', '123', '123', '123', '123',],
    }
    if( cpf === dados.cpf[0])
    if( senha === dados.senha[0]){
        window.location.assign("user.html");
    }
    else{
        alert("Senha ou CPF incorreto!");
    }else{
        alert("Senha ou CPF incorreto!");
    }

}
function registrar{
    var aluno = document.getElementById("aluno");
    var falta = document.getElementById("falta");
}