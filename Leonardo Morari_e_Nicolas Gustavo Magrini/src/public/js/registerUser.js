document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nameUser = document.getElementById('name').value.trim();
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
    errorMsg.style.display = 'block';
    isValid = false;
  }

  if (!isPasswordMatchingPattern(password)) {
    errorMsg.textContent = 'Senha no formato inválido. Ex: Senha123!';
    errorMsg.style.display = 'block';
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

function isPasswordMatchingPattern(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}

function redirectLogin() {
  window.location.href = '/users/login';
}
