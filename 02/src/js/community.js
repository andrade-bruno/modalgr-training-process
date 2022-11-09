class project {
    constructor(projectName, projectDescription, color, code) {
        this.projectName = projectName
        this.projectDescription = projectDescription
        this.color = color
        this.code = code
    }
}

function handleForm() {
    const name = document.querySelector('#projectName').value
    const description = document.querySelector('#projectDescription').value
    const color = document.getElementById('texteditor').style.backgroundColor
    const code = document.querySelector('.code-wrapper').innerText

    const currentProject = new project(name, description, color, code)
    console.log(currentProject)
    appendProjectCard(color)
}


function appendProjectCard(color) {
    $("#community").append(`<div class='card' style='background: ${color}'></div>`)
}