let videoInModal = document.querySelector('.vimeo_block');
let sliderButtons = document.querySelector('.slider_list__wrapper');

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        const isSupport = webP.height === 2;

        callback(isSupport);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

    if (support) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


const images = document.querySelectorAll("img");

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const img = entry.target;
        img.src = img.src.replace("min", "max");

        if (document.body.classList.contains('webp')) {
            img.src = img.src.replace("png", "webp");
        }

        imgObserver.unobserve(entry.target);
    });
}, imgOptions);

images.forEach((img) => {
    imgObserver.observe(img);
});


if (document.title == 'Works') {
    function openModalOrClose(value) {

        let modalVideoPlayerWrapper = document.querySelector('.modal_video__wrapper');

        if (!modalVideoPlayerWrapper.classList.contains('active')) {
            modalVideoPlayerWrapper.classList.add('active');
            document.body.style.overflow = 'hidden';

        } else if (modalVideoPlayerWrapper.classList.contains('active')) {

            modalVideoPlayerWrapper.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function createElement(str) {
        let element = document.createElement('div');

        element.innerHTML = str;
        return element.firstElementChild;
    }

    function addSliderButtons(number, src1, src2, src3, src4) {

        for (let i = 1; i <= number; i++) {

            let src = arguments[i];

            let sliderButton = document.createElement('button')
            sliderButton.setAttribute('class', 'slider_list__button')

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
                switch (el.id) {
                    case 'soup_station':
                        addSrc('https://player.vimeo.com/video/477094807?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'foundation':
                        addSrc('https://player.vimeo.com/video/477091874?title=0&byline=0&portrait=0"');
                        addSliderButtons(3, 'https://player.vimeo.com/video/477091874?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/489354217?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/496857948?title=0&byline=0&portrait=0"')
                        openModalOrClose();
                        break;
                    case '12monkeys':
                        addSrc('https://player.vimeo.com/video/474605466?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'atelier':
                        addSrc('https://player.vimeo.com/video/474657541?title=0&byline=0&portrait=0"');
                        addSliderButtons(3, 'https://player.vimeo.com/video/474657541?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474657079?&title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474656466?&title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'barly':
                        addSrc('https://player.vimeo.com/video/474603570?title=0&byline=0&portrait=0"',);
                        openModalOrClose();
                        break;
                    case 'belenko':
                        addSrc('https://player.vimeo.com/video/474604827?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'bella':
                        addSrc('https://player.vimeo.com/video/474599041?title=0&byline=0&portrait=0"');
                        addSliderButtons(4, 'https://player.vimeo.com/video/474599041?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474600155?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474600615?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474601134?title=0&byline=0&portrait=0"'
                        );
                        openModalOrClose();
                        break;
                    case 'highFive':
                        addSrc('https://player.vimeo.com/video/474605979?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'labaratolya':
                        addSrc('https://player.vimeo.com/video/474660602?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'madHeads':
                        addSrc('https://player.vimeo.com/video/474601667?title=0&byline=0&portrait=0"');
                        addSliderButtons(3, 'https://player.vimeo.com/video/474601667?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474602062?title=0&byline=0&portrait=0"',
                            'https://player.vimeo.com/video/474603099?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'ofm':
                        addSrc('https://player.vimeo.com/video/474658835?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'theFitz':
                        addSrc('https://player.vimeo.com/video/474659330?title=0&byline=0&portrait=0"');
                        openModalOrClose();
                        break;
                    case 'twlv':
                        addSrc('https://player.vimeo.com/video/474659144?title=0&byline=0&portrait=0"', 'openning');
                        openModalOrClose();
                        break;
                }
            }
        })

        if (e.target === videoCloseButton) {

            openModalOrClose();
            removeSliderButtons();
            setTimeout(() => {
                videoInModal.src = '';
            }, 100)


        } else if (e.target === modalOverlay) {

            openModalOrClose();
            removeSliderButtons();
            setTimeout(() => {
                videoInModal.src = '';
            }, 100)

        }
    })

    document.body.addEventListener('keyup', (e) => {
        let key = e.keyCode;
        if (key === 27) {
            openModalOrClose();
            removeSliderButtons();
            setTimeout(() => {
                videoInModal.src = '';
            }, 100)
        }
    })

}
if (document.title == 'About') {
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

}



