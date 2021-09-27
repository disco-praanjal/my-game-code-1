//creating variables
var backgroundImg, appleImg, basketImg, dirtImg, farmerImg;
var marketImg, moneyImg, seedsImg;

var market, seed, farmer, land1, land2, land3, land4, land5, land6, basket;

var plant1, plant2, plant3, plant4, plant5, plant6;

var treeImg1, treeImg2, treeImg3, treeImg4, treeImg5, treeImg6;

var positionX = 0;
var positionY = 0;

var dIsClicked = 0;

function preload() {
  //loading all the images 
  backgroundImg = loadImage("images/grass_15.png");
  appleImg = loadImage("images/apple.png");
  basketImg = loadImage("images/basket.png");
  dirtImg = loadImage("images/dirt.png");
  farmerImg = loadImage("images/farmer.png");
  marketImg = loadImage("images/market.png");
  moneyImg = loadImage("images/money.png");
  seedsImg = loadImage("images/seeds.png");
  treeImg1 = loadImage("images/seed.png");
  treeImg2 = loadImage("images/plant1.png");
  treeImg3 = loadImage("images/plant2.png");
  treeImg4 = loadImage("images/plant3.png");
  treeImg5 = loadImage("images/plant4.png");
  treeImg6 = loadImage("images/plant5.png");
}

function setup() {
  //creating canvas and making its width and height adjustable to the screen window size
  createCanvas(windowWidth, windowHeight);

  //creating a market sprite 
  market = createSprite(windowWidth-200, windowHeight-230);
  market.addImage(marketImg);

  //creating a seed sprite
  seed = createSprite(windowWidth-200, windowHeight/5);
  seed.addImage(seedsImg);
  seed.scale = 0.7;
  
  //creating a farmer sprite
  farmer = createSprite(windowWidth/4, windowHeight/2);
  farmer.addImage(farmerImg);
  farmer.scale = 2.5;
  
  //giving value to positionX and Y
  positionX = windowWidth/2-50;
  positionY = windowHeight/3;

  //creating land sprites
  land1 = new Land(positionX, positionY);
  land2 = new Land(positionX+200, positionY);
  land3 = new Land(positionX+400, positionY);
  land4 = new Land(positionX, positionY+150);
  land5 = new Land(positionX+200, positionY+150);
  land6 = new Land(positionX+400, positionY+150);

  //creating a basket sprite
  basket = createSprite(windowWidth/2+100, windowHeight/2+200);
  basket.addImage(basketImg);
  basket.scale = 0.5;
  
  //creating plant sprites and setting the image to be invisible
  plant1 = createSprite(positionX, positionY);
  plant1.addImage("dirt1",dirtImg);
  plant1.visible = false;

  plant2 = createSprite(positionX+200, positionY);
  plant2.addImage("dirt2",dirtImg);
  plant2.visible = false;

  plant3 = createSprite(positionX+400, positionY);
  plant3.addImage("dirt3",dirtImg);
  plant3.visible = false;

  plant4 = createSprite(positionX, positionY+150);
  plant4.addImage("dirt4",dirtImg);
  plant4.visible = false;

  plant5 = createSprite(positionX+200, positionY+150);
  plant5.addImage("dirt5",dirtImg);
  plant5.visible = false;

  plant6 = createSprite(positionX+400, positionY+150);
  plant6.addImage("dirt6",dirtImg);
  plant6.visible = false;

}

function draw() {
  //adding an image to the background
  background(backgroundImg);

  //making the farmer controleble using arrow keys
  //adding edges so the farmer doesn't go out of view
  if(keyIsDown(UP_ARROW) && farmer.y > height/4-80){
    farmer.y -= 5;
  }

  if(keyIsDown(DOWN_ARROW) && farmer.y < height-160){
    farmer.y += 5;
  }

  if(keyIsDown(LEFT_ARROW) && farmer.x > width/4-100){
    farmer.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    farmer.x += 5;
  }
  
  // when "d" key clicked dirt image should appear
  if(keyDown("d")){
    dIsClicked += 1;
    planting(dIsClicked);
  }

  //displaying the sprites and calling the functions
  land1.showSquare();
  land2.showSquare();
  land3.showSquare();
  land4.showSquare();
  land5.showSquare();
  land6.showSquare();
  drawSprites();
  showMoneyBar();
  showSeedBar();
}

function windowResized() {
  //to set the canvas width and height to the screen width and height
  resizeCanvas(windowWidth, windowHeight);
}

function showMoneyBar() {
  //to show a bar that displays amount of money you have in the game
  push();
  image(moneyImg, width/12-100, height/4-200, 80, 80);
  fill("white");
  rect(width/12-20, height/4-180, 185, 20);
  fill("#ffc400");
  //rect(width / 2 - 100, height - player.positionY - 350, player.fuel, 20);
  noStroke();
  pop();
}

function showSeedBar() {
  //to show a bar that displays amount of seeds/seed bags you have in the game
  push();
  image(seedsImg, width/12-100, height/4-120, 70, 70);
  fill("white");
  rect(width/12-20, height/4-100, 185, 20);
  fill("#ffc400");
  //rect(width / 2 - 100, height - player.positionY - 350, player.fuel, 20);
  noStroke();
  pop();
}

function planting(count) {
  //function gets called when D and P clicked
  if(count > 0){
    console.log(count);
  }

}
