const credits = 23580;
const pricePerDroid = 3000;
const order = prompt('Какое количество дроидов Вы хотите купить?');
const totalPrice = pricePerDroid * order;
const balance = credits - totalPrice;

if (totalPrice > credits) {
  let message = 'Недостаточно средств на счету!';
  console.log(message);
} else if (totalPrice <= credits && order >= 1) {
  let message = `Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`;
  console.log(message);
} else {
  let message = 'Отменено пользователем!';
  console.log(message);
}
