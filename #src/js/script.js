let videoInModal = document.querySelector('.vimeo_block');
let sliderButtons = document.querySelector('.slider_list__wrapper');

@@include('checkBrowserWebp.js')
@@include('replaceImg.js')

if (document.title == 'Works') {
    @@include('works.js')
}
if (document.title == 'About') {
    @@include('about.js')
}



