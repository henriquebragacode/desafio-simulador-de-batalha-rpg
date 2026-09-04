let nomeDoHeroi = "Hercules"
let vidaHeroi = 100
let ataqueHeroi = 15

let nomeMonstro = "Minotauro"
let vidaMonstro = 80
let ataqueMonstro = 12

let turno = 1

while (vidaHeroi > 0 && vidaMonstro > 0) {
    console.log(`--- Turno ${turno} ---`)
    
    // Ataque do Herói
    vidaMonstro -= ataqueHeroi
    console.log(`${nomeDoHeroi} atacou e causou ${ataqueHeroi} de dano. Vida do ${nomeMonstro}: ${vidaMonstro}`)

    // Ataque do Monstro (só se ele estiver vivo)
    if (vidaMonstro > 0) {
        vidaHeroi -= ataqueMonstro
        console.log(`${nomeMonstro} atacou e causou ${ataqueMonstro} de dano. Vida do ${nomeDoHeroi}: ${vidaHeroi}`)
    }
    
    turno++
}

console.log("-----------------------") // Uma linha para separar o fim da batalha

// Resultado final
switch (true) {
    case vidaMonstro <= 0:
        console.log(`🏆 ${nomeDoHeroi} venceu o destemido ${nomeMonstro}!`)
        break

    case vidaHeroi <= 0:
        console.log(`💀 Você foi derrotado pelo ${nomeMonstro}.`)
        break

    default:
        console.log("Continue sua aventura!")
}
