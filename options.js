// Theme toggle functionality
const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Set initial theme to light
body.classList.add('light-mode');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});