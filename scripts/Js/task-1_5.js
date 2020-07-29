'use strict';

let costOfDelivery;
const country = 'Австралия';

let orderDelivery = prompt('Выберите страну, для доставки');
console.log('Полученное сообщения', orderDelivery);

orderDelivery =
  orderDelivery[0].toUpperCase() + orderDelivery.slice(1).toLowerCase();
console.log('Заглавная буква', orderDelivery);

switch (orderDelivery) {
  case 'Китай':
    costOfDelivery = 100;
    alert('В вашей стране доставка не доступна');
    break;

  case 'Индия':
    costOfDelivery = 80;
    alert('В вашей стране доставка не доступна');
    break;

  case 'Австралия':
    costOfDelivery = 170;
    console.log(
      `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`,
    );
    break;

  case 'Чили':
    costOfDelivery = 250;
    console.log('Недостаточно средств!');
    break;

  case 'Ямайка':
    costOfDelivery = 120;
    break;
}
console.log('Цена за доставку', costOfDelivery);
