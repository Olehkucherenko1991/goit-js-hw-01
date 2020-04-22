const total = 100;
const ordered = 50;
let message;
let isBuying = ordered >= 1 && ordered <= total;
if ((isBuying = ordered > total)) {
  message = 'На складе недостаточно твоаров!';
} else if ((isBuying = ordered >= 1 && ordered <= total)) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);
