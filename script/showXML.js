let test = function() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("innerSection2").innerHTML = xhttp.responseText;
         console.log(xhttp.responseText);
        }
    }
    xhttp.open("GET", "books.xml", true);
    xhttp.send();
    console.log('this section is also loaded');
}

console.log("This script is loaded");

window.addEventListener('load', test);