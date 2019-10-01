const cards = document.querySelectorAll('card');
cards.forEach(function(card) {
    card.addEventListener('click', _ => card.classList.toggle('active'));
});