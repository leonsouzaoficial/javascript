function mostrar () {
    let número = document.querySelector("input#número")
    let n = Number(número.value)

    let tabuada = document.querySelector("select#tabuada")

    if (número.value.length < 1) {
        alert("Preencha o campo de número")
    }

    else {
        tabuada.innerHTML = ""

        for (let i = 0; i <= 10; i++) {
            let calc = n*i

            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${calc}`
            item.value = "Item" + i
            
            tabuada.appendChild(item)
        }
    }
}