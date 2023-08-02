import { onSnake, expandSnake } from "./snake.js";
import { RandomGridPosition } from "./grid.js";

let food = getRandomFoodPosition()
const gameBoard = document.getElementById("game-board");
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition()
  }
}

export function draw() {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}


function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = RandomGridPosition()
    }
    return newFoodPosition
}