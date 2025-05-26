document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const hiddenContent = this.previousElementSibling;
        hiddenContent.classList.toggle('show');
        this.classList.toggle('active');
        this.textContent = hiddenContent.classList.contains('show') ? 'Скрыть' : 'Ещё';
    });
});