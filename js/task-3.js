const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimValue = nameInput.value.trim();
    if (trimValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trimValue;
    }
});
