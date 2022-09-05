function gerartabuada() {
    let numero = document.getElementById("txtNumero")
    let res = document.querySelector('div#res')
    let tab = document.getElementById("seltab")
    let valor =0
    if (numero.value.length == 0) {
        alert('Digite algum número')
        return
    } else {
        valor = Number(numero.value)
    }

    tab.innerHTML = ''
    for (let cont = 1; cont <= 10; cont++) {
        let item = document.createElement('option')
        item.text = `${valor} x ${cont} = ${valor*cont}`
        tab.appendChild(item)
    }
}