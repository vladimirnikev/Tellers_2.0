let mainCard = document.querySelectorAll('.about_card__wrapper');

window.onload = function () {
    // IF SCREEN HEIGHT < 1100
    let mainTitle = document.querySelector('.about__title');

    mainTitle.classList.add('about_active');
    // mainCard[0].classList.add('about_active');
    mainCard[1].classList.add('about_active');
}

function appendCard(e) {
    // let distanceFromTop = e.getBoundingClientRect().y - document.documentElement.clientHeight;

    // if (document.documentElement.scrollTop > distanceFromTop) {
    if (e.getBoundingClientRect().y <= document.documentElement.clientHeight) {
        setTimeout(() => {
            e.classList.add('about_active');
        }, 500)
    }
}

// IF SCREEN HEIGHT < 1100
document.addEventListener('scroll', function () {

    let mainText = document.querySelector('.main__text');

    console.log(document.documentElement.scrollTop);

    appendCard(mainCard[0]);
    appendCard(mainCard[2]);
    if (mainCard[2].classList.contains('about_active')) {
        mainText.classList.add('about_active');
    }
})