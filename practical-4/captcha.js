function generateCaptcha() {
    const length = 4; // Number of digits
    let captchaText = '';
    for (let i = 0; i < length; i++) {
        captchaText += Math.floor(Math.random() * 10); // Generate a random digit
    }
    document.getElementById('captcha-image').innerText = captchaText;
    document.getElementById('captcha-answer').value = captchaText; // Store answer in hidden input
    return captchaText;
}

const captchaAnswer = generateCaptcha();

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    const userAnswer = document.querySelector('.captcha-input').value;
    if (userAnswer === document.getElementById('captcha-answer').value) {
        alert('CAPtcha verified!'); 
    } else {
        alert('Incorrect CAPTCHA. Please try again.');
        generateCaptcha();
    }
});
