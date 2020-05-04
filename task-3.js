// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

// подсказка: для получения кода используйте специальный метод


function getCodeString(str) {
    let result = "";
    for (let index = 0; index < str.length; index++) {
        result += str.charCodeAt(index) + " ";
    }
    return result.trim();

};
console.log(getCodeString("unicode")); //115 116 114 105 110 103