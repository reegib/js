let block = document.querySelector('.block');
let link = document.querySelector('.link');



let cost = prompt('Стоимость товара');
let hav = prompt('Сколько денег у вас');



if((cost-hav) == 0){
	let box = '<p class="text">Покупка совершена</p>';
  let report = document.querySelector('.report');
  report.innerHTML = box;
}else{
	if((cost-hav) > 0){
		let box = '<p class="text">Для покупки не хватает ' + ' ' + (cost-hav) +' р.</p>';
        let report = document.querySelector('.report');
        report.innerHTML = box;
	}else{
			if((cost-hav) < 0){
			let box = '<p class="text">Покупка совершена. Сдача ' + ' ' + (hav-cost) +' р.</p>';
      let report = document.querySelector('.report');
      report.innerHTML = box;
		}
	
	}
}

block.style.background = 'pink';
link.style.color = 'white';