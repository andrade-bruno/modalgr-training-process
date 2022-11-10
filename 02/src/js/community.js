class project {
    constructor(projectName, projectDescription, color, code, language) {
        this.projectName = projectName
        this.projectDescription = projectDescription
        this.color = color
        this.code = code
        this.language = language
    }
}

async function handleForm() {
    const name = document.querySelector('#projectName').value
    const description = document.querySelector('#projectDescription').value
    const color = document.getElementById('texteditor').style.backgroundColor
    const code = document.querySelector('.code-wrapper').innerText
    const language = document.querySelector('#languageSelect').value

    const currentProject = new project(name, description, color, code, language)
    await appendProjectCard(name, description, color, code, language)
    
    alert("Projeto criado com sucesso! Verifique na comunidade e, opcionalmente também o log do objeto no console!")
    console.log("Novo projeto:")
    console.log(currentProject)
}

let countProjects = 0

async function appendProjectCard(name, description, color, code, language) {
    countProjects += 1

    $("#community").append(`
        <div class="card" style="background: ${color}" id="card${countProjects}">
            <div class="cardDetails">${name}<br>${description}</div>
            <div id="buttons">
                <div id="btnred"></div>
                <div id="btnyellow"></div>
                <div id="btngreen"></div>
            </div>
            <div class="cardCodeWrapper">
                <code class="cardCode hljs language-${language}">${code}</code>
            </div>
        </div>
    `)

    const codeArea = document.querySelector(`#card${countProjects}`).querySelector('.cardCodeWrapper')
    hljs.highlightElement(codeArea.querySelector('code'))
}