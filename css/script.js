let myButton = document.getElementById("back-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
myButton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}