// function run() {

//     var foo = "Foo real";
//     let bar = "Bar for real";

//     console.log(foo + " .... " + bar);

//     {
//         let baz = "Yall wanna drink some baz?";
//         console.log(baz);
//     }

// }

// run();


// var funcs = [];

// for(var i = 0; i < 3; i++) {
//     funcs[i] = function() {
//         console.log("My value: " + i);
//     };
// }

// for(var j = 0; j < 3; j++) {
//     funcs[j]();
// }


// // let name = "Dickson";
// // let name = "Nyange";

// // console.log(name);//SyntaxError

// var a = 5;

// console.log(a >>> 2);


var foo = ['dickson', 'two', 'three'];

var [one, two, three] = foo;

console.log(one);

var dickson, sanderson, rest;

[dickson, sanderson, ...rest] = [800, 340, 450, 780, 890, 900];

console.log(rest);

for(var i = 0; i < rest.length; i++) {
    function getAllRest() {
        var newRest = rest[i] + 1;
        if(newRest <= 800) {
            console.log("Your new resting number is: " + newRest);
        }
    };
    //call the function
    getAllRest();
}

var mangoes, oranges, watermelons, others;
[mangoes, oranges, watermelons, others] = [1200, 450, 8900, 560, 78, 991, 340];

//renary operators
var mangoesStatus = (mangoes === 1200) ? 'The number of mangoes is 1200' : 'Error: no of mangoes invalid';
console.log(mangoesStatus);

var orangesStatus = (mangoes != 458) ? 'Error: No of oranges is not correct' : 'Number of oranges correct';
console.log(orangesStatus);

var waterMelonsStatues = (watermelons !== "8900") ? 'You must have entered a string or another type' : 'Yeah the number is correct';
console.log(waterMelonsStatues);


function addNums(a, b, c) {
    addTion = a + b + c;
    console.log(addTion);
}

var nums = [2, 2, 2];
addNums(...nums);