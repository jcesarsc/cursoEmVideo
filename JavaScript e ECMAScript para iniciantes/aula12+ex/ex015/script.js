function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > anoAtual) {
        window.alert('[ERRO] Dados incorretos. Digite novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'manha.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'tarde.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'noite.png')
            } else {
                // Idoso
                img.setAttribute('src', 'manha.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }



    /*var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getFullYear()
    // var hora = 19
    msg.innerHTML = `Sua idade é ${hora} anos`
    */
}
