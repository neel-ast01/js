function month() {


    var result= "";
    var n1 = Number(document.getElementById('month').value);

    if (n1 == 1) {
        result = "jan";
    }
    else if (n1 == 2) {
        document.getElementById("result").innerHTML = "feb";
    }
    else if (n1 == 3) {
        document.getElementById("result").innerHTML = "march";
    }
    else if (n1 == 4) {
        document.getElementById("result").innerHTML = "april";
    }
    else if (n1 == 5) {
        document.getElementById("result").innerHTML = "may";
    }
    else if (n1 == 6) {
        document.getElementById("result").innerHTML = "june";
    }
    else if (n1 == 7) {
        document.getElementById("result").innerHTML = "july";
    }
    else if (n1 == 8) {
        document.getElementById("result").innerHTML = "aug";
    }
    else if (n1 == 9) {
        document.getElementById("result").innerHTML = "sep";
    }
    else if (n1 == 10) {
        document.getElementById("result").innerHTML = "oct";
    }
    else if (n1 == 11) {
        document.getElementById("result").innerHTML = "nov";
    }
    else if (n1 == 12) {
        document.getElementById("result").innerHTML = "dec";
    } else {
        document.getElementById("result").innerHTML = "Input is invaild";
    }
    document.getElementById("result").innerHTML =result;

}

