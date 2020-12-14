var sqrX = 0;
var sqrY = 0;
var sqrW = 20;
var sqrH = 20;

let i;
let intrN = 15;
let intr = [];

function setup() {
  createCanvas(600, 600);
  frameRate(5); 
  
  for (i = 1; i <= intrN; i++) {
    intr[i] = new Interrupt();
  }
  
}

function draw() {
  background(200);
  
  // draw square
  fill(255);
  noStroke();
  rect(sqrX, sqrY, sqrW, sqrH);
  
  // 네모 안튀어나가게
  if (sqrX <= 0) {
    sqrX = 0;
  }
  if (sqrY <= 0) {
    sqrY = 0;
  }
  if (sqrX >= width) {
    sqrX = width - sqrW;
  }
  if (sqrY >= height) {
    sqrY = height - sqrH;
  }
  
  // create interrupt object
  fill(50);
  for (i = 1; i <= intrN; i++) {
    intr[i].move();
    intr[i].display();
  }
  
  // 여기예용
  fill(255);
  textSize(20);
  text("Here!", 550, 575);
  
  // 반짝반짝
  fill(random(255), random(255), random(255));
  noStroke();
  rect(width-sqrW, height-sqrH, width, height);
  
  // 목적지 도착!
  if (sqrX + sqrW == 600 && sqrY + sqrH == 600) {
      background(random(255), random(255), random(255));
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
     text("Life", width/2, height/2);
  }
  
}

class Interrupt {
  constructor() {
    this.x = random(10,550);
    this.y = random(10,550);
    this.w = 150;
    this.h = 150;
    this.speed = 20;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    rect(this.x, this.y, this.w, this.h);
    
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.x + this.w >= width) {
      this.x = width - this.w;
    }
    if (this.y + this.h >= height) {
      this.y = height - this.h;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    sqrY -= 20;
  } else if (keyCode === DOWN_ARROW) {
    sqrY += 20;
  } else if (keyCode === RIGHT_ARROW) {
    sqrX += 20;
  } else if (keyCode === LEFT_ARROW) {
    sqrX -= 20;
  }
}