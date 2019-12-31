/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true;
}

let a = {};
let b = { name: 'Jeff' };

console.log(isEmpty(a));
console.log(isEmpty(b));