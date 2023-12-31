var Calculator = {
    init: function() {
        var that = this;
        if (!that.isInited) {
            that.isInited = true;
            //Save operation information
            // next: String, Next data to be calculated with total
            // action: String, Operating symbols
            that.data = { total: 0, next: '', action: '' };
            that.bindEvent();
        }
    },
    bindEvent: function() {
        var that = this;
        // Get the. cal keyboard element
        var keyboardEl = document.querySelector(".cal-keyboard");
        keyboardEl && keyboardEl.addEventListener('click', function(event) {
            // Obtain the currently clicked dom element
            var target = event.target;
            // Obtain the data action value of the target
            var action = target.dataset.action;
            // Obtain the content of the target
            var value = target.innerText;
            if (action === 'num' || action === 'operator') {
                that.result(value, action === 'num');
            }
        });
    },
    result: function(action, isNum) {
        var that = this;
        var data = that.data;
        if (isNum) {
            data.next = data.next === '0' ? action : (data.next + action);
            !data.action && (data.total = 0);
        } else if (action === '清空') {
            // Set the corresponding state during emptying
            data.total = 0;
            data.next = "";
            data.action = "";
        } else if (action === '=') {
            if (data.next || data.action) {
                data.total = that.calculate(data.total, data.next, data.action);
                data.next = '';
                data.action = '';
            }
        } else if (!data.next) {
            data.action = action;
        } else if (data.action) {
            data.total = that.calculate(data.total, data.next, data.action);
            data.next = '';
            data.action = action;
        } else {
            data.total = +data.next || 0;
            data.next = '';
            data.action = action;
        }

        // Get the. origin value element
        var valEl = document.querySelector(".origin-value");
        // print(data)
        valEl && (valEl.innerHTML = data.next || data.total || '0');
    },
    calculate: function(n1, n2, operator) {
        n1 = +n1 || 0;
        n2 = +n2 || 0;
        if (operator === '÷') {
            // Obtain the result of division
            return n2 === 0 ? 0 : Math.floor((n1 / n2) * 100) / 100;
        } else if (operator === 'x') {
            // Obtain the result of multiplication
            return Math.floor((n1 * n2) * 100) / 100;
        } else if (operator === '+') {
            // Obtain the result of addition
            return Math.floor((n1 + n2) * 100) / 100;
        } else if (operator === '-') {
            // Obtain the result of subtraction
            return Math.floor((n1 - n2) * 100) / 100;
        }
    }
};
Calculator.init();