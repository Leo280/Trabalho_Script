document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('closeSuccessModal').addEventListener('click', () => {
  document.getElementById('successModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  const successModal = document.getElementById('successModal');
  if (event.target === modal) modal.style.display = 'none';
  if (event.target === successModal) successModal.style.display = 'none';
});

function validateAndSubmitBooking(event) {
  const name = document.getElementById('name').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  let isValid = true;

  document.querySelectorAll('.error-message').forEach((el) => (el.textContent = ''));

  if (!name) {
    document.getElementById('error-name').textContent = 'Informe o nome';
    isValid = false;
  }

  if (!isValidCPF(cpf)) {
    document.getElementById('error-cpf').textContent = 'CPF Inválido';
    isValid = false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date + 'T00:00:00');

  if (!date || inputDate < today) {
    document.getElementById('error-date').textContent = 'A data deve ser a partir de hoje.';
    isValid = false;
  }

  if (!time) {
    document.getElementById('error-time').textContent = 'Por Favor, informe o horário da reserva';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
}

function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
  let firstVerifier = (sum * 10) % 11;
  if (firstVerifier === 10) firstVerifier = 0;
  if (parseInt(cpf[9]) !== firstVerifier) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
  let secondVerifier = (sum * 10) % 11;
  if (secondVerifier === 10) secondVerifier = 0;

  return parseInt(cpf[10]) === secondVerifier;
}

document.getElementById('cpf').addEventListener('input', (event) => {
  const input = event.target;
  const value = input.value.replace(/\D/g, '');

  input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  if (value.length === 11) {
    if (!isValidCPF(value)) {
      input.setCustomValidity('CPF inválido');
      input.classList.add('invalid');
    } else {
      input.setCustomValidity('');
      input.classList.remove('invalid');
    }
  } else {
    input.setCustomValidity('');
    input.classList.remove('invalid');
  }
});
