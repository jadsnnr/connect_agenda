
const scheduleButton = document.querySelector(
  "#profile-status-button"
);

const scheduleModal = document.querySelector(
  "#schedule-modal"
);

const closeModal = document.querySelector(
  "#close-modal"
);

scheduleButton.addEventListener("click", () => {
  scheduleModal.showModal();
});

closeModal.addEventListener("click", () => {
  scheduleModal.close();
});

// Fecha ao clicar fora do conteúdo
scheduleModal.addEventListener("click", (event) => {
  if (event.target === scheduleModal) {
    scheduleModal.close();
  }
});