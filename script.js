document.getElementById('add').addEventListener('click', function() {
    calculate('+');
});
document.getElementById('subtract').addEventListener('click', function() {
    calculate('-');
});
document.getElementById('multiply').addEventListener('click', function() {
    calculate('*');
});
document.getElementById('divide').addEventListener('click', function() {
    calculate('/');
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
}
