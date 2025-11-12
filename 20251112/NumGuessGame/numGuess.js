"use strict";

//Math.random() 0<=randomNum<1 Math.floorは切り捨て
let answer = Math.floor(Math.random() * 100) + 1;
let count = 1;
//container要素の追加
const container = document.querySelector(".container");

const input = document.createElement("input");
input.type = "number";
input.min = 1;
input.max = 100;

const button = document.createElement("button");
button.textContent = "Guess";

const result = document.createElement("p");
//作成した要素をcontainerの子要素に
container.appendChild(input);
container.appendChild(button);
container.appendChild(result);

button.addEventListener("click", () => {
  const guess = Number(input.value);
  if (guess === answer) {
    result.textContent = "Correct!";
    button.disabled = true;
    input.disabled = true;
  } else if (count >= 10) {
    result.textContent = "Game Over!";
    button.disabled = true;
    input.disabled = true;
  } else {
    result.textContent = guess < answer ? "Too low" : "Too high";
    count++;
    input.value = "";
    input.focus();
  }
});
