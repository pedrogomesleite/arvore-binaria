let x;
let y;
let angle;
let angleMod;
let initDes;
let desMod;
let slider;

function setup() {
  createCanvas(windowWidth, round(windowHeight * 0.75));
  angleMode(DEGREES)
  x = round(windowWidth / 2);
  y = height;
  print(y, windowHeight, height);
  angle = 90;
  initDes = 100;
  desMod = createSlider(0, 0.76, 0.7, 0.01);
  angleMod = createSlider(0, 180);
  stroke(0);
  angleMod.size(300);
  desMod.size(300);
}

function draw() {
  background(255);
  arvore(x, y, initDes, angle);
}

function arvore(initX, initY, des, angle) {
  let finalX;
  let finalY;
  if(des < 10){
    leaf(initX, initY, 15, angle)
    return; 
  }
  else if(des === initDes){
    finalX = initX;
    finalY = initY - des;
    //print(initY, finalY)
  }
  else {
    finalX = initX - cos(angle) * des;
    finalY = initY - sin(angle) * des;
  }
  line(initX, initY, finalX, finalY);
  let newDes = des * desMod.value();
  arvore(finalX, finalY, newDes, angle + angleMod.value());
  arvore(finalX, finalY, newDes, angle - angleMod.value());
}

function leaf(initX, initY, des, angle) {
  finalX = initX - cos(angle) * des;
  finalY = initY - sin(angle) * des;
  
  bezier(initX, initY, initX, finalY, initX, finalY, finalX, finalY);
  bezier(initX, initY, finalX, initY, finalX, initY, finalX, finalY);
  line(initX, initY, finalX, finalY);
}

function windowResized(){
  x = round(windowWidth / 2);
  y = height;
}