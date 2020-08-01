'use strict';

const total = 100;
const ordered = 130;

if (ordered > total) {
  console.log('Недостаточно товара на складе!');
} else if (ordered < total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}
