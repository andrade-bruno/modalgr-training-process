const language = document.querySelector('#languageSelect')
const codeArea = document.querySelector('.code-wrapper')
const hljsSubmit = document.querySelector('#hljsSubmit')

function doHighlight() {
    const previousCode = codeArea.innerText
    codeArea.innerHTML = `<code class='preview hljs language-${language.value}' contenteditable='true'></code>`
    codeArea.querySelector('code').textContent = previousCode
    hljs.highlightElement(codeArea.querySelector('code'))
}

hljsSubmit.addEventListener('click', () => {
    doHighlight()
})

const colorInput = document.querySelector('.color-input');
const backgroundEditor = document.getElementById('texteditor')

var hueb = new Huebee( colorInput, {
  setBGColor: true,
  saturations: 2,
});

hueb.on('change', function( color, hue, sat, lum ) {
    backgroundEditor.style.backgroundColor = color
})