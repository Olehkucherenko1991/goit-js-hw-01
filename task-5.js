let country = prompt('Введите название страны!');
let price = 0;
country = country.toLowerCase('');

switch (country) {
  case 'китай':
    country = 'Китай';
    price = 100;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'чили':
    country = 'Чили';
    price = 250;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'австралия':
    country = 'Австралия';
    price = 170;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'индия':
    country = 'Индия';
    price = 80;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'ямайка':
    country = 'Ямайка';
    price = 120;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    console.log('В вашей стране доставка не доступна');
}
