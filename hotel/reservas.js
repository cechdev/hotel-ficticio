var evento = getElementById ('clicar')
function clicar() {
    var nome = prompt("Qual o seu nome?")
    alert("Bem-vindo ao O Muy Belo Hotel, " + nome);
    var valordiario = parseInt(prompt("Qual o valor padrão da diária?"))
    if(valordiario <= 0){
        alert("Valor inválido")
        var valordiario
    }

    var dias = parseInt(prompt("Quantas diárias são desejadas?"))

    if(dias <=0 ){
        alert("Valor inválido")
    } else if(dias > 30){
        alert("Limite de dias excedido")
    } else{
        var total = valordiario * dias
        alert("O valor total de " + valordiario + " reais por " + dias + " dias é de: " + total)
    }

var nome_hospede = prompt("Qual o nome do hospéde?")
var confirma = confirm(nome + ", você confirma a hospedagem de " + nome_hospede + "?")
if(confirma) {
    alert("Ok, reserva efetuada com sucesso para " + nome_hospede + ", no valor de: R$ " + total)
} else{
    alert("Ok, reserva não efetuada.")
}
}