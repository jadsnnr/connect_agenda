
const whatsappNumber = "5527999344500";

const offerButtons = document.querySelectorAll(
  ".offer-button"
);

offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".offer-card");

    const comboName = card.querySelector("h3").textContent.trim();

    const message =
      `Olá! Vim pelo site da ConnectCar e ` +
      `gostaria de solicitar um orçamento para o ${comboName}.`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  });
});
