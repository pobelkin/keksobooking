// Функция генерации случайного числа из заданного диапазона

// eslint-disable-next-line no-unused-vars
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  let result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

//Функция генерации случайного числа с методом .toFixed(), возврат числа с плавающей запятой

// eslint-disable-next-line no-unused-vars
const getRandomFloat = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  let result = Math.random() * (max - min + 1) + min;
  return result.toFixed(decimal);
}
