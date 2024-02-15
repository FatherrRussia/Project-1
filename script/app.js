

let canvas = document.getElementById('board');

let context = canvas.getContext('2d');

g.init();

function runGame(){
    g.draw();
    g.update();
}