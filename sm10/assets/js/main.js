let form = document.getElementById('form');
let namee = document.querySelector('.name');
let date = document.querySelector('.date');
let lablename = document.getElementById('name');
let labledate = document.getElementById('date');
let link = document.getElementById('link');
let link1 = document.getElementById('link1');


form.addEventListener('submit', function(event){
    
    lablename.innerHTML="";
    labledate.innerHTML="";

    if(namee.value.length < 2){
        namee.style.border = "1px solid red"
        lablename.insertAdjacentHTML('beforeend','Имя должно содержать не менее 2 символов')
        lablename.style.color = "red";
        // let err = ''

    }else if(isNaN(date.value)){
        date.style.border = "1px solid red"
        labledate.insertAdjacentHTML('beforeend','Неверный формат')
        labledate.style.color = "red";
        // let err = ''
    }else if(date.value == ""){
			date.style.border = "1px solid red"
			labledate.insertAdjacentHTML('beforeend','Введите год рождения')
			labledate.style.color = "red";
			// let err = ''
		}else if(date.value.length > 4){
			date.style.border = "1px solid red"
			labledate.insertAdjacentHTML('beforeend','Неверный формат')
			labledate.style.color = "red";
			// let err = ''
		}else if((2023 - date.value) < 18){
        date.style.border = "1px solid red"
        labledate.insertAdjacentHTML('beforeend','Вам нет 18 лет')
        labledate.style.color = "red";
        // let err = ''
    }else {// let err = ''
        date.style.border = "1px solid black";
        labledate.insertAdjacentHTML('beforeend','Дата Гуд')
        labledate.style.color = "black";
        namee.style.border = "1px solid black";
        lablename.insertAdjacentHTML('beforeend','Имя Гуд')
        lablename.style.color = "black";
        link.style.display = "flex"
				link.style.marginTop = "20px"
				link.style.justifyContent = "center"
				link1.style.display = "block"
				link.style.color = "red"
				link1.style.color = "green"
    }

    console.log(date.value)

})

