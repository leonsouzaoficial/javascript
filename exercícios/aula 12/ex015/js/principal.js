function verificar () {
    let data = new Date()

    let ano = document.getElementById("ano")

    let resultado = document.getElementById("resultado")
    
    // verifica o sexo
    let gênero = document.getElementsByName("gênero")

    // verifica o campo do ano
    if (ano.value.length != 4) {
        alert("O campo ano tem que ter 4 caracteres!")
    }

    else if (ano.value < 1900 || ano.value > data.getFullYear()) {
        alert(`O ano tem que estar entre 1900 e ${data.getFullYear()}`)
    }

    else {
        let idade = Number(data.getFullYear()) - Number(ano.value)


        if (gênero[0].checked) {
            resultado.innerHTML = `<p>Temos uma pessoa do sexo masculino com ${idade} anos!</p>`
            if (idade < 10) {
                resultado.innerHTML += "<img src='imagens/homem-crianca.jpg' alt='Criança'></img>"
            }

            else if (idade < 25) {
                resultado.innerHTML += "<img src='imagens/homem-jovem.jpg' alt='Jovem'></img>"
            }

            else if (idade < 60) {
                resultado.innerHTML += "<img src='imagens/homem-adulto.jpg' alt='Adulto'></img>"
            }

            else {
                resultado.innerHTML += "<img src='imagens/homem-idoso.jpg' alt='Idoso'></img>"
            }
        }

        else if (gênero[1].checked) {
            resultado.innerHTML = `<p>Temos uma pessoa do sexo feminino com ${idade} anos!</p>`
            if (idade < 10) {
                resultado.innerHTML += "<img src='imagens/mulher-crianca.jpg' alt='Criança'></img>"
            }

            else if (idade < 25) {
                resultado.innerHTML += "<img src='imagens/mulher-jovem.jpg' alt='Jovem'></img>"
            }

            else if (idade < 60) {
                resultado.innerHTML += "<img src='imagens/mulher-adulta.jpg' alt='Adulto'></img>"
            }

            else {
                resultado.innerHTML += "<img src='imagens/mulher-idosa.jpg' alt='Idoso'></img>"
            }
        }
        
        else {
            resultado.innerHTML = `<p>Temos uma pessoa com ${idade} anos!</p>`
        }
    }
}