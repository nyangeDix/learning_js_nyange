

document.querySelector('.btn-add').addEventListener('click', function() {
    var listings = [];
    var get_input = document.querySelector('.item-todo').value;
    listings.push(get_input);

    for(var i = 0; i < listings.length; i++) {
        document.querySelector('.item').textContent = listings[i].appendChild(i);
    }

    console.log(listings)
    
});

//document.querySelector('.item').textContent = listings.push(get_input);

