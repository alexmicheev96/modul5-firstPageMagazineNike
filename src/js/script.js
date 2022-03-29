document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.sidebar'),   // класс со всеми элементами обычно это UL
    menuItem = document.querySelectorAll('.sidebar__item'),    // это списки li
    hamburger = document.querySelector('.hamburger'),
    logo = document.querySelector('.sidebar__logo-w768'); // класс гамбургера

    console.log(logo);
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('sidebar_active');
        logo.classList.toggle('hidden');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('sidebar_active');
            logo.classList.remove('hidden');
        });
    });
    // video youtube//
    const closeModal = document.querySelector('.modal__close'),
        overlay = document.querySelector('.overlay'),
        player = document.querySelector('.modal__youtube'),
        watchButton = document.querySelectorAll('.button__white');

    watchButton.forEach((item, i) => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('overlay__active');
            switch (i) {
                case 0:
                    player.src = 'https://www.youtube.com/embed/Rm_aiDpkGmQ';
                    break;
                case 1:
                    player.src = 'https://www.youtube.com/embed/MzYYUGnmqLA';
                    break;
                case 2:
                    player.src = 'https://www.youtube.com/embed/BUvEEVq4woU';
                    break;
                default:
                    player.src = 'https://www.youtube.com/embed/u3ePPA0yzSU';
            }

        });
    });
    closeModal.addEventListener('click', () => {
        overlay.classList.remove('overlay__active');
        player.src = 'https://www.none';
    });

    // end video youtube
    const Swipper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        mousewheel: {
            sensitivity: 1,
        },
    });


});