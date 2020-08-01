'use strict';
let countryChoice = prompt('Выберите страну, для доставки');
console.log('Полученное сообщения', countryChoice);

let costOfDelivery;
const country = countryChoice;

countryChoice =
  countryChoice[0].toUpperCase(0) + countryChoice.slice(1).toLowerCase();
console.log('Заглавная буква', countryChoice);

if (countryChoice !== null) {
  switch (countryChoice) {
    case 'Китай':
      costOfDelivery = 100;

      break;

    case 'Индия':
      costOfDelivery = 80;

      break;

    case 'Австралия':
      costOfDelivery = 170;

      break;

    case 'Чили':
      costOfDelivery = 250;

      break;

    case 'Ямайка':
      costOfDelivery = 120;

      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
console.log(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
