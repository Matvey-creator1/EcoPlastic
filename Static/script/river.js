document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const data = {
        rivers: ["Янцзы","Инд","Хуанхэ","Хайхэ","Нил","Мегхна, Брахмапутра, Ганг","Чжуцзян","Амур","Нигер","Меконг"],
        percentages: [1500000,164332,124249,91858,84792,72845,52958,38267, 35196,33431]
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.rivers,
            datasets: [{
                label: 'Тонн пластика',
                data: data.percentages,
                backgroundColor: '#e74c3c',
                borderColor: '#c0392b',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Тонн попавших в море'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Название реки '
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});