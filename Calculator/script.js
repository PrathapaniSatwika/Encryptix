document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');
            handleInput(value);
        });
    });

    function handleInput(value) {
        if (value === 'C') {
            display.textContent = '0';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = value;
            } else {
                const lastChar = display.textContent.slice(-1);
                if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
                    display.textContent = display.textContent.slice(0, -1) + value;
                } else if (value === '.' && display.textContent.includes('.')) {
                    // prevent multiple decimals in the same number
                } else {
                    display.textContent += value;
                }
            }
        }
    }
});
