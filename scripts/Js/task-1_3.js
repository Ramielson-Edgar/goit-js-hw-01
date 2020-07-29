'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const UserInput = prompt('Введите пароль');
console.log(UserInput);

if (UserInput === null) {
  message = 'Отменено пользователем!';
} else if (UserInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  console.log('Доступ запрещен, неверный пароль!');
  alert('Доступ запрещен, неверный пароль!');
}
console.log(message);
