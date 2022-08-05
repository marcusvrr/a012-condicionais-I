function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value);
    console.log(typeof res);
    res.innerHTML = `<p>sua velocidade atual é de ${vel}km</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi multado!</p>`
    }
    res.innerHTML += `<p>Use o cinto de segurança!</p>`
}

    
