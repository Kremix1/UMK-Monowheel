let button = document.getElementById("nav-toggler");
button.onclick = Nav;

function Nav(){
    $("#burger-menu").toggle(300, function(){
        button.classList.toggle('navbar-toggler-on');
    });
}