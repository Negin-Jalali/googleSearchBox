let $ = document;
let activation = $.querySelector('.search-input');
let autocomBox = $.getElementById('autocom-box');

input.addEventListener('keyup', findSuggestions);

function findSuggestions(){
    if(input.value.length < 3){
        console.log('hi');
        activation.classList.remove('active')
        return
    }

    activation.classList.add('active');
    autocomBox.innerHTML = '';

    suggestions.filter(function(item){
        if(item.toLowerCase().includes(input.value.toLowerCase())){
            creatLi(item);
        }
    })

    if(autocomBox.innerHTML === ''){
        creatLi(input.value);
    }
}


function creatLi(item){
    autocomBox.insertAdjacentHTML('afterbegin', '<li onclick = "clickOnLi(event)" >'+item+'</li>')
}

function clickOnLi(event){
    input.value = event.target.innerHTML
    input.focus();
    activation.classList.remove('active')
}
