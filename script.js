const backToTopButton = document.querySelector("#back-top-btn");

backToTopButton.addEventListener("click",backToTop);

function backToTop(){
    window.scrollTo(0,0);
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})