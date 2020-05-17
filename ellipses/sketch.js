var x;
var y;

function setup() {
  var canvas = createCanvas(600, 300);
  canvas.parent('ellipses')
	x = 0;
	y = 0;
    
}

function draw() {
	
	background(255);
	fill(0,0,0);
    ellipse(x , height/2, 100);
    x += 1;
    ellipse(x,y,40);
    y += 1;
	
}