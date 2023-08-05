// l'élément canvas est une surface où l'on peut dessiner en utilisant des lignes de code JS
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var step = 30;
var size = window.innerWidth / 1.4;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
console.log(size);
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height){

   var leftToRight = Math.random() >= 0.5;

   if (leftToRight) {
      context.moveTo(x,y);
      context.lineTo(x + width, y + height);
   } else {
      context.moveTo(x + width, y);
      context.lineTo(x, y + height);
   }
   context.stroke();
}

for (let i = 0; i < size; i += step) {
   for (let j = 0; j < size; j += step){
      draw(i, j, step, step);
   }
}
