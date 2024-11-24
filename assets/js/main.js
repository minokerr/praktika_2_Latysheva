const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // стандартное поведение формы

    showAlert();
});
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // стандартное поведение формы

    showAlert();
});
