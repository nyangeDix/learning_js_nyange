function otherFunct() {
    console.log("we are in another funct");
    console.log("do some cool stuff");
}

console.log("start");

setTimeout(() => {
    otherFunct()
}, 5000);

console.log("End");