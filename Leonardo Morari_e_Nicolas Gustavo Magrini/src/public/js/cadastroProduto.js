//Abrir o modal ao clicar em cadstrar Bebida
document.getElementById('openModalcadastroProduto').addEventListener('click', () => {
  document.getElementById('modalCadastrarProduto').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modalCadastrarProduto').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('modalCadastrarProduto');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


