'use strict';

let userInput = prompt('Введите число дроидов ?');
userInput = Number(userInput);
console.log(userInput);

let amountDroids = 0;
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = pricePerDroid * userInput;

// Отмена действия
if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  console.log(`Общая цена заказ ${totalPrice}`);
}

// Высчитываю остаток на счету
let finalAmount = credits - amountDroids * pricePerDroid;

// Проверка
if (credits > totalPrice) {
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${finalAmount} кредитов.`,
  );
} else if (credits < totalPrice) {
  console.log('Недостаточно средств на счету');
}
