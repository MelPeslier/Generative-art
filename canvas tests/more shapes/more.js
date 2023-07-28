function draw() {
   const canvas = document.getElementById("canvas");
   if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      // Triangle
      ctx.beginPath();
      ctx.moveTo(50, 25);
      ctx.lineTo(25, 50);
      ctx.lineTo(50, 75);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(55, 15);
      ctx.lineTo(17, 50);
      ctx.lineTo(55, 85);
      ctx.closePath();
      ctx.stroke();

      // Rectangle
      ctx.beginPath();
      ctx.fillRect(100, 20, 80, 80);
      ctx.clearRect(115, 35, 50, 50);
      ctx.strokeRect(120, 40, 40, 40);
      ctx.strokeRect(95, 15, 90, 90);

      // Smiley content
      ctx.beginPath();
      ctx.arc(300, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(335, 75);
      ctx.arc(300, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(320, 65);
      ctx.arc(315, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(290, 65);
      ctx.arc(285, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();

      var dentx1 = 430;
      var dentx2 = 470;
      var denty = 104;
      // Smiley mechant
      ctx.beginPath()
      ctx.arc(450, 75, 50, 0, Math.PI * 2, true);// tete

      ctx.moveTo(485, 75);
      ctx.arc(450, 75, 35, 0, Math.PI, false); // bouche
      // dents
      ctx.moveTo(dentx1 ,denty);
      ctx.lineTo(dentx1 + 3, denty + 10);
      ctx.lineTo(dentx1 + 6, denty + 3);
      ctx.moveTo(dentx2 ,denty);
      ctx.lineTo(dentx2 -3, denty + 10);
      ctx.lineTo(dentx2 - 6, denty + 3);

      // yeux
      ctx.moveTo(440, 65);
      ctx.arc(435, 65, 5, 0, Math.PI * 2, true);
      ctx.moveTo(470, 65);
      ctx.arc(465, 65, 5, 0, Math.PI * 2, true);
      
      // cornes
      var cornex1 = 430;
      var corney = 35;
      ctx.moveTo(cornex1-26, corney+7);
      ctx.arc(cornex1-10, corney -5, 20, Math.PI/ 1.42, Math.PI * 1.15, false);
      ctx.moveTo(cornex1 -11, corney -1);
      ctx.arc(cornex1, corney -35, 35, Math.PI/ 1.7, Math.PI / 1.26 , false);

      var cornex2 = 470;
      ctx.moveTo(cornex2+22, corney+11);
      ctx.arc(cornex2+10, corney -5, 20, Math.PI / 3.15, Math.PI * 1.85, true);
      ctx.moveTo(cornex2 +11, corney -1);
      ctx.arc(cornex2, corney -35, 35, Math.PI / 2.8, Math.PI / 4.8 , true);
      
      ctx.stroke();
   }
}

draw();