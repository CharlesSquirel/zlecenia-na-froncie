const arrows = document.querySelectorAll(".arrow-img");
const texts = document.querySelectorAll(".faq-section-description");
const container = document.querySelector(".faq-container");

const toogle = (e) => {
  const targetClass = e.target.classList.value.includes("arrow");
  const targetToToggle = e.target.classList[1];
  if (targetClass) {
    texts.forEach((text) => {
      Array.from(text.classList).some((str) => str === targetToToggle) && text.style.display !== "block" ? (text.style.display = "block") : (text.style.display = "none");
    });
  }
};

container.addEventListener("click", toogle);
