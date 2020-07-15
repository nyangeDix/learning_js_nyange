// Strings

let firstName = 'Dickson';
let secondName = 'Nyange';

function calAge(year) {
    return 2020 - year;
}

//using template literals
console.log(`This is ${firstName} ${secondName}. I am ${calAge(1996)} years old`);

const n = `${firstName} ${secondName}`;
console.log(n.startsWith('D')); 
console.log(n.endsWith('e')); 
console.log(n.includes('Nya')); 
console.log(`${firstName}
`.repeat(10));

//ARROW FUNCTIONS
const years = [1990, 1997, 1983, 1996];

const ages = years.map(el => 2016 - el);
console.log(ages);

//BLOCKS AND IIFE'S
{
    let name = 'Dickson Nyange';
    console.log(name);
}

//ARROW FUNCTIONS
const yearofBirth = [1996, 1978, 1966, 2000];

let newAges = yearofBirth.map(el => 2020 - el);


console.log('New ages.....')
console.log(newAges);

// const box1 = {
//     color : 'purple',
//     position : 1,
//     clickMe : function() {

//         document.querySelector('.btn').addEventListener('click', () => {
//             var str = `This is box number ${this.position} of ${this.color}`;
//             alert(str);
//         });

//     }
// }

// box1.clickMe();

console.log('Let\'s print the second statement');

var friends = ['Dixon', 'XCode', 'Shadow Brokers', 'Pennywise'];

function Persons (fName) {
    this.fName = fName;
}

Persons.prototype.myfriends = (friends => {
    var arr = friends.map(el => `${this.fName} is friends with ${el}`);
    console.log(arr);
});

var mike = new Persons('Mike');
mike.myfriends(friends);

//ARRAYS;
const [name, year] = ['John', 26];

console.log(name);
console.log(year);

const obj = {
    firstname: 'Hussein',
    lastname: 'Mohammed'
};

const { firstname, lastname } = obj

console.log(firstname);
console.log(lastname);

function calAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [newage, ageLefttoRetire] = calAgeRetirement(1996);
console.log(newage);
console.log(ageLefttoRetire);

// const boxes1 = document.querySelector('.box');

// Array.from(boxes1).forEach(cur => cur.style.backgroundColor = 'yellow');

// for(const cur of boxes1) {
//     if(cur.className === 'blue') {
//         continue;
//     }

//     cur.textContent = 'I changed to blue';
// }

var crAges = [17, 9, 10, 21, 14];

console.log(crAges.findIndex(cur => cur >= 18));
console.log(crAges.find(cur => cur >= 18));