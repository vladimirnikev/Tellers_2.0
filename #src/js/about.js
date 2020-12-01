/* для понятности лучше назвать функцию */
window.onload = function () {

    /* querySelectorAll возвращает массив узлов => логичнее назвать переменную в множественном числе */
    let cards = document.querySelectorAll('.about_card__wrapper');
    /* в контексе фунции не обязательно писать main. если б у тебя был, например, secondaryText, тогда ладно, а так... */
    let text = document.querySelector('.main__text_wrapper');
    let title = document.querySelector('.about__title');

    /* https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */
    /* https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Statements/for...of */
    /* это поудобнее будет */
    for (let i = 0; i < cards.length; i++) {
        appendCard(cards[i], 800 + (i * 400));
    }

    appendCard(title, 400);
    appendCard(text, 2000);
}

/* e - обычно используется для обозначения события */
function appendCard(element, delay) {

        setTimeout(() => {
            element.classList.add('about_active');
        }, delay)
}
