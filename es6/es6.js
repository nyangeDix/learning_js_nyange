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