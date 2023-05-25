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
var db = openDatabase("Banco", "3.42.0", "Mybase", 4048);
db.transaction(function(criar){
criar.executeSql("CREATE TABLE list (id INTEGER PRIMARY KEY,aluno TEXT,falta TEXT)");
})
function registrar()  {
    var aluno = document.getElementById('aluno').value;
    var falta = document.getElementById('falta').value;
    db.transaction(function(armazenar){
    armazenar.executeSql("INSERT INTO list (aluno,falta) VALUES (?,?)", [aluno,falta]);
})
}