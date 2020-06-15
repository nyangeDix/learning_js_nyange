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
