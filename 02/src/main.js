const target = document.querySelector('code')
const precode = document.querySelector('#texteditor .precode')
const code = document.querySelector('#texteditor textarea')

document.querySelector('#highlightBtn').addEventListener("click", function() {
    if (this.innerText != 'Editar') {
        target.innerText = code.value

        code.style.display = 'none'
        precode.style.display = 'block'
        target.style.display = 'block'
        this.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar'

        hljs.highlightAll();
    } else {
        code.style.display = 'block'
        precode.style = 'display: none !important;'
        target.style.display = 'none'
        this.innerText = 'Visualizar com o highlight'
    }
})

const languageSelector = document.querySelector('#languageSelect')

languageSelector.addEventListener("change", function() {
    target.classList.remove(target.classList[1])
    target.classList.remove(target.classList[0])
    target.classList.add(languageSelector.value, 'hljs')
})

function handleForm() {
    return alert('Projeto salvo com sucesso!')
}