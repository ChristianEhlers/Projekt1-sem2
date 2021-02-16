let test = function() {
    let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
}
xhttp.open("GET", "books.xml", true);
xhttp.send();
}

window.addEventListener('load', test);