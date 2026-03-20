const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const countSelect = document.getElementById('count-select');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

generatorBtn.addEventListener('click', () => {
    const count = parseInt(countSelect.value);
    displayMultipleSets(count);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayMultipleSets(count) {
    lottoNumbersContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const numbers = generateLottoNumbers();
        const setContainer = document.createElement('div');
        setContainer.classList.add('lotto-set');
        
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            setContainer.appendChild(numberElement);
        });
        
        lottoNumbersContainer.appendChild(setContainer);
    }
}
