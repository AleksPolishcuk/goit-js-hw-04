function filterArray(numbers, value) {
  //  порожній масив

  const newNumbers = [];

  // Перевірка всіх елементів масиву

  for (const num of numbers) {
    if (num > value) {
      // Додаємо підходяще число у новий масив

      newNumbers.push(num);
    }
  }

  return newNumbers; // Повертає новий масив
}

// Перевірка роботи функції

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
