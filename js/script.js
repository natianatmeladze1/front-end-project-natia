
let burger = document.querySelector('.burger');
let ulElements = document.querySelector('.ul-elements');

burger.addEventListener('click', () => {
    ulElements.classList.toggle('active');
});


// form validation
const registerForm = document.querySelector('.register-form');
const inputs = document.querySelectorAll('.register-input');

registerForm.addEventListener('submit', (event) => {
    let hasError = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
            input.placeholder = "Fill the field!";
            input.value = ""; 
            hasError = true;
        } else {
            input.style.border = "1px solid #c9dff3";
        }
    });
    if (hasError) {
        event.preventDefault();
    } else {
        console.log("Form submitted successfully!");
    }
});


//scroll on top
const btn = document.getElementById("topBtn");
window.onscroll = () => btn.style.display = window.scrollY > 300 ? "block" : "none";
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


