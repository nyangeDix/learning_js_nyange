var btn = document.querySelector('.changeBgColor');
var colors = ['red', 'orange', 'grey', 'pink'];

var clickingBtn = btn.addEventListener('click', changebgColor, true);

window.setInterval(clickingBtn, 1000);

function changebgColor() {
    var randomNumber = Math.floor(Math.random() * 4) + 0;
    for(var i = 0; i < colors.length; i++ ) {
        document.querySelector('.body').style.backgroundColor = colors[randomNumber];
    }
}