let valorT = 0


document.addEventListener("DOMContentLoaded", function () {
    var botoes = document.querySelectorAll("#menu button");

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", function () {
            var nome = this.getAttribute("data-nome");
            var valor = parseFloat(this.getAttribute("data-valor"));

            adicionarPedido(nome, valor);
            
        });
    }

    function adicionarPedido(nome, valor) {
        var tabelaPedidos = document.getElementById("tabela-pedidos").getElementsByTagName('tbody')[0];
        var novaLinha = tabelaPedidos.insertRow(tabelaPedidos.rows.length);

        var cell1 = novaLinha.insertCell(0);
        var cell2 = novaLinha.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = valor.toFixed(2); // Formata o valor com duas casas decimais
        // Atualizar o conteúdo da tag de span com o novo valor
valorT += valor
        document.getElementById("valorTotal").textContent = "R$ " + valorT;
    }
});
