var budgetController = (function() {

})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }

    return {
        getInput : function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings : function() {
            return DOMstrings;
        }
    };

    

})();

var controller = (function(budgetCtrl, UIctrl) {

    var setUpEventListeners = function() {

        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function() {

            if(event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    }

    var ctrlAddItem = function() {
        var input = UIctrl.getInput();
        console.log(input);
    }

    return {
        init: function() {
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
