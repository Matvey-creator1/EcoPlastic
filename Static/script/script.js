function searchOnPage() {
    // Получаем введенное слово
    let searchText = document.getElementById("searchInput").value.trim();
    
    // Очищаем предыдущие выделения
    let content = document.querySelector(".text-page");
    content.innerHTML = content.innerHTML.replace(/<span class="highlight">|<\/span>/g, "");

    if (searchText !== "") {
        // Создаем регулярное выражение для поиска
        let regex = new RegExp(searchText, "gi");
        
        // Заменяем найденные слова на выделенные
        content.innerHTML = content.innerHTML.replace(regex, function(match) {
            return `<span class="highlight">${match}</span>`;
        });
    }
}



// Проверяем, поддерживает ли браузер localStorage
if (typeof(Storage) !== "undefined") {
    // Получаем текущее количество посетителей
    let visitorCount = localStorage.getItem("visitorCount");

    // Если значение отсутствует, инициализируем его
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }

    // Увеличиваем счетчик на 1
    visitorCount += 1;

    // Сохраняем обновленное значение в localStorage
    localStorage.setItem("visitorCount", visitorCount);

    // Отображаем количество посетителей на странице
    document.getElementById("visitorCount").textContent = visitorCount;
} else {
    // Если localStorage не поддерживается
    document.getElementById("visitorCount").textContent = "недоступно";
}




 // Ждем загрузки DOM
 document.addEventListener("DOMContentLoaded", function() {
    // Функция для форматирования даты
    function formatDate(date) {
        const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

        let dayOfWeek = days[date.getDay()]; // День недели
        let day = date.getDate(); // Число
        let month = months[date.getMonth()]; // Месяц
        let year = date.getFullYear(); // Год

        return `${dayOfWeek}, ${day} ${month} ${year} года`;
    }

    // Получаем текущую дату
    let currentDate = new Date();

    // Форматируем дату
    let formattedDate = formatDate(currentDate);

    // Вставляем дату в элемент с id="currentDate"
    document.getElementById("currentDate").textContent = formattedDate;
})







