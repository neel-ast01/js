function sum() {
    var n1 = Number(document.getElementById('math').value);
    var n2 = Number(document.getElementById('science').value);
    var n3 = Number(document.getElementById('ss').value);
    var n4 = Number(document.getElementById('english').value);

    var result = 0;

    result = n1 + n2 + n3 + n4;
    result = result / 4;

    document.getElementById("result").innerHTML = result;

    if (result <= 90) {
        console.log("first class");
    } else if (result <= 60) {
        console.log("second class");
    }
    else {
        console.log("fail");
    }


}