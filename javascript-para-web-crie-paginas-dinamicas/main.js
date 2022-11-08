const keys = document.querySelectorAll('.tecla')

function playSound(id) {
    const item = document.querySelector(id)

    if (item) {
        item.localName === 'audio' ? item.play() : console.log('O item selecionado não reproduz som')
    } else {
        console.log('Item não encontrado')
    }
}

for (let idx = 0; idx < keys.length; idx++) {
    keys[idx].onclick = function () {
        playSound(`#som_${keys[idx].classList[1]}`)
    }

    keys[idx].onkeydown = function (e) {
        e.code == 'Enter' || e.code == 'Space'
        ? keys[idx].classList.add('ativa')
        : null
    }

    keys[idx].onkeyup = function () {
        keys[idx].classList.remove('ativa')
    }
}