window.onload = function () {

    let mainCard = document.querySelectorAll('.about_card__wrapper');
    let mainText = document.querySelector('.main__text_wrapper');
    let mainTitle = document.querySelector('.about__title');

    for (i = 0; i < mainCard.length; i++) {
        appendCard(mainCard[i], 800 + (i * 400));
    }

    appendCard(mainTitle, 400);
    appendCard(mainText, 2000);
}

function appendCard(e, delay) {

        setTimeout(() => {
            e.classList.add('about_active');
        }, delay)
}