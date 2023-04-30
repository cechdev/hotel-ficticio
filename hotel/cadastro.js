var total = 0
var gratuidade = 0
var quantidade = 0
var inteira = 0
var meia = 0
alert("A diária, nesse sistema de cadastramento, é de R$100,00")

while (true) {
    var nome_hospede = prompt("Qual o nome do hóspede? Digite PARE para encerrar.")

    if (nome_hospede.toUpperCase() == "PARE".toUpperCase()) {
        break
    }

    var idade = parseInt(prompt("Qual a idade de " + nome_hospede + "?"))

    if (idade >= 6 && idade <= 60) {
        alert(nome_hospede + " cadastrado(a) com sucesso.");
        quantidade++;
        inteira++;
    } else if (idade < 6) {
        alert(nome_hospede + " cadastrado(a) com sucesso. " + nome_hospede + " possui gratuidade.")
        gratuidade++;
        quantidade++;
    } else if (idade > 60) {
        alert(nome_hospede + " cadastrado(a) com sucesso. " + nome_hospede + " paga meia.")
        quantidade++;
        meia++;
        total += 50
    }
}

alert("Foram registrados " + inteira + " hospedagens inteiras, " + gratuidade + " gratuidades e " + meia + " meias. O valor total é: R$" + (quantidade - gratuidade) * 100 + ",00.")



var hospedes = [];

function cadastrarHospede() {
    var nome = prompt("Qual o nome do hóspede?");
    hospedes.push(nome);
    alert(nome + " foi cadastrado com sucesso!");
}

function pesquisarHospede() {
    var nome = prompt("Qual o nome do hóspede que deseja pesquisar?");
    var encontrado = false;
    for (var i = 0; i < hospedes.length; i++) {
        if (hospedes[i] === nome) {
            encontrado = true;
            alert("Hóspede " + nome + " foi encontrado.");
            break;
        }
    }
    if (!encontrado) {
        alert("Hóspede " + nome + " não encontrado.");
    }
}

function listarHospedes() {
    alert("Hóspedes cadastrados:\n\n" + hospedes.join("\n"));
}

function menu() {
    var opcao = prompt(
        "Selecione uma opção:\n\n" +
        "1. Cadastrar\n" +
        "2. Pesquisar\n" +
        "3. Listar\n" +
        "4. Sair"
    );
    switch (opcao) {
        case "1":
            if (hospedes.length < 15) {
                cadastrarHospede();
            } else {
                alert("Máximo de cadastros atingido!");
            }
            break;
        case "2":
            pesquisarHospede();
            break;
        case "3":
            listarHospedes();
            break;
        case "4":
            return;
        default:
            alert("Opção inválida!");
    }
    menu();
}

menu();
