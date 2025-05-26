document.addEventListener('DOMContentLoaded', function() {
    // Получаем текущий URL страницы
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Находим все ссылки в навигации
    const navLinks = document.querySelectorAll('.nav-a');
    
    // Перебираем ссылки и сравниваем с текущей страницей
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Удаляем класс active у всех ссылок
        link.classList.remove('active');
        
        // Если ссылка соответствует текущей странице, добавляем класс active
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});