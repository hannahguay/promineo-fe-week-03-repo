// // ARRAY

// // let customerNames = [];
// // customerNames.push('Sam Smith');
// // customerNames.push('Tommy Guns');
// // customerNames.push('Jimmy John');
// // customerNames.push('Carrie Cardigan');

// // console.log(customerNames[0])

// // for (let i = 0; i < customerNames.length; i++) {
// //     console.log(customerNames[i])
// // }

// // for (name of customerNames) {
// //     console.log(name);
// // }

// // FUNCTION

// // function myFunction() {
// //     for (let i = 0; i < 100; i++) {
// //     console.log(i);
// //     }
// // }

// // myFunction()

// // function createFullName(firstName, lastName) {
// //     return firstName + ' ' + lastName;
// // }
// // //              ^parameters       ^parameters

// // console.log(createFullName('Tom', 'Sawyer'));

// // //              ^arguments ^arguments

// // let fullName = createFullName('Tom', 'Sawyer');

// // INTERMEDIATE ARRAYS

// // map method. calls a function once for each item in the array

// let names = ['Jill', 'Serene', 'Sally', 'Aaron', 'Genna'];
// let lengths = names.map(function(element) {
//     return element.length;
// })
// console.log(lengths);

// // reduce method. taking all values and reducing them to one value
// // final value is result of reducer function
// // finding average of set of values

// let sum = lengths.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 10);

// console.log(sum)

// // for each method. similar to map method.
// // invokes function for each element
// // doesn't store the resulting value

// names.forEach(function(element) {
//     console.log(element);
// });

// // filter method
// // boolean to filter out 

// let evens = names.filter(function(element) {
//     return element.length % 2 == 0;
// })

// console.log(evens)

// // splice method
// // alter the contents by adding/modifying/removing elements from array
// // at a specific location
// // check out MDN

// let removedElement = names.splice(1,1);

// console.log(removedElement)

// //OBJECTS
// //a structure that groups data/functionality 
// //declaring object literals
// //function = standalone piece of functionality
// //method = function that belongs to an object

// let dvdPlayer = {
//     height: 3,
//     width: 18,
//     depth: 12,
//     weight: 7,
//     color: 'black',
//     dvdName: 'Mulan',
//     printDVDName: function() {
//         console.log(this.dvdName);
//     }
// };

// console.log(dvdPlayer.depth);
// dvdPlayer.printDVDName();

// // let x = "testing";

// // function loopUntilX(x){
// //     for(let i = 0; i < x; i++){
// //         console.log(i);
// //     }
// //     return true;
// // }

// // loopUntilX(x);

// // let a = 1; 
// // let b = 2;

// // function sumOfTwo(a, b) {
// //     return a + b;
// // }

// // console.log(sumOfTwo(3))

// // a = 15;

// // function findCircumference(a) {
// //     return 3.141592653589793238 * (2 * a);
// //  }

// //  console.log(findCircumference(a))

// //  //instructor solution

// //  function findCircumference(radius){
// //     return Math.PI * (2 * radius);
// // }

// let cardBalance = 11;
// let price = 7;

// function checkout(cardBalance, price) {
//     if (price > cardBalance) {
//         return false;
//     } else {
//         return (cardBalance - price);
//     }
// }

// console.log(checkout(cardBalance, price));

// let num1 = 5;
// let num2 = 6;
// let num3 = 4;

// function returnSum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(returnSum(num1, num2, num3))

// running into issue on this one, debugger says '.toLowerCase()' is not a function

// let var1 = 1;

// function isBlue(var1){
//     return var1.toLowerCase() === "blue";
// }

// console.log(isBlue(var1));

let x = "Md";

//my solution

// function speakFriend(x) {
//     if (x === "Mellon") {
//         return "Enter";
//     } else {
//         return "Access Denied";
// }
// }

// instructor solution

// function speakFriend(x) {
//     if(x === "Mellon") {
//         return "Enter";
//     }
//     return "Access Denied"
// }

// console.log(speakFriend(x))

let graduates = ["Sarah", "Brock", "Greg", "Gerty"];

function gradList(graduates) {
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
}

console.log(gradList(graduates))


//replace an element

let attendanceList = ['John', 'Nick', 'Clayton'];

attendanceList[0] = 'Steven';

let array = ["Eddie", "Sarah", "Jessica", "Joey"];

function printArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray(array)

function sortArray (array) {
    let reverseArray = array.sort();
    return reverseArray.reverse();
}

