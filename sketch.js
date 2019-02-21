function setup() {
    createCanvas(400, 400);
}

var xc = 200;
var yc = 200;
var raio = 150;
var raio2 = 5;
var raio3 = 130;
var destaque_theta;
var anguloHora = 0;
var anguloMin = 0;
function draw() {
    background(200);
    strokeWeight(6);
    fill(255);
    ellipse(xc,yc,2*raio);
    strokeWeight(1);
    fill(0);
    ellipse(xc,yc,2*raio2);
    num = 3;
    for(var angulo = 0; angulo <= 360; angulo += 30){
        var x = cos(radians(angulo))*raio3;
        var y = sin(radians(angulo))*raio3;
        textAlign(CENTER);
        text(num,x+xc,y+yc);
        //line(x+xc, y+yc, (x+xc)- (x+150), (y+120)-(y+120))
        num += 1;
        if (num > 12){
            num = 1
        }
    }
    var xhora = cos(radians(anguloHora))*115;
    var yhora = sin(radians(anguloHora))*115;
    anguloHora += 0.15

    var xmin = cos(radians(anguloMin))*90;
    var ymin = sin(radians(anguloMin))*90;
    anguloMin += 1.5

    strokeWeight(6);
    line(xc, yc, xhora+xc,yhora+yc);
    line(xc, yc, xmin+xc,ymin+xc);

}
