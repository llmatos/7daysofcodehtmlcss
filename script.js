let botaoMais = document.querySelector('.botao')
botaoMais.onclick = function () {
    var transparente = document.querySelector('.transparente')
    transparente.setAttribute('class', 'escuro')
    var body = document.querySelector('body')
    let botaoCamera = document.createElement('button')
    let botaoCasa = document.createElement('button')
    let texto = document.createElement('p')
    let textoCasa = document.createElement('p')
    
    texto.innerHTML = 'Nova consulta por vídeo'
    textoCasa.innerHTML = 'Nova consulta na casa do paciente'
    texto.setAttribute('class','texto__botao__camera')
    textoCasa.setAttribute('class', 'texto__botao__casa')
    let img = document.createElement('img')
    img.setAttribute('src', './img/Camerafab.svg')
    let imgBotaoCasa = document.createElement('img')
    imgBotaoCasa.setAttribute('src', './img/pinfabiconee.svg')
    botaoCasa.appendChild(imgBotaoCasa)
    botaoCamera.appendChild(img)
    
    botaoCasa.setAttribute('class','botao__casa')
    botaoCamera.setAttribute('class', 'botao__camera')
    body.appendChild(botaoCasa)
    body.appendChild(botaoCamera)
    body.appendChild(texto)
    body.appendChild(textoCasa)
    body.appendChild(botaoMais)
}
