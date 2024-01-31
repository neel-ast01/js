
var totalTextBoxes = 0;

function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x !== "") {
        document.getElementById("inputField").style.display = "block";
    } else {
        document.getElementById("inputField").style.display = "none";
    }
}

function addOrRemoveTextBoxes() {
    var num = document.getElementById("numField").value;
    var container = document.getElementById("textBoxes");
    var x = document.getElementById("mySelect").value;

    if (x === "1") {
        for (var i = 0; i < num; i++) {
            var input = document.createElement("input");
            input.type = "text";
            input.value = i + 1;
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
            totalTextBoxes++;
        }
    } else if (x === "2") {
        for (var i = 0; i < num; i++) {
            if (container.hasChildNodes()) {
                container.removeChild(container.lastChild); // remove the line break
                container.removeChild(container.lastChild); // remove the input field
                totalTextBoxes--;
            }
        }
    }
}
