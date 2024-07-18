// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.

function changeStyleDelayed(elemenId, delay) {
    setTimeout(() => {
        let element = document.getElementById(elemenId);
        if (element) {
            element.style.color = 'red';
        }
    }, delay)
}

changeStyleDelayed('change_color', 4000)
