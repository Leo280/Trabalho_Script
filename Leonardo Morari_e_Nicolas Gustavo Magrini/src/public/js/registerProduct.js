document.getElementById('openModalcadastroProduto').addEventListener('click', () => {
  document.getElementById('modalCadastrarProduto').style.display = 'block';
});

document.getElementById('closeModalProduto').addEventListener('click', () => {
  document.getElementById('modalCadastrarProduto').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('modalCadastrarProduto');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function validateAndSubmitDrink(event) {
  const name = document.getElementById('nameDrink').value.trim();
  const description = document.getElementById('descriptionDrink').value.trim();
  const image = document.getElementById('imageDrink').value;
  let isValid = true;

  document.querySelectorAll('.error-message-drinks').forEach((el) => (el.textContent = ''));

  if (!name) {
    document.getElementById('error-name-drink').textContent = 'Insira o nome da bebida';
    isValid = false;
  }

  if (!description) {
    document.getElementById('error-description-drink').textContent = 'Insira a descrição da bebida';
    isValid = false;
  }

  if (!image) {
    document.getElementById('error-image-drink').textContent = 'Insira uma imagem';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    document.getElementById('CadastroProdutoForm').submit();
  }
}
