
function contar() {
    var inicio = document.getElementById("txtInicio")
    var fim = document.getElementById("txtFim")
    var passo = document.getElementById("txtPasso")
    var res = document.querySelector('div#res')

    console.log(inicio.value)
    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('Valores zerados')
        return
    } else {
        var xhtml = ''
        xhtml += 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido. Considerando passo = 1')
        }

        p = (p <= 0 ? 1 : p)

        // emojis : https://unicode.org/emoji/charts/full-emoji-list.html
        
        if (i < f) {
            // Contagem crescente
            for (c = i; c <= f; c += p) {
                xhtml += `${c} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for (c = i; c >= f; c -= p) {
                xhtml += `${c} \u{1F449}`
            }
        }

        xhtml += '\u{1F3C1}' // emoji bandeira quadriculada
        res.innerHTML = xhtml
    }
}