document.getElementById("toggle").addEventListener("click", function () {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}