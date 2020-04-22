const credits = 23580;
const pricePerDroid = 3000;
const order = prompt('Какое количество дроидов Вы хотите купить?');
const totalPrice = pricePerDroid * Number(order);
const balance = credits - totalPrice;

if (totalPrice > credits) {
  let message = 'Недостаточно средств на счету!';
} else if (totalPrice <= credits && order >= 1) {
  let message = `Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`;
} else {
  let message = 'Отменено пользователем!';
}
console.log(message);
