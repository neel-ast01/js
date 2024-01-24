// var result;

// switch (operator) {
//     case '+':
//         result = a + b;
//         console.log(result);
//         break;
//     case '-':
//         result = a + b;
//         console.log(result);
//         break;
//     case '*':
//         result = a + b;
//         console.log(result);
//         break;
//     case '/':
//         result = a + b;
//         console.log(result);
//         break;
//     default:
//         return 0;
// }

// function sum() {
//     var a = parseInt(document.getElementById('n1').value);
//     var b = parseInt(document.getElementsById('n2').value);
//     document.getElementById('result').innerHTML = a + b;

// }

// function sub() {
//     var a = parseInt(document.getElementById('n1').value);
//     var b = parseInt(document.getElementById('n2').value);
//     document.getElementById('result').innerHTML = a - b;

// }

// function mul() {
//     var a = parseInt(document.getElementById('n1').value);
//     var b = parseInt(document.getElementById('n2').value);
//     document.getElementById('result').innerHTML = a * b;

// }

// function div() {
//     var a = parseInt(document.getElementById('n1').value);
//     var b = parseInt(document.getElementById('n2').value);
//     document.getElementById('result').innerHTML = a / b;

// }

function sum() {
    var num1 = Number(document.getElementById('fvalue').value);
    var num2 = Number(document.getElementById('svalue').value);
    document.getElementById('result').innerHTML = num1 + num2;
}

function sub() {
    var num1 = parseInt(document.getElementById('fvalue').value);
    var num2 = parseInt(document.getElementById('svalue').value);
    document.getElementById('result').innerHTML = num1 - num2;

}
function mul() {
    var num1 = parseInt(document.getElementById('fvalue').value);
    var num2 = parseInt(document.getElementById('svalue').value);
    document.getElementById('result').innerHTML = num1 * num2;

}
function div() {
    var num1 = parseInt(document.getElementById('fvalue').value);
    var num2 = parseInt(document.getElementById('svalue').value);
    document.getElementById('result').innerHTML = num1 / num2;

}