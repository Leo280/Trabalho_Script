document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const emailErr = document.getElementById('emailError');
  const passwordErr = document.getElementById('passwordError');
  emailErr.textContent = '';
  passwordErr.textContent = '';
  let isValid = true;

  if (!email) {
    emailErr.textContent = 'Email obrigatório';
    isValid = false;
  }
  if (!isEmailValid(email)) {
    emailErr.textContent = 'Insira um email válido';
    isValid = false;
  }
  if (!password) {
    passwordErr.textContent = 'Senha obrigatória';
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

function redirectRegister() {
  window.location.href = '/users/register';
}
