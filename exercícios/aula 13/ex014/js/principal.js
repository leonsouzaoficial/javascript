let txtHora = document.getElementById("hora")
let foto = document.getElementById("foto")

function roda () {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if (hora < 10) {
        hora = "0"+hora
    }

    if (minutos < 10) {
        minutos = "0"+minutos
    }

    if (segundos < 10) {
        segundos = "0"+segundos
    }

    txtHora.innerText = `Agora são ${hora}:${minutos}:${segundos}`

    if (hora < 12) {
        foto.src = "imagens/manha.jpg"
        document.body.style.backgroundColor = "#1a89f1"
    }

    else if (hora < 18) {
        foto.src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = "#f1a044"
    }
    
    else {
        foto.src = "imagens/noite.jpg"
        document.body.style.backgroundColor = "#413e3a"
    }

    requestAnimationFrame(roda)
}

roda()