
const carousel = document.querySelector("#services-cards");
const prevBtn = document.querySelector("#prev-service");
const nextBtn = document.querySelector("#next-service");

function getScrollDistance() {
  const card = carousel.querySelector(".service-card");

  if (!card) return 0;

  const gap = parseFloat(
    getComputedStyle(carousel).columnGap
  ) || 0;

  return card.getBoundingClientRect().width + gap;
}

function updateButtons() {
  const maxScroll =
    carousel.scrollWidth - carousel.clientWidth;

  prevBtn.disabled = carousel.scrollLeft <= 1;
  nextBtn.disabled =
    carousel.scrollLeft >= maxScroll - 1;
}

function moveCarousel(direction) {
  carousel.scrollBy({
    left: getScrollDistance() * direction,
    behavior: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "instant" : "smooth"
  });
}

prevBtn.addEventListener("click", () => {
  moveCarousel(-1);
});

nextBtn.addEventListener("click", () => {
  moveCarousel(1);
});

carousel.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);

updateButtons();


const whatsappNumber = "5527999344500";

const serviceCards = document.querySelectorAll(
  "#services-cards .service-card"
);

serviceCards.forEach((card) => {
  const serviceName = card
    .querySelector("h3")
    .textContent.trim();

  const serviceButton = card.querySelector(
    ".service-button"
  );

  if (!serviceButton) return;

  const message =
    `Olá! Vim pelo site da ConnectCar e ` +
    `gostaria de solicitar um orçamento para ` +
    `o serviço de ${serviceName}.`;

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(message);

  serviceButton.href = whatsappLink;
});

