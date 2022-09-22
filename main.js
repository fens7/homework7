//Создать функцию для расчета произведения двух чисел, вызываемого следующим образом: name(5)(2). Функция должна возвращать результат (в середине функции не должно быть консоль лога!)

function getProduct(a) {
    return function (b) {
        return a * b;
    };
}

console.log(getProduct(5)(2));

// Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.

let arr = [100, 200, 'hello', 300, 400, 'world'];

function getArithmeticNum(array) {
    const numbers = array.filter((i) => typeof i == 'number');
    const sum = numbers.reduce((sum, index) => sum + index, 0);

    return sum / numbers.length;
}

console.log(getArithmeticNum(arr));

//Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

function removeChars(str, chars) {
    let arr = [];
    const splittedArr = str.split('');
    splittedArr.forEach((letter) => {
        if (!chars.includes(letter)) {
            arr.push(letter);
        }
    });

    return arr.join('');
}
console.log(removeChars('Hello World', ['l', 'd']));
