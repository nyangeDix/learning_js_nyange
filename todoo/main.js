//change bg color
var colors = ['yellow', 'pink', 'beige', 'aero', 'amaranth', 'violet', 'azure'];

setInterval(changeBg, 200);

function changeBg() {
    var randomIndex = Math.floor(Math.random() * 6) + 0;
    for(var i = 0; i < colors.length; i++) {
        document.querySelector('.body').style.backgroundColor = colors[randomIndex];
    }
}


var btnGet = document.querySelector('.btn-add');

btnGet.addEventListener('click', addListing);


function addListing() {
    //now the to do list app
        var l_item = document.createElement("li");
        
        var get_user_input = document.querySelector('.item-todo').value;
        var createNode = document.createTextNode(get_user_input);

        l_item.appendChild(createNode);

        if(get_user_input === "") {
            alert("Enter list item");
        } else {
            document.getElementById('list-all-items').appendChild(l_item);
        }
}


var get_list_item_delete = document.querySelector('li');

get_list_item_delete.addEventListener('click', function() {
    get_list_item_delete.style.display = 'none';
});

// var newLi = document.createElement("li");
// var getInput = document.getElementById("list-input").value;
// var textNode = document.createTextNode(getInput);
// newLi.appendChild(textNode);

// //check user submission
// if(getInput === "") {
//     alert("Enter your listing please");
// } else {
//     document.getElementById("list-items-ul").appendChild(newLi);
// }