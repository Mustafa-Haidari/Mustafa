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

item.forEach(bg => bg.classList.add('hide'))
setTimeout(getData, 1500)

function getData(){
    placeholderItem.forEach(bg => bg.classList.add('hide'))
    item.forEach(bg => bg.classList.remove('hide'))
}