function makeArray(firstArray, secondArray, maxLength) {    
    // Створюємо новий масив, який містить усі елементи з першого масиву
    let totalArray = firstArray.slice();
    // Додаємо усі елементи з другого масиву до нового масиву
    totalArray.push(...secondArray);
    
    // Перевіряємо, чи перевищує довжина нового масиву maxLength
    if (totalArray.length > maxLength) {
        // Якщо так, повертаємо копію масиву з довжиною maxLength елементів
        return totalArray.slice(0, maxLength);
    } else {
        // Інакше повертаємо весь новий масив
        return totalArray;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
