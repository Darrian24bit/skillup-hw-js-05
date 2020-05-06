// // Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять.

// // Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// // Данное задание выполните после того как познакомитесь с методами массивов

// // funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let arr = [
  {
    name: "Paul",
    age: 22,
    gender: "male",
  },
  {
    name: "Lora",
    age: 11,
    gender: "female",
  },
  {
    name: "Frank",
    age: 32,
    gender: "male",
  },
  {
    name: "Bob",
    age: 28,
    gender: "male",
  },
  {
    name: "Monica",
    age: 47,
    gender: "female",
  },
];

newobj8t = [];
function tt11(obj, key, znach) {
  for (i = 0; i <= obj.length - 1; i++) {
    let keysys = Object.keys(obj[i]);
    let maleee = Object.values(obj[i]);
    if (keysys.indexOf(key) > 0 && maleee.indexOf(znach) > 0) {
      newobj8t.push(obj[i]);
    }
  }
  console.log(newobj8t);
}
tt11(arr, "gender", "male");
