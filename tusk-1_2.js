'use strict';

const total = 100;
const ordered = 130;

if (ordered > total || ordered > total) {
  console.log('Недостаточно товара на складе!');
} else if (ordered >= 80 || ordered < 100) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered > 130 || ordered > total)
  console.log('Недостаточно товара на складе!');
