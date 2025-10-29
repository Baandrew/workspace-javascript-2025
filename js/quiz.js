// implement random quiz

// get the element and change the value
var num1 = Math.floor(Math.random() * 200 + 300);
document.getElementById("m").innerHTML = num1.toString();

var num2 = Math.floor(Math.random() * 50 + 50);
document.getElementById("n").innerHTML = num2.toString();

var num3 = Math.floor(Math.random() * 20 + 10);
document.getElementById("p").innerHTML = num3.toString();

document.querySelector('input[value="4"]').nextSibling.nodeValue=num1.toString() + " - " + num2.toString() + " + " + num3.toString();

// Event  -- div answer box --- CLICK!
function changeStyle(event){ 
    event.preventDefault();
    console.log(this);
    var classname = this.getAttribute("class");
    classname == "answer selected" ? this.setAttribute("class","answer") : this.setAttribute("class","answer selected");
    if (classname == "answer selected" ){
        this.children[0].children[0].checked = false;
    } 
}
for(var i=0; i< 4; i++){
document.getElementsByClassName("answer")[0].addEventListener("click",changeStyle,false);
}

