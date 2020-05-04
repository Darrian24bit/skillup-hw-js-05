// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (123)

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiple() {
    let result = 1;
    if (arguments.length === 0) return 0;
    for (let i = 0; i < arguments.length; i++) result *= arguments[i];
    return result;
};

console.log(multiple(25, 17, 31)); //13175