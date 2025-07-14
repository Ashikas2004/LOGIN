const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const message = document.getElementById('message');
const registerMessage = document.getElementById('registerMessage');

showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
  message.textContent = '';
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  registerMessage.textContent = '';
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  message.textContent = '';
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      message.style.color = 'green';
      message.textContent = 'Login successful!';
      // Optionally, store token and redirect
      // localStorage.setItem('token', data.token);
      // window.location.href = '/dashboard.html';
    } else {
      message.style.color = '#e53e3e';
      message.textContent = data.message || 'Login failed';
    }
  } catch (err) {
    message.style.color = '#e53e3e';
    message.textContent = 'Server error';
  }
});

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  registerMessage.textContent = '';
  const username = registerForm.regUsername.value;
  const email = registerForm.regEmail.value;
  const password = registerForm.regPassword.value;
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    if (res.ok) {
      registerMessage.style.color = 'green';
      registerMessage.textContent = 'Registration successful! Please login.';
    } else {
      registerMessage.style.color = '#e53e3e';
      registerMessage.textContent = data.message || 'Registration failed';
    }
  } catch (err) {
    registerMessage.style.color = '#e53e3e';
    registerMessage.textContent = 'Server error';
  }
}); 