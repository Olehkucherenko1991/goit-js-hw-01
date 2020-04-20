const ADMIN_PASSWORD = 'jqueryismyjam';
const userPassword = prompt('Введите пароль!');

if (ADMIN_PASSWORD === userPassword) {
  let message = 'Добро пожаловать!';
  alert(message);
  console.log(message);
} else if (userPassword === null) {
  let message = 'Отменено пользователем!';
  alert(message);
  console.log(message);
} else {
  let message = 'Доступ запрещен, неверный пароль!';
  alert(message);
  console.log(message);
}
