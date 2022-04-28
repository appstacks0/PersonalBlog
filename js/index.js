document.addEventListener("click", function (e) {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('icon');

    console.log("Click document");
    var isClickOutsideMenu = !menu.contains(e.target);
    var isClickOutsideIcon = !menuIcon.contains(e.target);
    if (isClickOutsideMenu && isClickOutsideIcon && menu.className === "topnav-responsive") {
        //Do something click is outside specified element
        console.log(menu.className);
        menu.className = "topnav";
    } 
}
)

function onClickMenuIcon() {
    var x = document.getElementById("menu");
    console.log("onClickMenuIcon " + x.className);
    if (x.className === "topnav") {
        console.log("onClickMenuIcon 1");
        x.className = "topnav-responsive";
    } else {
        x.className = "topnav";
        console.log("onClickMenuIcon 2");
    }
}


