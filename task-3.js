const ADMIN_PASSWORD = 'jqueryismyjam';
const userPassword = prompt('Введите пароль!');
let message = 'Доступ запрещен, неверный пароль!';

if (ADMIN_PASSWORD === userPassword) {
  message = 'Добро пожаловать!';
  alert(message);
} else if (userPassword === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
console.log(message);
