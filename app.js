function binarySearch(array, target) {
 let left = 0;
 let right = array.length - 1;

 while (left <= right) {
     const mid = Math.floor((left + right) / 2);
     const midValue = array[mid];

     if (midValue === target) {
         return mid; // Элемент найден, возвращаем его индекс
     } else if (midValue < target) {
         left = mid + 1; // Ищем в правой половине
     } else {
         right = mid - 1; // Ищем в левой половине
     }
 }

 return -1; // Элемент не найден, возвращаем -1
}

// Пример использования
const array = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(array, target);

console.log(index); // Выведет 3, так как элемент 7 находится по индексу 3
