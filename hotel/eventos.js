var evento = getElementById('clicar')
function clicar() {
    var hora = parseInt(prompt("Olá, qual será a duração do evento?"))
    var garçom = 10.50
    var quanti_garçom = parseInt(prompt("Quantos garçons serão necessários?"))
    var um_garçom = garçom * hora
    var total_garçom = um_garçom * quanti_garçom

    alert("O custo total ficará em: R$ " + total_garçom)
    var confirma = confirm("Deseja confirmar a reserva?")

    if (confirma) {
        alert("Reserva efetuada com sucesso!")
    } else {
        alert("Ok, reserva não efetuada.")
    }

}

var buffet_evento = getElementById('buffet')
function buffet() {
    var convidados_numero = parseInt(prompt("Qual o número de convidados para o evento?"))
    var cafe = 0.2 * convidados_numero
    var agua = 0.5 * convidados_numero
    var salgados = 7 * convidados_numero
    var custo_total = cafe + agua + salgados

    if (convidados_numero > 350) {
        alert("Quantidade máxima de convidados excedida.")
    } else if (convidados_numero < 350) {
        alert("O evento precisará de " + cafe + " litro(s) de café, " + agua + " litro(s) de água, " + salgados + " salgados. O custo total do evento será de R$ " + custo_total)
    }

    var creserva = confirm("Você confirma a reserva?")
    if (creserva) {
        alert("Reserva efetuada com sucesso.")
    } else {
        alert("Ok, reserva não efetuada.")
    }
}

var auditorio = getElementById('auditorio')
function auditorio() {
    alert("Escolha o espaço do seu evento.")
    var convidados = parseInt(prompt("Qual o número de convidados que deseja convidar?"))
    var extras = convidados - 150

    if (convidados > 350) {
        alert("Quantidade de convidados excedida.")
    } else if (convidados === 350) {
        alert("O auditório Colorado é o indicado para a capacidade desejada.")
    } else if (convidados <= 150) {
        alert("O auditório Laranja é o mais indicado para a capacidade desejada.")
    } else convidados > 150 && convidados <= 220
    alert("O auditório Laranja é o mais indicado para a capacidade desejada com " + extras + " cadeiras extras.")
}


var horario = getElementById('horario')
function horario() {
    var dia_da_semana = prompt("Qual o dia da semana em que o evento será realizado?")
    var horario_semana = parseInt(prompt("Qual o horário do seu evento?"))

    if (horario_semana < 13) {
        alert("Horário indisponível. Restaurante fechado.")
    } else if (horario_semana > 22) {
        alert("Horário indisponível. Restaurante fechado.")
    } else {
        var empresa = prompt("Qual o nome da sua empresa?")
        alert("Ok, restaurante reservado para " + empresa + ". " + dia_da_semana + ", às " + horario_semana + " horas.")
    }

}