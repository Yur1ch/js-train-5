// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
  for (let index in array) {
    console.log(index);
  }
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  return sum;
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
  let product = 1; // Ініціалізуємо добуток як 1, а не 0
  for (let element of array) {
    product *= element; // Перемножуємо елементи
  }
  return product; // Повертаємо добуток
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. Видаліть третій елемент масиву та перетворіть в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
  array.splice(2, 1); // Видаляємо третій елемент масиву
  const result = array.toString(); // Перетворюємо масив в рядок за допомогою методу toString()
  console.log(result); // Виводимо рядок на консоль
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
  for (let element of array) {
    console.log(element.toUpperCase());
  }
}

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) {
  let min = firstElement;

  for (let element of restElements) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
}

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторіть його 2 рази. Результат виведіть на консоль.
function printStrings(array) {
  const joinedString = array.toString();
  const result = joinedString + joinedString;
  console.log(result);
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
  const concatenatedString = array.toString();
  const result = concatenatedString.includes(subString);
  console.log(result);
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
  const resultArray = []; // Ініціалізуємо масив для зберігання результату

  for (let index in array) {
    const originalElement = array[index];
    const modifiedElement = originalElement + 10;
    resultArray.push(modifiedElement);
  }

  console.log(resultArray);
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
  let max = array[0]; // Ініціалізуємо max з першим елементом масиву
  let min = array[0]; // Ініціалізуємо min з першим елементом масиву
  let maxIndex = 0; // Ініціалізуємо maxIndex з нульового значення
  let minIndex = 0; // Ініціалізуємо minIndex з нульового значення

  for (let i = 0; i < array.length; i++) {
    // Перебираємо масив в циклі for
    if (array[i] > max) {
      // Перевіряємо, чи є поточний елемент більшим за max
      max = array[i]; // Оновлюємо max з поточним елементом масиву
      maxIndex = i; // Оновлюємо maxIndex з поточним індексом
    } else if (array[i] < min) {
      // Перевіряємо, чи є поточний елемент меншим за min
      min = array[i]; // Оновлюємо min з поточним елементом масиву
      minIndex = i; // Оновлюємо minIndex з поточним індексом
    }
  }

  [array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]]; // Застосовуємо деструктуризацію масиву для обміну місцями мінімального та максимального значень в масиві

  return array;
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
  let evenNumbers = []; // Створюємо пустий масив для зберігання результату

  for (let i = 0; i < arr.length; i++) {
    // Проходимо через кожен елемент вхідного масиву
    if (arr[i] % 2 === 0) {
      // Перевіряємо чи є число парним
      evenNumbers.push(arr[i]); // Якщо так, додаємо його до масиву результату
    }
  }

  return evenNumbers;
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
  let result = []; // Створюємо пустий масив для зберігання результату

  for (let i = 0; i < arr.length; i++) {
    // Проходимо через кожен елемент вхідного масиву
    result.push(arr[i] * i); // Помножуємо число на його індекс і додаємо до масиву результату
  }

  return result;
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
  let result = []; // Створюємо пустий масив для зберігання результату

  for (let number of arr) {
    // Проходимо через кожен елемент вхідного масиву
    if (number > 10) {
      result.push("Greater than 10"); // Якщо число більше за 10, додаємо "Greater than 10" до масиву результату
    } else {
      result.push("Less than or equal to 10"); // Якщо число менше або дорівнює 10, додаємо "Less than or equal to 10" до масиву результату
    }
  }

  return result;
}

console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]

