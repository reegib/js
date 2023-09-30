let modal = document.querySelector('.btn-modal')
let modalblock = document.getElementById('modal-block')
let close = document.querySelector('.close-block')
let over = document.querySelector('.mouseover')
let move = document.querySelector('.mousemove')
let mousup = document.querySelector('.mouseup')
let mousedown = document.querySelector('.mousedown')

modal.addEventListener('dblclick', function(){
    modalblock.style.left = '0';
    modalblock.style.display = 'flex';
    modalblock.style.justifyContent = 'center';
    modalblock.style.alignItem = 'center';
    modalblock.style.flexDirection = 'column';
})

close.addEventListener('click', function(){
    modalblock.style.left = '-100vw';
})
over.addEventListener('mouseover', function(){
    over.style.background = 'black';
})
over.addEventListener('mouseout', function(){
    over.style.background = 'white';
})


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    move.style.backgroundColor = "#" + randomColor;
    modalblock.style.backgroundColor = "#" + randomColor;
    move.style.height = "100vh";
    move.style.width = "100vw";
    move.style.cursor = "none";
    document.documentElement.requestFullscreen();
        const element = document.documentElement;
        if(element.requestFullscreen){
            element.requestFullscreen();
        }else if (element.mozRequestFullScreen) {
            element.mozRequestFullscreen();
        }else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullscreen();
        }else if (element.msRequestFullScreen) {
            element.msRequestFullscreen();
        }
}

// move.addEventListener('mousemove', )
mousup.addEventListener('mouseup',function(){
    mousup.style.height = "50px";
    mousup.style.background = "pink";
} )

mousedown.addEventListener('mousedown',function(){
    mousedown.style.height = "50px";
    mousedown.style.background = "red";
} )


