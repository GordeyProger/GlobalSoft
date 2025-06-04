document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger_icon');
    const menuBurger = document.querySelector('.menu_burger');
    const body = document.body; // Получаем элемент body
    if (burgerIcon && menuBurger) {
        burgerIcon.addEventListener('click', () => {
            menuBurger.classList.toggle('active');
            body.classList.toggle('no-scroll'); // Добавляем или удаляем класс no-scroll
        });
    }
});