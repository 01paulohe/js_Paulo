snake;
let food;
let gridSize = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(6);
  snake = new Snake();
  foodLocation();
}

function draw() {
  background(220);
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    foodLocation();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, gridSize, gridSize);
}
