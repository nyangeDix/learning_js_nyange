var budgetController = (function() {

})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UIctrl) {

    var ctrlAddItem = function() {

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function() {

        if(event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
