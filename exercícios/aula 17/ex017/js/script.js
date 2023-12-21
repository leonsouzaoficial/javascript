let lista = []
let select = document.getElementById("lista")

function adicionar () {
    let num = document.getElementById("num")
    let n = Number(num.value)

    num.focus()

    // verifica o se o campo está vazio
    if (num.value.length == 0) {
        erro("Preencha o campo de número primeiro!")
    }

    // verofica se o número está entre 1 e 100
    else if (n >= 1 && n <= 100) {
        // verifica se o número já está na lista
        if (lista.indexOf(n) != -1) { 
            erro("O número " + n + " já está na lista")
        }

        // se tudo estiver correto ele adiciona na lista
        else {
            lista.push(n)

            // atualiza a lista
            atualizar()
        } 
    }

    else {
        erro("O número " + n + " não está entre 1 e 100!")
    }
}

//atualiza a lista
function atualizar () {
    // limpa
    num.value = ""
    select.innerHTML = ""
    resultado.innerHTML = ""

    for (let i in lista) {
        let item = document.createElement("option")
        item.value = "Item" + i
        let texto = lista[i]
        texto = texto.toFixed(2).replace(".", ",").replace(",00", "")
        item.text = texto

        select.appendChild(item)
    }
}

function erro (texto) {
    resultado.innerHTML = ""

    resultado.innerHTML = "<p style=color:red;>" + texto + "</p>"
}

function finalizar () {
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    if (lista.length == 0) {
        erro("Primeiro adicione um número!")
    }

    else {
        let maior = lista[0]
        let menor = lista[0]
        let média = 0
        let soma = 0

        // faz as verificações
        for (let i in lista) {
            // pega o maior valor da lista
            if (lista[i] > maior) {
                maior = lista[i]
            }

            // pega o menor valor
            if (lista[i] < menor) {
                menor = lista[i]
            }

            // faz a soma
            soma += lista[i]
        }

        // faz a média
        média = soma/lista.length

        // formata os números
        média = média.toFixed(2).replace(".", ",").replace(",00", "")
        maior = maior.toFixed(2).replace(".", ",").replace(",00", "")
        menor = menor.toFixed(2).replace(".", ",").replace(",00", "")
        soma = soma.toFixed(2).replace(".", ",").replace(",00", "")

        resultado.innerHTML += `<p>O maior número é: ${maior}</p>`

        resultado.innerHTML += `O menor número é: ${menor}`

        resultado.innerHTML += `<p>A soma é: ${soma}</p>`

        resultado.innerHTML += `<p>A média é: ${média}</p>`

        resultado.innerHTML += `Total de itens: ${lista.length}`
    }
}