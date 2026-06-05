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