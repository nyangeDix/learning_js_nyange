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

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum = addFourAges(...ages);
console.log(sum);

//Spread operators
let family1 = ['Dixon', 'Flora', 'Sanderson', 'Scaver'];
let family2 = ['Felix', 'Grace'];
let newFamily = [...family1, 'Felix Jrn', 'Grace Jrn', ...family2];
console.log(newFamily);

function isFullYears(...years) {
    years.forEach(cr => console.log(2020 - cr) >= 18);
}

isFullYears(1994, 1997, 2000);


function smithPerson (firstname, yearofBirth, lastname = 'Smith', nationality = 'Kenyan') {
    this.firstname = firstname;
    this.yearofBirth  = yearofBirth;
    this.lastname = lastname;
    this.nationality;
}

let chris = new smithPerson('Chris', 1998);


let map = new Map();

//set 
map.set('1', 'Str1');
//map.set(1,'Num1');
map.set(true, 'bool1');

//get
console.log(map.get('1'));//returns Str1
console.log(map.get(true));

console.log(map.has(1) ? 'The map has a value: num1' : map.set(1, 'Num1'));
console.log(map.get(1)); //returns num1

console.log(map.size);

let john = {
    name : 'Johnson'
}

let hosVisits = new Map();

hosVisits.set(john, 23);

console.log(`${john.name} has taken ${hosVisits.get(john)} visits to Thika level five hospital`);

//Looping through a Map
let recipeMap = ([
    ['cucumber', 23],
    ['tomatoes', 34],
    ['onions', 90]
]);

for (let vegies of recipeMap.keys()) {
    console.log(vegies);
}

for(let vegNumbers of recipeMap.values()) {
    console.log(vegNumbers);
}


class Person34 {

    constructor(name, yearofBirth, job) {
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.job = job;
    }

    calculateAge() {
        const cYear = new Date().getFullYear();
        const num = cYear - 1996;
        console.log(num);
    }

    sayHello() {
        console.log(`${this.name} say hello!`);
    }

    // static newGreetings() {
    //     console.log('Hello there');
    // }
}

class Athlete6 extends Person34 {
    constructor(name, yearofBirth, job, olympicGames, medals) {
        super(name, yearofBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }

    olyGames() {
        if(this.olympicGames >= 2) {
            console.log(`${this.name} is an experienced ${this.job}`);
        } else {
            console.log(`${this.name} is going back to the academy for more training`);
        }
    }
}

const Husein = new Person34('John', 1996, 'Software Engineer');
Husein.sayHello();
Husein.calculateAge();
Husein.newGreetings;

HuseinAthelete = new Athlete6('Husein Mohammed', 1997, 'Athelete', 4, 10);
HuseinAthelete.wonMedals();
HuseinAthelete.calculateAge();
HuseinAthelete.olyGames(1);