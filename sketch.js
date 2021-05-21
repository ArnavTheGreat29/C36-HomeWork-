var dog;
var sadDog;
var happyDog;

var foodObj;
var foodCount;

var buttonRestock;
var buttonFeed;

var foodCount = 0;

var feed;
var lastFed;

var FoodStock;
var addFood;
var foodS;


function preload(){

  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  
}

function setup() {

  database = firebase.database()

  createCanvas(1000,400);
  
  foodObj = new Food()


  foodStock=database.ref('Food');
  
  database.ref('Food').on("value",(data) =>{
    foodS=data.val();
    console.log(foodS)
    console.log("hi")
    foodObj.updateFoodStock(foodS);
  });
  console.log(foodS)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedTheDog = createButton("feed the dog")
  feedTheDog.position(800,95);
  feedTheDog.mousePressed(deductFood)

  addFoods = createButton("add food")
  addFoods.position(750,95);
  addFoods .mousePressed(addFood)



}

function draw() {
  background(46,139,87);
  foodObj.display()

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  console.log(foodS)
  console.log("hi")
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}


function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function deductFood(){
  foodS= foodS-1;
  console.log(foodS)
  database.ref('/').update({
    Food:foodS
  })
}