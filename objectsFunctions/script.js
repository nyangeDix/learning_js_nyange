// var john = {
//     name: 'John',
//     yearOfBirth : 1990,
//     job: 'Teacher'
// };

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}; 

Person.prototype.calAge = function() {
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'President Kingstone';

var john = new Person('John', 1996, 'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calAge();
jane.calAge();
mark.calAge();


console.log(jane.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var Vehicle = function(carName, carType, carColor) {
    this.carName = carName;
    this.carType = carType;
    this.carColor = carColor;
}


Vehicle.prototype.coverage = function() {
    return '890kms';
}

var volvo = new Vehicle('Volvo', 'Truck', 'Silver');
console.log(volvo.carName);
console.log(volvo.carType);
console.log(volvo.carColor);
console.log(volvo.coverage());


var personProto = {
    calculateAge : function() {
        console.log(2020 -this.yearOfBirth)
    }
};

var newJohn = Object.create(personProto);
newJohn.name = 'Johnie';
newJohn.job = 'Soldier';
newJohn.yearOfBirth = 1996;

var newJane = Object.create(personProto, {
    name : {value: 'Jane'},
    job : {value : 'teacher'},
    yearOfBirth : {value : 1996}
});

//primitives vs numbers
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

var obj1 = {
    name : 'Dixon',
    age : 24
}

var obj2 = obj1;
obj1.age = 40;
console.log(obj1.age);
console.log(obj2.age);

var phone = function(brand, color, make) {
    this.brand = brand;
    this.color = color;
    this.make = make;
}

var nokia = new phone('Nokia', 'Black', '1178');
console.log(nokia.brand);
console.log(nokia.color);
console.log(nokia.make);

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = []
    for(var i; i < arrRes.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}