window.addEventListener('load', function() {
    // Скрыть прелоадер
    document.getElementById('preloader').style.display = 'none';
    
    // Показать контент
    document.querySelector('.content').style.display = 'block';
});

const titleText = "Привет! Я - Евгений";
const seniorSubtitleText = "Senior ) ) )";
const juniorSubtitleText = "Junior QA engineer";

function typeWriter(text, elementId, delay, callback) {
    let index = 0;

    function type() {
        if (index < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else if (callback) {
            callback(); // Вызов колбэка после завершения печати
        }
    }

    type();
}

function eraseText(elementId, length, delay, callback) {
    let index = length;

    function erase() {
        if (index > 0) {
            document.getElementById(elementId).innerHTML = document.getElementById(elementId).innerHTML.slice(0, index - 1);
            index--;
            setTimeout(erase, delay);
        } else if (callback) {
            callback(); // Вызов колбэка после завершения стирания
        }
    }

    erase();
}

// Добавляем задержку перед печатью заголовка
setTimeout(() => {
    // Запускаем эффект печати заголовка
    typeWriter(titleText, 'title', 90, () => {
        // После завершения печати заголовка печатаем подзаголовок "Senior QA engineer"
        typeWriter(seniorSubtitleText, 'subtitle', 90, () => {
            // Добавляем задержку перед стиранием
            setTimeout(() => {
                // После задержки стираем "Senior"
                eraseText('subtitle', seniorSubtitleText.length - 0, 60, () => { // seniorSubtitleText.length - 7 соответствует длине "QA engineer"
                    // После стирания добавляем "Junior" перед "QA engineer"
                    typeWriter(juniorSubtitleText, 'subtitle', 90);
                });
            }, 1000); // Задержка в 1000 мс (1 секунда)
        });
    });
}, 1000); // Задержка в 1000 мс (1 секунда) перед началом печати заголовка

function showMessage() {
    document.getElementById('message').style.display = 'block'; // Показываем сообщение
}
