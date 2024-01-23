function countCurrency(amount) {
    let notes = [500, 200, 100, 50, 20, 10, 5, 1];
    let noteCounter = Array(8).fill(0);

    // count notes using Greedy approach
    for (let i = 0; i < 8; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount % notes[i];
        }
    }

    // Print notes
    let output = "Currency Count -> <br>";
    for (let i = 0; i < 8; i++) {
        if (noteCounter[i] != 0) {
            output += notes[i] + " : " + noteCounter[i] + "<br>";
        }
    }
    return output;
}
function showResult() {
    let amount = document.getElementById("amount").value;
    let result = document.getElementById("result");
    if (amount == "") {
        result.innerHTML = "Please enter a valid amount.";
    } else {
        result.innerHTML = countCurrency(amount);
    }
}
