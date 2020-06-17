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

function newArray(arr, fn) {
    arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calNewAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18 ? 'Allowed to Vote' : 'Not allowed to Vote';
}

var ages = newArray(years, calNewAge);
console.log(ages);

var checkAgeStatus = newArray(ages, isFullAge);
console.log(checkAgeStatus);

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + 'can you please teach me UI & UX design');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do yo teach, ' + name);
        }
    } else {
        return function(name) {
            console.log('Hello' + name + ' ho are you'); 
        }
    }
}

var currentTeacher = interviewQuestion('teacher');
console.log(currentTeacher('Dixon')); 

function getName(firstName) {
    return(firstName, function(lastname) {
        console.log(firstName + ' ' + lastname);
    });
};

var fullName = getName('Dickson');
console.log(fullName('Nyange'));

function game() {
    var score = Math.random() * 10;
    console.log(score);
}

game();

(
    function () {
        var score = Math.random() * 10;
        console.log("New score: " + score);
})();

//Closures
function checkDriving(nameInput) {
    var currentYear = 2020;
    var canDriveStatus = 'Allowed to Drive';
    var cannotDriveStatus = 'Not allowed to Drive';
    console.log(nameInput);
    return function getStatus(yob) {
        var calAge = currentYear - yob;
        console.log(calAge >= 18 ? canDriveStatus : cannotDriveStatus);
    }
}

checkDriving('Dixon')(1996);

function interviewingProcess(name) {
    var newName = name;
    return function checkJob(job) {
        if(job === 'designer') {
            console.log(newName + ' can you please explain what UI and UX design is?');
        } else if(job === 'teacher') {
            console.log(newName + ' what subject do you teach in school');
        } else {
            console.log(newName + ' what do you do buddy?')
        }
    }
}

interviewingProcess('Stephanie')('Doctor');