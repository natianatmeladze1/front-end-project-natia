
let burger = document.querySelector('.burger');
let ulElements = document.querySelector('.ul-elements');


burger.addEventListener('click', () => {
    ulElements.classList.toggle('active');
});


let menuLinks = document.querySelectorAll('.ul-elements li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        ulElements.classList.remove('active');
    });
});