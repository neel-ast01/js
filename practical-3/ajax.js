function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "movie.xml", true);
    xhttp.send();
    // console.log("hemm");
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr>   <th>TITLE</th>  <th>DIRECTED_BY</th>    <th>STARRING</th>   </tr>";
    var x = xmlDoc.getElementsByTagName("MOVIE");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            
            x[i].getElementsByTagName("DIRECTED_BY")[0].childNodes[0].nodeValue +
            "</td><td>" +

            x[i].getElementsByTagName("STARRING")[0].childNodes[0].nodeValue +
            "</td></tr>";

    }
    document.getElementById("demo").innerHTML = table;
}