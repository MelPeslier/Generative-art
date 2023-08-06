// l'élément canvas est une surface où l'on peut dessiner en utilisant des lignes de code JS
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var step = 40;
// var widthSize = window.innerWidth;
// var heightSize = window.innerHeight;
// var dpr = window.devicePixelRatio;
// canvas.width = widthSize;
// canvas.height = heightSize;
// context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height, key){

   var leftToRight = Math.random() >= 0.5;

   context.beginPath();
   switch (key) {
      case 'strait-line':
         if (leftToRight) {
            context.moveTo(x,y);
            context.lineTo(x + width, y + height);
         } else {
            context.moveTo(x + width, y);
            context.lineTo(x, y + height);
         }
         break;
      
      case 'double-strait-line':
         if (leftToRight) {
            context.moveTo(x + 1/2 * width,y);
            context.lineTo(x + width, y + 1/2 * height);
            context.moveTo(x,y + 1/2 * height);
            context.lineTo(x + 1/2 * width, y + height);
         } else {
            context.moveTo(x + 1/2 * width,y);
            context.lineTo(x, y + 1/2 * height);
            context.moveTo(x + width,y + 1/2 * height);
            context.lineTo(x + 1/2 * width, y + height);
         }
         break;
         
      default:
         if (leftToRight) {
            context.moveTo(x,y);
            context.lineTo(x + width, y + height);
         } else {
            context.moveTo(x + width, y);
            context.lineTo(x, y + height);
         }
         break;
   }
   context.closePath();
   context.stroke();
}

function generate() {
   selectElement = document.getElementById('art-select');
   output = selectElement.value;

   context.clearRect(0, 0, canvas.width, canvas.height);

   for (let i = 0; i < canvas.width; i += step) {
      for (let j = 0; j < canvas.height; j += step){
         draw(i, j, step, step, output);
      }
   }
}
