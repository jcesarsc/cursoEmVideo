let num = [5, 9, 4, 3, 8, 23, 11, 69]
/*num[3] = 8 // Insere o nro 8 na posicao 3 do array.
num.push(7) // Insere o nro 7 na ultima posicao do array, independente do tamanho.
num.push(3)
num.push(12)
num.push(51)
// num.sort()
*/
console.log(num)
/*
// O for abaixo e a forma tradicional de percorrer o vetor.
for (i = 0; i < num.length; i++) {
    console.log(`Posição ${i} = ${num[i]}`)
}
*/
// Forma atualizada atraves do EcmaScript
for (let pos in num) {
    console.log(`Posição ${pos} = ${num[pos]}`)
}