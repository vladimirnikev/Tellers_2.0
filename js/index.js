// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

let videoInModal = document.querySelector('.vimeo_block');

function openModalOrClose(value) {
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
    let element = document.createElement('div');

    element.innerHTML = str;
    return element.firstElementChild;
}

function addSliderButtons(number, src1, src2, src3, src4) {
    let sliderButtons = document.querySelector('.slider_list__wrapper');
    let srcArray = [src1, src2, src3, src4];
    let sliderButton;
    for (i = 0; i < number; i++) {
        // createElement with id and "onclick=el.src${i}"
        // добавь его в конец блока-родителя
        // при закрытии окна удалить эти блоки
        sliderButton = createElement(`
        
        <button class="slider_list__button" onclick="addSrc(srcArray[i])"></button> 
        `);
        console.log(srcArray[i]);
        sliderButtons.append(sliderButton);
    }
}




// function appendBlockWithVideo(src) {
//     let videoList = createElement(`
//             <iframe class="modal_video" src="${src}" width height
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen></iframe>
//     `)

//     modalVideoPlayerWrapper.append(videoList);
// }

function addSrc(src, action) {
    // let videoInModal = document.querySelector('.vimeo_block');
    videoInModal.src = src;

    // openModalOrClose(action);
}



document.body.addEventListener('click', (e) => {
    let videoCloseButton = document.querySelector('.modal_video__btn_close');
    let modalOverlay = document.querySelector('.modal_video__overlay');
    let videoCard = document.querySelectorAll('.video__card');
    // let videoInModal = document.querySelector('.vimeo_block')

    // Modal Video manipulation

    videoCard.forEach(el => {
        if (el === e.target) {

            if (el.id === '12monkeys') {
                addSrc('https://player.vimeo.com/video/474605466?title=0&byline=0&portrait=0"', 'openning');
                openModalOrClose('openning');
            }
            // else if (el.id === 'admiral') {

            //     addSrc('https://player.vimeo.com/video/474605466?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            // }
            else if (el.id === 'atelier') {
                addSliderButtons(3, 'https://player.vimeo.com/video/474657541?autoplay=1&title=0&byline=0&portrait=0"', 'https://player.vimeo.com/video/474657541?autoplay=1&title=0&byline=0&portrait=0"', 'https://player.vimeo.com/video/474657541?autoplay=1&title=0&byline=0&portrait=0"');
                // addSrc('https://player.vimeo.com/video/474657541?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
                openModalOrClose('openning');
            } else if (el.id === 'barly') {
                addSrc('https://player.vimeo.com/video/474603570?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'belenko') {
                addSrc('https://player.vimeo.com/video/474604827?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'bella') {
                addSrc('https://player.vimeo.com/video/474601134?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'highFive') {
                addSrc('https://player.vimeo.com/video/474605979?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'labaratolya') {
                addSrc('https://player.vimeo.com/video/474660602?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'madHeads') {
                addSrc('https://player.vimeo.com/video/474603099?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'ofm') {
                addSrc('https://player.vimeo.com/video/474658835?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'theFitz') {
                addSrc('https://player.vimeo.com/video/474659330?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            } else if (el.id === 'twlv') {
                addSrc('https://player.vimeo.com/video/474659144?autoplay=1&title=0&byline=0&portrait=0"', 'openning');
            }
        }
    })

    if (e.target === videoCloseButton) {

        openModalOrClose('closing');
        setTimeout(() => {
            videoInModal.src = '';
        }, 500)


    } else if (e.target === modalOverlay) {

        openModalOrClose('closing');
        setTimeout(() => {
            videoInModal.src = '';
        }, 500)

    }
})

document.body.addEventListener('keyup', (e) => {
    let key = e.keyCode;

    if (key == 27) {
        openModalOrClose('closing');
        setTimeout(() => {
            videoInModal.src = '';
        }, 500)
    }
})