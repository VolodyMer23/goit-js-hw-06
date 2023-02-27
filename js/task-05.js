const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) => {
     outputNameEl.textContent = e.target.value;
     if (e.target.value === '') {
        outputNameEl.textContent = 'Anonymous';
    }
})