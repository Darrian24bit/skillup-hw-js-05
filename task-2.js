// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
    return str.split("").reverse().join("");
};

console.log(reverseString("anything")); //gnihtyna