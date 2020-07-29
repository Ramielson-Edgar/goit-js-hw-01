'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let amountDroids = 8;
let totalPrice = pricePerDroid * amountDroids;

let userInput = prompt('Введите число дроидов ?');
console.log(userInput);

// Отмена действия
if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = console.log(`Общая цена заказ ${totalPrice}`);
}

// Высчитываю остаток на счету
let finalAmount = credits - amountDroids * pricePerDroid;

// Проверка
if (userInput >= 1 && userInput < 8) {
  console.log(
    `Вы купили ${amountDroids} дроидов, на счету осталось ${finalAmount} кредитов.`,
  );
} else if (userInput > 7) {
  console.log('Недостаточно средств на счету');
}
