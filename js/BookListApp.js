// Selectors :

const addBookButton = document.querySelector(".app__add-button");
const modalCloseButton = document.querySelector(".form-close");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

// Event Listener :

document.addEventListener("DOMContentLoaded", () => {
  addBookButton.addEventListener("click", showModal);
  modalCloseButton.addEventListener("click", hideModal);
  backdrop.addEventListener("click", hideModal);
});

// Functions :

function showModal() {
  // Show modal :
  modal.style.opacity = "1";
  modal.style.transform = "translateY(-5vh)";

  // Show backdrop :
  backdrop.style.display = "block";
}

function hideModal() {
  // Hide modal :

  modal.style.opacity = "0";
  modal.style.transform = "translateY(-200vh)";

  // Hide backdrop :

  backdrop.style.display = "none";
}
