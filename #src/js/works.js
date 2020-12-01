/* open or close === toggle */
 function openModalOrClose(value) {
     /*
     тут можно проще.
     делать проверку modalVideoPlayerWrapper.classList.contains('active') вместо передачи параметра
     * */

    let modalVideoPlayerWrapper = document.querySelector('.modal_video__wrapper');

    if (value === 'openning') {
        modalVideoPlayerWrapper.classList.add('active');
        document.body.style.overflow = 'hidden';

    } else if (value === 'closing') {

        modalVideoPlayerWrapper.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function createElement(str) {
     /* тут можно было передавать сразу тег аргументом */
     /* создавать элемент и его же возвращать */
    /* но тогда можно сразу вызывать document.createElement('тег') вместо этой ф-ии ) */
    let element = document.createElement('div');

    element.innerHTML = str;
    return element.firstElementChild;
}

// тут можно было передавать только массив из ссылок (links)
function addSliderButtons(number, src1, src2, src3, src4) {

    // Make buttons
    // for (let i = 0; i < links.length; i++) ...
    for (let i = 1; i <= number; i++) {

        let src = arguments[i];
        let sliderButton = createElement(`
        <button class="slider_list__button"></button> 
        `);

        sliderButtons.append(sliderButton);

        sliderButton.onclick = function (e) {
            addSrc(src);

            sliderButton = document.querySelectorAll('.slider_list__button');

            sliderButton.forEach(el => {
                el.classList.remove('slider_list__button_active');
            })

            this.classList.add('slider_list__button_active');
        }
    }
    sliderButtons.firstElementChild.classList.add('slider_list__button_active');
}

function removeSliderButtons() {
    while (sliderButtons.firstChild) {
        sliderButtons.removeChild(sliderButtons.firstChild);
    }
}

function addSrc(src) {

    let partOfSrc = src.substr(32, 8);
    // Check numbers in src
    if (videoInModal.src.substr(32, 8) !== partOfSrc) {
        videoInModal.src = src;
    }
}

document.body.addEventListener('click', (e) => {
    let videoCloseButton = document.querySelector('.modal_video__btn_close');
    let modalOverlay = document.querySelector('.modal_video__overlay');
    let videoImg = document.querySelectorAll('.video__img'); // imageS


    // Modal Video manipulation

    videoImg.forEach(el => {
        if (el === e.target) {

            //https://learn.javascript.ru/switch
            if (el.id === 'soup_station') {

                addSrc('https://player.vimeo.com/video/477094807?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'foundation') {

                addSrc('https://player.vimeo.com/video/477091874?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === '12monkeys') {

                addSrc('https://player.vimeo.com/video/474605466?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'atelier') {

                addSrc('https://player.vimeo.com/video/474657541?title=0&byline=0&portrait=0"');
                addSliderButtons(3, 'https://player.vimeo.com/video/474657541?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474657079?&title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474656466?&title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'barly') {

                addSrc('https://player.vimeo.com/video/474603570?title=0&byline=0&portrait=0"', );
                openModalOrClose('openning');

            } else if (el.id === 'belenko') {

                addSrc('https://player.vimeo.com/video/474604827?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'bella') {

                addSrc('https://player.vimeo.com/video/474599041?title=0&byline=0&portrait=0"');
                addSliderButtons(4, 'https://player.vimeo.com/video/474599041?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474600155?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474600615?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474601134?title=0&byline=0&portrait=0"'
                );
                openModalOrClose('openning');

            } else if (el.id === 'highFive') {

                addSrc('https://player.vimeo.com/video/474605979?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'labaratolya') {

                addSrc('https://player.vimeo.com/video/474660602?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'madHeads') {

                addSrc('https://player.vimeo.com/video/474601667?title=0&byline=0&portrait=0"');
                addSliderButtons(3, 'https://player.vimeo.com/video/474601667?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474602062?title=0&byline=0&portrait=0"',
                    'https://player.vimeo.com/video/474603099?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'ofm') {

                addSrc('https://player.vimeo.com/video/474658835?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'theFitz') {

                addSrc('https://player.vimeo.com/video/474659330?title=0&byline=0&portrait=0"');
                openModalOrClose('openning');

            } else if (el.id === 'twlv') {

                addSrc('https://player.vimeo.com/video/474659144?title=0&byline=0&portrait=0"', 'openning');
                openModalOrClose('openning');

            }
        }
    })

    if (e.target === videoCloseButton) {

        openModalOrClose('closing');
        removeSliderButtons();
        setTimeout(() => {
            videoInModal.src = '';
        }, 100)


    } else if (e.target === modalOverlay) {

        openModalOrClose('closing');
        removeSliderButtons();
        setTimeout(() => {
            videoInModal.src = '';
        }, 100)

    }
})

document.body.addEventListener('keyup', (e) => {
    // https://learn.javascript.ru/destructuring
    let key = e.keyCode;

    if (key === 27) {
        openModalOrClose('closing');
        removeSliderButtons();
        setTimeout(() => {
            videoInModal.src = '';
        }, 100)
    }
})
