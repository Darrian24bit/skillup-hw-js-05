//Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name).
//Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  const [a, b, c, d] = allProdcuts;
  if (productName == a.name) {
    return a.price * a.quantity;
  } else if (productName == b.name) {
    return b.price * b.quantity;
  } else if (productName == c.name) {
    return c.price * c.quantity;
  } else if (productName == d.name) {
    return d.price * d.quantity;
  }
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
