const buttons = document.querySelectorAll('button');
const container = document.querySelector('div#container');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        container.textContent = btn.dataset.text;
    });
});