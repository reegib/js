let x = prompt('Введите число');

let box = '<div class="box"></div>';
let box_list = document.querySelector('.box_list');


for(let a = 0; a < x; a++){
	box_list.insertAdjacentHTML('beforeend',box);
}