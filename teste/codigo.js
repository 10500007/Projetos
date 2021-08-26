

var titulo = document.querySelector('title').textContent
var item_1 = document.querySelector('.item01').textContent
var item_2 = document.querySelector('.item02').textContent
var item_3 = document.querySelector('.item03').textContent
var it_1 = document.querySelector('.item01')
var it_2 = document.querySelector('.item02')
var it_3 = document.querySelector('.item03')

if(titulo == 'Home'){    
    it_1.classList.value += ' item_sel'
   
}else if(titulo == 'Pag2'){
    it_2.classList.value += ' item_sel'
}else{
    it_3.classList.value += ' item_sel'
}


