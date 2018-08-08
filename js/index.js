const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .plus, .calc .minus, .calc .multiply, .calc .divide')
    .forEach(button => button.addEventListener('click', numOperClick));

function numOperClick(e) {
    display.value += e.target.innerText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    });

document.querySelector('.calc .clear')
    .addEventListener('click', function () {
        display.value = ' ';
});