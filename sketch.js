function preload() {
  // put preload code here
}

//creo  variabili vuote
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  var ballNumber = 25;

  var mindiametro = width / 60;
  var maxdiametro = width / 5;

  for (var i = 0; i < ballNumber; i++) {
    var myBall = new Ball(random(width, 0), random(0, height));

    myBall.diameter = random(mindiametro, maxdiametro);
    myBall.speed = random(1, 4);
    myBall.color = color(random(0, 255), random(0, 100), random(128, 255));
    balls.push(myBall);
  }
}

function mousePressed() {
  for (var j = 0; j < balls.length; j++) balls[j].click();
}

function draw() {
  background("black");
  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
  push();
  textSize(25);
  fill(255);
  text("Click on the balls to change color", mouseX, mouseY);
  pop();
}
//my object

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = "blue";
  this.speed = 2;

  var yDirezione = 1;
  var xDirezione = 1;

  this.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, mouseX / 5);
  };
  this.move = function() {
    this.x += this.speed * xDirezione;
    this.y += this.speed * yDirezione;

    if (this.y > height || this.y < 0) {
      yDirezione = yDirezione * -1;
    }

    if (this.x > width || this.x < 0) {
      xDirezione = xDirezione * -1;
    }
    this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 50) {
        this.color = color(255, random(200), random(200), 255);
      }
    };
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
