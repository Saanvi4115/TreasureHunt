var town, townImage;

var tent, tentImage;

var boy, boyStanding, boy_walking1, boy_walking2, boy_walking3, boy_walking4, boy_walking5, boy_walking6, boy_walking7, boy_walking8;

function preload(){
  townImage = loadImage("town.png");
  car1Image = loadImage("car.png");
  car2Image = loadImage("car2.png");

  boyStanding = loadImage("boyStatic.png");
  boy_walking1 = loadImage("walking1.png");
  boy_walking2 = loadImage("walking2.png");
  boy_walking3 = loadImage("walking3.png");
  boy_walking4 = loadImage("walking4.png");
  boy_walking5 = loadImage("walking5.png");
  boy_walking6 = loadImage("walking6.png");
  boy_walking7 = loadImage("walking7.png");
  boy_walking8 = loadImage("walking8.png");

  tentImage = loadImage("tent.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  boy = createSprite(100,100,200,200);
  boy.addImage("stand", boyStanding);
  boy.addImage("walk", boy_walking1, boy_walking2, boy_walking3, boy_walking4, boy_walking5, boy_walking6, boy_walking7, boy_walking8);

  town = createSprite(200,180,400,20);
  town.addImage("town1", townImage);
  town.x = town.width/2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}