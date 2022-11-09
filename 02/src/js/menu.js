const editorToggler = document.querySelector('#editorToggler')
const communityToggler = document.querySelector('#communityToggler')

const editorSection = document.querySelector('#editor')
const rightContainerSection = document.querySelector('#right-container')
const communitySection = document.querySelector('#community')

editorToggler.addEventListener('click', () => {
    editorSection.style.display = 'inline-block'
    rightContainerSection.style.display = 'flex'
    communitySection.style.display = 'none'
})

communityToggler.addEventListener('click', () => {
    editorSection.style.display = 'none'
    rightContainerSection.style.display = 'none'
    communitySection.style.display = 'flex'
})