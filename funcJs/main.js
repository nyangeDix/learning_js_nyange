let person = {
    name : ['Bob', 'Mtembezi'],
    yob : 1996,
    age : function(c_year) {
        return c_year - this.yob
    }
}

console.log('My name is ' + person.name[0] + ' ' + person.name[1] + ' I am ' + person.age(2020) + ' years old');
console.log("Dickson's is " + person.age(2020) + " Years Old");