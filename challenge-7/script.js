const arrows = document.querySelectorAll(".arrow-img");
const texts = document.querySelectorAll(".faq-section-description");
const container = document.querySelector(".faq-container");

const toogle = (e) => {
  const arrowToChange = e.target.closest(".arrow-img");
  if (!arrowToChange) return;
  arrows.forEach((arrow) => {
    if (arrow !== arrowToChange) {
      arrow.classList.remove("arrow-rotate");
    }
  });
  const targetText = document.querySelector(`.${arrowToChange.dataset.target}`);
  if (!targetText) return;
  targetText.classList.toggle("show-text");
  arrowToChange.classList.toggle("arrow-rotate");
};

container.addEventListener("click", toogle);
