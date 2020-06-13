let colorList = ['red', 'green', 'blue', 'yellow'];

let c_Picker = document.getElementsByClassName('color-pick');

let output = document.getElementById('output');

for(let i = 0; i < c_Picker.length; i++) {
    c_Picker[i].style.backgroundColor = colorList[i];
    c_Picker[i].addEventListener('click', function(){
        changeColor(colorList[i])
    })
}

changeColor = (color) => (output.style.backgroundColor = color);