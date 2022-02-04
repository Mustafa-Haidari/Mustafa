const projectList = document.querySelectorAll('.portfolio .item .details .title')
const input = document.querySelector('.portfolio-header input');
const del = document.querySelector('.portfolio-header .delete')
let inputData = '';
const item = document.querySelectorAll('.item')
const placeholderItem = document.querySelectorAll('.item-placeholder')

input.addEventListener('input', e => {
    if(e.data !== null){
        inputData += e.data;
        searchData(inputData.toLocaleLowerCase())
    }
})

const searchData = (inputData) => {
    projectList.forEach(value => {
        const valueLower = value.innerText.toLocaleLowerCase();
        if(!valueLower.includes(inputData)){
            console.log()
            value.parentElement.parentElement.parentElement.classList.add('hide')
        } else {
            value.parentElement.parentElement.parentElement.classList.remove('hide')
        }
    })  
}

// backspace clear input
input.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace'){
        inputData = input.value.slice(0, -1).toLocaleLowerCase()
        searchData(inputData)
    }
})

// remove search and reset screen
del.addEventListener('click', () => {
    input.value = ''
    inputData = ''
    searchData(inputData)
})

const skeleton = document.querySelectorAll('.skeleton')
const actualContent = document.querySelectorAll('.actual-content')

actualContent.forEach(item => item.classList.add('hide'))
setTimeout(loadData, 1500)

function loadData(){
    skeleton.forEach(item => item.classList.add('hide'))
    actualContent.forEach(item => item.classList.remove('hide'))
}
