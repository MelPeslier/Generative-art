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

function draw(x, y, size, key){

   var leftToRight = Math.random() >= 0.5;

   switch (key) {
      case 'strait-line':
         context.beginPath();
         if (leftToRight) {
            context.moveTo(x,y);
            context.lineTo(x + size, y + size);
         } else {
            context.moveTo(x + size, y);
            context.lineTo(x, y + size);
         }
         context.closePath();
         context.stroke();
         break;
      
      case 'double-strait-line':
         context.beginPath();
         if (leftToRight) {
            context.moveTo(x + 1/2 * size,y);
            context.lineTo(x + size, y + 1/2 * size);
            context.moveTo(x,y + 1/2 * size);
            context.lineTo(x + 1/2 * size, y + size);
         } else {
            context.moveTo(x + 1/2 * size,y);
            context.lineTo(x, y + 1/2 * size);
            context.moveTo(x + size,y + 1/2 * size);
            context.lineTo(x + 1/2 * size, y + size);
         }
         context.closePath();
         context.stroke();
         break;

      case 'double-quarter-circle':
         if (leftToRight) {
            context.moveTo(x + 1/2 * size, y + size);
            context.beginPath();
            context.arc(x, y + size, 1/2 * size, 0, Math.PI / 2);
            context.stroke();

            context.moveTo(x + 1/2 * size, y);
            context.beginPath();
            context.arc(x + size, y, 1/2 * size, Math.PI, (3 * Math.PI )/ 2);
            context.stroke();
         } else {
            context.moveTo(x, y + 1/2 * size);
            context.beginPath();
            context.arc(x, y, 1/2 * size, (3 * Math.PI) / 2, 2 * Math.PI);
            context.stroke();
            
            context.moveTo(x + size, y + 1/2 * size);
            context.beginPath();
            context.arc(x + size, y + size, 1/2 * size, Math.PI / 2, Math.PI);
            context.stroke();
         }
         
         break;
         
      default:
         if (leftToRight) {
            context.moveTo(x,y);
            context.lineTo(x + size, y + size);
         } else {
            context.moveTo(x + size, y);
            context.lineTo(x, y + size);
         }
         context.closePath();
         context.stroke();
         break;
   }

}

function generate() {
   selectElement = document.getElementById('art-select');
   output = selectElement.value;

   console.log(output);

   context.clearRect(0, 0, canvas.width, canvas.height);

   for (let i = 0; i < canvas.width; i += step) {
      for (let j = 0; j < canvas.height; j += step){
         draw(i, j, step, output);
      }
   }
}
