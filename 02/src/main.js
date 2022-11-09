function handleForm() {
    return alert('Projeto salvo com sucesso!')
}

const language = document.querySelector('#languageSelect')
const codeArea = document.querySelector('.code-wrapper')
const button = document.querySelector('#hljsSubmit')

function doHighlight() {
    const previousCode = codeArea.innerText
    codeArea.innerHTML = `<code class='preview hljs language-${language.value}' contenteditable='true'></code>`
    codeArea.querySelector('code').textContent = previousCode
    hljs.highlightElement(codeArea.querySelector('code'))
}

button.addEventListener('click', () => {
    doHighlight()
})