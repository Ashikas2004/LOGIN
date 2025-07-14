const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    emailError.textContent = '';
    passwordError.textContent = '';

    // Email validation
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Password validation
    const passwordValue = passwordInput.value;
    if (!passwordValue) {
        passwordError.textContent = 'Password is required.';
        valid = false;
    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    if (valid) {
        alert('Signup successful!');
        form.reset();
    }
}); 