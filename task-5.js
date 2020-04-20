const country = prompt('Введите название страны!');
const textNormalize = country.toLocaleLowerCase;
const credit = 0;
const Китай = 100;
const Чили = 250;
const Австралия = 170;
const Индия = 80;
const Ямайка = 120;

switch (country) {
  case 1:
    result = Китай;
    break;

  case 2:
    result = Чили;
    break;

  case 1:
    result = Австралия;
    break;

  case 1:
    result = Индия;
    break;

  case 1:
    result = Ямайка;
    break;

  default:
    alert: 'В вашей стране доставка не доступна';
}
