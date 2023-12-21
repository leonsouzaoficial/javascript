let valores = [8, 1, 7, 4, 2, 9, 7]

/*for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}*/

let b = 5
let a = false

for (let i in valores) {
    if (valores[i] == b) {
        console.log(`O valor "${b}" foi encontrado na posição ${i}`)
        a = true
    }
}

if (!a) {
    console.log(`O valor "${b}" não foi encontrado`)
}