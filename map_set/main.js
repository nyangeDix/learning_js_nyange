let grades = {
    semister1 : 'A',
    semister2 : 'C',
    semister3 : 'A'
}

let map = new Map();

map.set('firstname', 'Dickson');
map.set('Year of birth', 1996);
map.set('education', 'JKUAT');
map.set(grades, 'Success');

console.log(map.get('education'));

if(map.get('Year of birth') >= 1990) {
    console.log("You are allowed to vote")
} else {
    console.log("Not allowed to vote");
}

if(map.has('firstname') !== true) {
    console.log("Not found");
} else {
    console.log(map.get('firstname'));
}

console.log(map.get(grades));

console.log(map.size);

let fruits = new Map([
    ['oranges', 7800],
    ['mangoes', 1200],
    ['ovacadoes', 900]
]);

//iterating by keys
for(let fruit of fruits.keys()) {
    console.log(fruit);
}

//iterating by value
for(let fruitPrice of fruits.values()) {
    console.log(fruitPrice);
}

fruits.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

let person = {
    name : 'Samuel',
    age : 90
};

let newPerson = new Map(Object.entries(person));

console.log(`The oldest person in our village is ${newPerson.get("name")}`);

let muchFruits = new Map([
    ['lemons', 340],
    ['mangoes', 500],
    ['baobab', 900]
]);

let newmuchFruits = Object.entries(muchFruits);

console.log(newmuchFruits); //returns and array or object