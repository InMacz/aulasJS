const texto = document.querySelector('.texto');

window.addEventListener('mousemove', (e) => {
    const rect = texto.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    texto.style.setProperty('--x', x + 'px');
    texto.style.setProperty('--y', y + 'px');
});