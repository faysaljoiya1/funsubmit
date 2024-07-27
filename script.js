const submitBtn = document.getElementById('submit-btn');
const formContainer = document.querySelector('.form-container');

submitBtn.addEventListener('mouseover', () => {
    let rect = formContainer.getBoundingClientRect();
    let btnRect = submitBtn.getBoundingClientRect();
    let newLeft, newTop;

    do {
        newLeft = Math.random() * (rect.width - btnRect.width);
        newTop = Math.random() * (rect.height - btnRect.height);
    } while (newLeft >= rect.width - btnRect.width || newTop >= rect.height - btnRect.height);

    submitBtn.style.left = newLeft + 'px';
    submitBtn.style.top = newTop + 'px';
});
