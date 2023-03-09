// Quesion 1 solution

/*Mutating array methods make direct changes to an array after the array has been created.
 They return a different version of the original array
 
 5 Examples of Mutating arrray methods;
 Array.push()
 Array.splice()
 Array.pop()
 Array.shift()
 array.unshift()
 */

/* Non-mutating array mehtods do not make direct changes to the original version of an array.
 They  may return an undefined value, single values, a new array e.t.c.
 
 5 Examples of Non-mutating array methods;
 Array.map()
 Array.filter()
 Array.concat()
 Array.reduce()
 Array.keys()
 */

// Question 2 solution
const programmingLanguages = ["C#", "Javascript", "Ruby", "PHP", "Python"];
programmingLanguages.push("Kotlin");
programmingLanguages.splice(3, 0, "Java");
programmingLanguages.shift();
programmingLanguages.splice(0, 0, "Scala", "Swift");
programmingLanguages.splice(5, 1, "Go", "Rust");

// Question 3 solution

// The value of fruit after calling the function changeFruit?
fruit = ["apple", "mango", "orange"];

// Question 4 solution

function maxArrayValue(array) {
  return Math.max.apply(null, array);
}

// Question 5 solution

function valTimesIndex(array) {
  return array.map((number, index) => number * index);
}
