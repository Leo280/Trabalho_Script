document.querySelectorAll('.open-modal-btn').forEach((button) => {
  button.addEventListener('click', function () {
    const drinkId = this.dataset.drinkId;

    const drink = drinksToUse.find((d) => d.id == drinkId);

    if (drink) {
      document.getElementById('modalDrinkTitle').innerText = drink.name + '🍹';
      document.getElementById('modalDrinkDescription').innerText = drink.description;

      const modal = document.getElementById('descriptionModal');
      modal.style.display = 'block';
    }
  });
});

document.getElementById('descriptionCloseBtn').addEventListener('click', () => {
  document.getElementById('descriptionModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == document.getElementById('descriptionModal')) {
    document.getElementById('descriptionModal').style.display = 'none';
  }
});
