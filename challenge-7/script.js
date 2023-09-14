const arrows = document.querySelectorAll(".arrow-img");
const texts = document.querySelectorAll(".faq-section-description");
const container = document.querySelector(".faq-container");

const toogle = (e) => {
  const arrowToChange = e.target.closest(".arrow-img");
  const targetText = document.querySelector(`.${arrowToChange.dataset.target}`);
  if (!arrowToChange) return;
  if (!targetText) return;
  texts.forEach((text) => {
    text.classList.remove("show-text");
  });
  arrowToChange.classList.toggle("arrow-rotate");
  targetText.classList.toggle("show-text");
};

container.addEventListener("click", toogle);
