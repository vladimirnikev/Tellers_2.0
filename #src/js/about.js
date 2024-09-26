window.onload = function () {

    let cards = document.querySelectorAll('.about_card__wrapper');
    let text = document.querySelector('.main__text_wrapper');
    let title = document.querySelector('.about__title');

    for (let i = 0; i < cards.length; i++) {
        appendCard(cards[i], 800 + (i * 400));
    }

    // for (let element of cards) {
    //     console.log(cards)
    //     appendCard(element, 800 + (element.index * 400));
    // }

    appendCard(title, 400);
    appendCard(text, 2000);
}

function appendCard(element, delay) {

    setTimeout(() => {
        element.classList.add('about_active');
    }, delay)
}
