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
    let name = document.querySelector('#projectName').value
    let description = document.querySelector('#projectDescription').value
    let color = document.querySelector('#texteditor').style.backgroundColor
    let code = document.querySelector('.code-wrapper').innerText
    const language = document.querySelector('#languageSelect').value

    !color ? color = '#6BD1FF' : null
    const currentProject = new project(name, description, color, code, language)
    await appendProjectCard(name, description, color, code, language)

    if (name == '') {
        alert('Informe o nome do projeto.')
        return false
    } else if (description == '') {
        alert('Por favor descreva o seu projeto.')
        return false
    } else if (code == '') {
        alert('Desculpe, não encontramos código no seu projeto.')
        return false
    }
    
    alert("Projeto criado com sucesso, verifique na comunidade!")
    console.log("Novo projeto:")
    console.log(currentProject)
}

let countProjects = 0

function appendProjectCard(name, description, color, code, language) {
    countProjects += 1

    $("#communityGrid").append(`
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