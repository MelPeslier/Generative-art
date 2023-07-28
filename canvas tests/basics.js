var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');
// Similaire à un déplacement du stylo à main levée, appelé, sous chemin
ctx.moveTo(0, 0);

// Depuis l'ancien sous chemin, dessine une ligne droite jusqu'à ce point
ctx.lineTo(300, 150);

//Pour dessiner à l'écran ce qui à  été donner précédemment
ctx.stroke();

// Appliquer une nouvelle couleur à l'élément
ctx.strokeStyle = "green";

// Pour créer un nouveau tracer indépendant du suivant, odnc en changeant des propriétés comme la couleur
ctx.beginPath();

// Dessiner un cercle
// arc(x, y, rayon, angle de départ, angle d'arrivée, sens antihoraire ?)
// l'angle est en radians
ctx.arc(225, 75, 35, 0, 2 * Math.PI);

ctx.stroke();

// Modifie la couleur intérieur d'une forme
ctx.fillStyle = "purple";

ctx.beginPath();
ctx.font = "bold 16px Arial";
ctx.fillText("On peut écrire aussi !", 20, 120);

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.font = "32px serif",
ctx.strokeText("Stroked in it !", 7, 145, 140);

var grd = ctx.createLinearGradient(150, 15, 280, 0);
grd.addColorStop(0, "cyan");
grd.addColorStop(0.66, "blue");
grd.addColorStop(1, "grey");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 40);