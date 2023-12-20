const resultado = document.querySelector("p#resultado")

function contar () {
    let início = document.querySelector("input#início")
    let fim = document.querySelector("input#fim")
    let passo = document.querySelector("input#passo")

    // verifica se algum campo está vazio
    if (início.value.length < 1 || fim.value.length < 1 || passo.value.length < 1) {
        alert("Preencha todos os campos")
    }

    else {
        // limpa a sessão de resultado
        resultado.innerText = ""

        if (Number(passo.value) <= 0) {
            alert(`Passo ${passo.value} é inválido, vamos considerar passso 1`)

            for (let i = Number(início.value); i <= Number(fim.value); i++) {
                if (i != Number(início.value)) {
                    resultado.innerText += ", "
                }
                resultado.innerText += i
            }
        }

        else if (Number(fim.value) < Number(início.value)) {
            for (let i = Number(início.value); i >= Number(fim.value); i -= Number(passo.value)) {
                if (i != Number(início.value)) {
                    resultado.innerText += ", "
                }
                resultado.innerText += i
            }
        }

        else {
            for (let i = Number(início.value); i <= Number(fim.value); i += Number(passo.value)) {
                if (i != Number(início.value)) {
                    resultado.innerText += ", "
                }
                resultado.innerText += i
            }
        }
    }
}