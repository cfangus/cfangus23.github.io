const backToTopButton = document.querySelector("#back-top-btn");

backToTopButton.addEventListener("click",backToTop);

function backToTop(){
    window.scrollTo(0,0);
}