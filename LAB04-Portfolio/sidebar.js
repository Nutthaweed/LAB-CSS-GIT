const NavBar = document.querySelector('nav'),
menuButton = document.querySelectorAll('.menu-btn'),
overlay = document.querySelector('.overlay');


menuButton.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
         NavBar.classList.toggle("display");
    });
});

overlay.addEventListener('click', () => {
    NavBar.classList.remove("display");
});