
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






//axios
const hotelContainer = document.getElementById('hotels-container');
const hotelPhotos = [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop"
];

axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(res => {
        const posts = res.data;
        hotelContainer.innerHTML = ''; 

        posts.forEach((post, index) => {
            hotelContainer.innerHTML += `
                <div class="div3">
                    <img src="${hotelPhotos[index]}" alt="Hotel Room">
                    <h6 class="h6">Travelsy Room ${index + 1}</h6>
                    <p class="p-el">${post.title.slice(0, 40)}...</p>
                    <h6 class="price">${100 + (index * 50)}$ /per night</h6>
                    <div class="i-el"><i class="fa-solid fa-circle-chevron-down"></i></div>
                </div>`;
        });
    })
    .catch(err => console.error("API Error:", err));





    
//localstorage
const cookieBox = document.getElementById('cookieBox');
const acceptBtn = document.getElementById('acceptBtn');

if (!localStorage.getItem('cookieAccepted')) {
    cookieBox.style.display = "flex"; 
}
acceptBtn.addEventListener('click', () => {
    cookieBox.style.display = "none";
    localStorage.setItem('cookieAccepted', 'true');
});