document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nameUser = document.getElementById('name').value.trim();
  console.log(`Nome user: ${nameUser}`);
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error');
  let isValid = true;

  errorMsg.textContent = '';
  errorMsg.style.display = 'none';

  if (!nameUser || !email || !password) {
    errorMsg.textContent = 'Por favor, preencha todos os campos.';
    errorMsg.style.display = 'block';
    isValid = false;
  }

  if (!isEmailValid(email)) {
    errorMsg.textContent = 'Email no formato inválido. Ex: email@email.com';
    isValid = false;
  }

  if (isValid) {
    this.submit();
  }
});

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;
  return emailRegex.test(email);
}

function redirectLogin() {
  window.location.href = '/users/login';
}
