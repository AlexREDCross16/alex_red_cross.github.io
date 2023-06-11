let toggle = document.querySelector('.toggle');
let card = document.querySelector('.card');

toggle.addEventListener('click', function () {
    card.classList.toggle('active');
})