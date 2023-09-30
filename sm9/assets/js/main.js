document.addEventListener("keydown", function(event){
    if('r' == event.key.toLowerCase()){
        document.body.style.background = "red";
    }
})
document.addEventListener("keyup", function(event){
    if('r' == event.key.toLowerCase()){
        document.body.style.background = "white";
    }
})

document.addEventListener("keydown", function(event){
    if('g' == event.key.toLowerCase()){
        document.body.style.background = "green";
    }
})
document.addEventListener("keyup", function(event){
    if('g' == event.key.toLowerCase()){
        document.body.style.background = "white";
    }
})

document.addEventListener("keydown", function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = "blue";
    }
})
document.addEventListener("keyup", function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = "white";
    }
})

document.addEventListener('keydown',function(event){
    let move = document.querySelector('.circle');
    const style = move.style;
    let modifier = 1;
    switch(event.key){
        case 'w': style.top = `${parseInt(style.top) - modifier}%`; console.log(`${parseInt(style.top) - modifier}px`); break;
        case 's': style.top = `${parseInt(style.top) + modifier}%`; console.log(`${parseInt(style.top) + modifier}px`); break;
        case 'a': style.left = `${parseInt(style.left) - modifier}%`; console.log(`${parseInt(style.left) - modifier}px`); break; 
        case 'd': style.left = `${parseInt(style.left) + modifier}%`; console.log(`${parseInt(style.left) + modifier}px`); break; 
    }
})
