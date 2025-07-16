// Theme toggle functionality
const themeToggleSwitch = document.getElementById('theme-toggle');
const funnyModeSwitch = document.getElementById('funny-mode')
const body = document.body;
const html = document.documentElement;

// Initial class setters
body.classList.add('light-mode');
html.classList.add('professional')

// Light/Dark Mode
themeToggleSwitch.addEventListener('change', function() {
    if (themeToggleSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// Professional/Funny Mode
funnyModeSwitch.addEventListener('change', function() {
    if (funnyModeSwitch.checked) {
        html.classList.remove('professional')
        html.classList.add('funny')
    } else {
        html.classList.remove('funny')
        html.classList.add('professional')
    }
});