const cards = document.querySelectorAll('card');
cards.forEach(function(card) {
    card.addEventListener('click', _ => card.classList.toggle('active'));
});

const images = $('.image');
function scrollImages(dir) {
    if(dir === 'left') {
        let src = images[0].src;
        for(let i = 0; i < 4; i++) {
            images[i].src = images[i + 1].src;
        }
        images[4].src = src;
    } else {
        let src = images[4].src;
        for(let i = 4; i > 0; i--) {
            images[i].src = images[i - 1].src;
        }
        images[0].src = src;
    }
}