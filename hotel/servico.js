var post = getElementById('convenio')

function convenio() {
    var posto1_nome = "Wayne Oil";
    var posto2_nome = "Stark Petrol";

    var posto1_alcool = parseFloat(prompt("Digite o preço do álcool no " + posto1_nome + ": "));
    var posto1_gasolina = parseFloat(prompt("Digite o preço da gasolina no " + posto1_nome + ": "));
    var posto2_alcool = parseFloat(prompt("Digite o preço do álcool no " + posto2_nome + ": "));
    var posto2_gasolina = parseFloat(prompt("Digite o preço da gasolina no " + posto2_nome + ": "));

    var valor_alcool1 = (posto1_alcool / posto1_gasolina) * 100;
    var valor_alcool2 = (posto2_alcool / posto2_gasolina) * 100;

    var mais_barato;
    var combustivel;

    if (valor_alcool1 < valor_alcool2) {
        mais_barato = posto1_nome;
        combustivel = "álcool";
    } else {
        mais_barato = posto2_nome;
        combustivel = "gasolina";
    }

    var total_a_pagar;

    if (combustivel === "álcool" && posto1_alcool < (posto1_gasolina * 0.7)) {
        total_a_pagar = 42 * posto1_alcool;
    } else {
        total_a_pagar = 42 * posto1_gasolina;
    }

    alert("O posto mais barato é o " + mais_barato + " e o combustível mais atraente é " + combustivel + ". O valor a pagar é R$ " + total_a_pagar.toFixed(2) + ".");
}

var conv = getElementById('manuten');

function manutenção() {
    var nome_empresa = prompt("Qual o nome da empresa?");
    var valor_aparelho = parseFloat(prompt("Qual o valor do serviço por aparelho?"));
    var qtde_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos em manutenção?"));
    var desconto_perc = parseFloat(prompt("Qual o percentual de desconto (0 para nenhum)?"));
    var qtde_minima_desconto = parseInt(prompt("Qual a quantidade mínima de aparelhos para dar o desconto?"));

    var valor_total = valor_aparelho * qtde_aparelhos;
    var valor_desconto = 0;

    if (qtde_aparelhos >= qtde_minima_desconto) {
        valor_desconto = valor_total * (desconto_perc / 100);
    }

    var valor_final = valor_total - valor_desconto;
    alert("O serviço de " + nome_empresa + " custará R$ " + valor_final.toFixed(2));

    var continua = prompt("Deseja informar novos dados? (S/N)").toUpperCase();

    if (continua === "S") {
        manutenção();
    } else {
        var menor_valor = valor_final;
        var nome_menor = nome_empresa;

        do {
            nome_empresa = prompt("Qual o nome da empresa?");
            if (nome_empresa !== "") {
                valor_aparelho = parseFloat(prompt("Qual o valor do serviço por aparelho?"));
                qtde_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos em manutenção?"));
                desconto_perc = parseFloat(prompt("Qual o percentual de desconto (0 para nenhum)?"));
                qtde_minima_desconto = parseInt(prompt("Qual a quantidade mínima de aparelhos para dar o desconto?"));

                valor_total = valor_aparelho * qtde_aparelhos;
                valor_desconto = 0;

                if (qtde_aparelhos >= qtde_minima_desconto) {
                    valor_desconto = valor_total * (desconto_perc / 100);
                }

                valor_final = valor_total - valor_desconto;
                alert("O serviço de " + nome_empresa + " custará R$ " + valor_final.toFixed(2));

                if (valor_final < menor_valor) {
                    menor_valor = valor_final;
                    nome_menor = nome_empresa;
                }

                continua = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
            }
        } while (continua === "S");

        alert("O orçamento de menor valor é o de " + nome_menor + " por R$ " + menor_valor.toFixed(2));
    }
}
