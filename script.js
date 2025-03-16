const toggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

let darkMode = false;

toggle.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#eee';
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    }
});
