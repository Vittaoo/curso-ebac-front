const form = document.getElementById("form-contato");
let linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    adicionaContato()
})

function adicionaLinha (){
    const inputNum = document.getElementById("num-contato")
    const inputNom = document.getElementById("nom-contato")

    let linha = '<tr>'
    linha += `<td> ${inputNom.value} </td>`
    linha += `<td> ${inputNum.value} </td>`
    linha += '<tr>'

    linhas += linha

    inputNom.value = '';
    inputNum.value = '';
}

function adicionaContato(){
    const bodyTable = document.querySelector('tbody')
    bodyTable.innerHTML = linhas
}