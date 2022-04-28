function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className = "topnav-responsive";
    } else {
        x.className = "topnav";
    }
}