var vel = 60.5

console.log(`A velocidade do seu carro é ${vel.toFixed(2).replace(".", ",")} por hora`)
console.log("Dirija sempre usando cinto de segurança")

if (vel > 60) {
    console.log("Você passou da velocidade permitida. MULTADO!")
}