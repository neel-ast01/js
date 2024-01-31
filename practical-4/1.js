function performOperation() {
    var operation = document.getElementById('operation').value;

    document.getElementById('addInputFields').style.display = operation === 'add' ? 'block' : 'none';
    document.getElementById('removeInputFields').style.display = operation === 'delete' ? 'block' : 'none';
    document.getElementById('submitButton').disabled = operation === '' ? true : false; // Enable/disable button

    if (operation === 'add') {
        addElements();
    } else if (operation === 'delete') {
        deleteElements();
    }
}


function addElements() {
    var numInput = document.getElementById('numInput').value;
    // Validate if the entered number is not negative
    if (numInput < 0) {
        alert("Please enter a non-negative number.");
        return;
    }
    var container = document.getElementById('dynamicContent');
    container.innerHTML = ''; // Clear existing content
    for (var i = 0; i < numInput; i++) {
        var input = createInput(`Input ${i + 1}`);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
}
function deleteElements() {
    var startRange = document.getElementById('startRange').value;
    var endRange = document.getElementById('endRange').value;
    // Validate if the entered ranges are not negative
    if (startRange < 0 || endRange < 0) {
        alert("Please enter non-negative values for the range.");
        return;
    }
    // Validate if the ending range is not less than the starting range
    if (endRange > startRange) {
        alert("Ending range should be greater than or equal to starting range.");
        return;
    }
    var container = document.getElementById('dynamicContent');
    var totalInputs = container.getElementsByTagName('input').length;
    container.innerHTML = ''; // Clear existing content
    for (var i = 1; i <= totalInputs; i++) {
        if (i < startRange || i > endRange) {
            var input = createInput(`Input ${i}`);
            container.appendChild(input);
            container.appendChild(document.createElement('br'));
        }
    }
}
function createInput(placeholder) {
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    return input;
}