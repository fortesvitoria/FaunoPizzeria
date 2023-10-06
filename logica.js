//criando variáveis

//variavel do valor inserido no span
let valor = 0

//botoes
let item01 = document.getElementById("item01")
let item02 = document.getElementById("item02")
let tabelaCorpo = document.getElementById("tabela-corpo");
let newRow = tabelaCorpo.insertRow();
let valor01 = 19
let valor02 = 47
let indice = 1
let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);




item01.addEventListener("click", function () {
    // Adicionar 1 ao valor atual
    valor += valor01;
    // Atualizar o conteúdo da tag de span com o novo valor
    document.getElementById("valor").textContent = "R$ " + valor;

    cell1 = newRow.insertCell(0);
    cell1.textContent = "Pizza"
    cell2 = newRow.insertCell(1);
    cell2.textContent =  valor
    
    

})
indice++

item02.addEventListener("click", function () {
    // Adicionar 1 ao valor atual
    valor += valor02;
    // Atualizar o conteúdo da tag de span com o novo valor
    document.getElementById("valor").textContent = "R$ " + valor;

    cell1 = newRow.insertCell(0);
    cell1.textContent = "Anbacate"
    cell2 = newRow.insertCell(1);
    cell2.textContent = valor

})
indice++


