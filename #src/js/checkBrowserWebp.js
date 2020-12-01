/* P - это шо? */
function testWebP(callback) {
    var webP = new Image(); // var??
    webP.onload = webP.onerror = function () {
        const isSupport = webP.height === 2;

        /* если у тебя булевая переменная, то старайся называть её isSelected или hasNestedElements */
        /* и старайся делать так, чтобы одна строка делала одно действие, а то у тебя вызов колбека и сравнение в одной */
        /* и сравнение делай через === */
        /* https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality */
        callback(isSupport);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        /* если проверяешь булевые переменные - if (isSupport) или if (!isSupport) */
        /* также можно проверить напрммер */
        // const str = '';
        // if (str) {
        //     console.log('Не выведится');
        // }
        /* и так с любыми типами */
    if (support) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    /* в низу упрощённый колбек */
    });
// форматированию тут PIZDA, не делай так больше

// const addClassName = (isSupport) => {
//     const className = isSupport ? 'webp' : 'no-webp';
//     document.querySelector('body').classList.add(className);
// }
