function carregar() {
    var msg = window.document.getElementById('msg')
    var saudacao = window.document.getElementById('saudacao')
    var img = window.document.getElementById('imagem')
    var hora = GetFormattedHour()
    msg.innerHTML = `Agora são ${hora}`

    if (hora >= "00:00:00" && hora < "12:00:00"){
        // BOM DIA
        if (hora <= "05:00:00"){
            img.src = "./app/img/midnight.png"
            document.body.style.background ='#515154'
        } else {
            img.src = "./app/img/morning.png"
            document.body.style.background ='#e2cd9f'
        }
        saudacao.innerHTML = "Bom Dia!"
    } else if (hora > "12:00:00" && hora <= "18:00:00"){
        // BOA TARDE
        img.src = "./app/img/evening.png"
        document.body.style.background ='#b9846f'
        saudacao.innerHTML = "Boa Tarde!"
    } else {
        // BOA NOITE
        img.src = "./app/img/night.png"
        document.body.style.background ='#515154'
        saudacao.innerHTML = "Bom Noite!"
    }
    setTimeout("carregar()", 1000)
    
}

function GetFormattedHour() {
    var todayTime = new Date();
    var hora = todayTime.getHours()
    var minuto = todayTime.getMinutes()
    var segundo = todayTime.getSeconds()
    if (hora >= 0 && hora < 10){
        var hora = `0${hora}`
    }
    if (minuto >= 0 && minuto < 10){
        var minuto = `0${minuto}`
    }
    if (segundo >= 0 && segundo < 10){
        var segundo = `0${segundo}`
    }
    var horaCerta = `${hora}:${minuto}:${segundo}`
    console.log(horaCerta)
    return horaCerta
}