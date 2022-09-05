let numero = document.getElementById("txtnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(num) {
    // So adiciona na lista se for um numero e ja nao estiver na lista.
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let el = document.createElement('option')
        el.text = `Valor ${numero.value} adicionado`
        lista.appendChild(el)
    } else {
        alert('Valor invalido ou ja encontrado na lista')
        return
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    let val = valores.sort()
    // let maior = val[val.length-1]
    // let menor = val[0]

    let maior = 0
    let menor = 0
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
        if (Number(valores[pos]) > maior) {
            maior = valores[pos]
        } else {
            menor = valores[pos]
        }
    }

    res.innerHTML = `Foram inseridos ${valores.length} números`
    res.innerHTML += '<br>'
    res.innerHTML += `O menor deles é ${menor}`
    res.innerHTML += '<br>'
    res.innerHTML += `O maior deles é ${maior}`
    res.innerHTML += '<br>'
    res.innerHTML += `A soma deles é ${soma}`



}