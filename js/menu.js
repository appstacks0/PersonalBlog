document.addEventListener("click", function (e) {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('icon');

    var isClickOutsideMenu = !menu.contains(e.target);
    var isClickOutsideIcon = !menuIcon.contains(e.target);
    if (isClickOutsideMenu && isClickOutsideIcon && menu.className === "topnav-responsive") {
        menu.className = "topnav";
    }
}
)

function onClickMenuIcon() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className = "topnav-responsive";
    } else {
        x.className = "topnav";
    }
}


