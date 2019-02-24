function setup() {
    createCanvas(400, 400);
  }
  
  var xc = 200;
  var yc = 200;
  var raioc = 6;
  
  var raio1 = 150;
  var raio2 = 130;
  var raio3 = 115;
  var raio4 = 110;
  var destaque_theta;
  var anguloHora = 0;
  var anguloMin = 0;
  
  function draw() { 
    background(200);
    strokeWeight(15);
    fill(255);
    ellipse(xc,yc,2*raio1);
    strokeWeight(1);
    fill(0);
    num = 3;
    for(var angulo = 0; angulo <= 360; angulo += 30){
      var x1 = cos(radians(angulo))*raio1;
      var y1 = sin(radians(angulo))*raio1;
      var x2 = cos(radians(angulo))*raio2;
      var y2 = sin(radians(angulo))*raio2;
      var x3 = cos(radians(angulo))*raio3;
      var y3 = sin(radians(angulo))*raio3;
      var x4 = cos(radians(angulo))*raio4;
      var y4 = sin(radians(angulo))*raio4;
      textAlign(CENTER, CENTER);
      textSize(25);
      text(num,x3+xc,y3+yc);
      line(x1+xc,y1+yc,x2+xc,y2+yc);
      num += 1;
      if (num > 12){
          num = 1
      }
    }
    ellipse(xc,yc,2*raioc);
    var xhora = cos(radians(anguloHora))*115;
      var yhora = sin(radians(anguloHora))*115;
      anguloHora += 0.15
  
      var xmin = cos(radians(anguloMin))*90;
      var ymin = sin(radians(anguloMin))*90;
      anguloMin += 1.5
  
      strokeWeight(6);
      line(xc, yc, xhora+xc,yhora+yc);
        stroke(244, 66, 72);
      line(xc, yc, xmin+xc,ymin+xc);
        stroke(0);
  }
         
         
         
         
         
         
         