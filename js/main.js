document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.menu__tab-btn');
    const tabContentGrids = document.querySelectorAll('.menu__grid');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Видаляємо клас active у всіх кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Видаляємо клас active у всього контенту меню
            tabContentGrids.forEach(grid => grid.classList.remove('active'));

            // 3. Додаємо active на натиснуту кнопку
            button.classList.add('active');
            
            // 4. Показуємо відповідну сітку страв за допомогою data-tab атрибуту
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Відкриття / Закриття меню при кліку на гамбургер
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Закриття меню при кліку на будь-яке посилання (плавний скрол до розділу)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});