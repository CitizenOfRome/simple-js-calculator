(function() {
    'use strict';
    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }
    console.log('1 + 2 =', add(1, 2));
    console.log('1 - 2 =', sub(1, 2));
    console.log('2 * -5 =', mul(2, -5));
    console.log('2 / -5 =', div(2, -5));
    function calculate() {
        console.log('calculate called', arguments);
        // 1. Get the values
        var firstInputValue = document.getElementById('firstInput').value,
            secondInputValue = document.getElementById('secondInput').value,
            operatorValue = document.getElementById('operator').value,
            result = null;
        console.log('firstInputValue', firstInputValue);
        console.log('secondInputValue', secondInputValue);
        console.log('operatorValue', operatorValue);
        // parseInt
        // parseFloat
        firstInputValue = parseFloat(firstInputValue);
        secondInputValue = parseFloat(secondInputValue);
        // 2. Call the correct function based on the selected operation
        switch(operatorValue) {
            case 'add':
                result = add(firstInputValue, secondInputValue);
                break;
            case 'sub':
                result = sub(firstInputValue, secondInputValue);
                break;
            case 'mul':
                result = mul(firstInputValue, secondInputValue);
                break;
            case 'div':
                result = div(firstInputValue, secondInputValue);
                break;
        }
        console.log('result', result);
        // 3. Display the calculated result
        document.getElementById('result').innerHTML = result;
        return false;
    }
    window.calculate = calculate;
})();