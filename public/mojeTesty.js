
// spread operator ******************************************************

function dodaj(a, b, c) {
    console.log(a+b+c);
}

dodaj(5,6,7);

const nums = [7,8,9,10,5,5];

dodaj(...nums);
dodaj(...nums);

const meats = ['bacon', 'ham'];
const food = ['apples', 'kiwi', 'rice'];

const food2 = ['apples', ...meats, 'kiwi', 'rice'];
console.log(food2);

const arr1 = [1,2,3];
const arr2 = arr1;
arr2.push(10);
console.log(arr1);
console.log(arr2);

const arr3 = [...arr1];
arr3.push(7);
console.log(arr1);
console.log(arr2);
console.log(arr3);


// rest operator ************************************************

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}

var arr = multiply(2,3,4,5);
console.log('arr', arr);