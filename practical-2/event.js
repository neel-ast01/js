// function list() {    
// }

let btn = document.getElementById('btn');
btn.addEventListener("click", function() {

    var textbox = document.createElement("input");
    document.body.appendChild(textbox);

    var close = document.createElement("button");
    close.innerHTML = 'Close';
    document.body.appendChild(close);

    close.onclick = function(){
        textbox.remove();
        close.remove();
    }

}, {once : true});