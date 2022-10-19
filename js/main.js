"use strict";

function randomNumber() {
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);

  let effort = 10;

  function guessTheNumber() {
    let userNumber = prompt("Угадай число от 1 до 100", "34");

    if (effort <= 0) {
      let noAttempt = confirm("Попытки закончились, сыграть ещё?");
      if (noAttempt === true) {
        randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
        effort = 10;
        guessTheNumber();
      }
    }
    if (isNaN(userNumber)) {
      alert("Введи число");
      guessTheNumber();
    }
    if (userNumber === null) {
      alert("Игра окончена");
      return 0;
    }
    if (+userNumber == randomNumber) {
      let win = confirm("Поздравляем! Вы угадали. Хотели бы сыграть ещё?");
      if (win === true) {
        randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
        effort = 10;
        guessTheNumber();
      }
      return 0;
    }
    if (+userNumber > randomNumber) {
      effort--;
      alert("Загаданное число меньше. Осталось попыток: " + effort);
      guessTheNumber();
    }
    if (+userNumber < randomNumber) {
      effort--;
      alert("Загаданное число больше. Осталось попыток: " + effort);
      guessTheNumber();
    }
  }
  guessTheNumber();
}
randomNumber();
