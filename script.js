var butao = window.document.getElementById('ve')
butao.addEventListener('click' , clicar)


function clicar() {
    var vid = window.document.getElementById('video')
    var dan = window.document.getElementById('txt')
    if (dan.value == 'Dan Ran' || dan.value == 'Dan Ran ' || dan.value =='Dan Ran  ' ) {
        vid.src = 'fala com DAN RAN, que dan ran resident evil  shitpost para status🤡👌😎(luizinhoMemes).mp4'

    } else {
        alert('é pra escrever certo porra')
    }
}