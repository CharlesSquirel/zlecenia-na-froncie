const arrows = document.querySelectorAll(".arrow-img");
const texts = document.querySelectorAll(".faq-section-description");
const container = document.querySelector(".faq-container");

const toogle = (e) => {
  const targetClass = e.target.classList.value.includes("arrow");
  const targetToToggle = e.target.classList[1];
  const arrowToChange = e.target;
  // const arrowToChange = Array.from(arrows)
  //   .map((arrow) => arrow.classList)
  //   .filter((arrow) => arrow === targetToToggle);
  if (targetClass) {
    arrowToChange.src = arrowToChange.src = "./assets/arrow-right.svg" ? "./assets/arrow-down.svg" : "./assets/arrow-right.svg";

    texts.forEach((text) => {
      if (Array.from(text.classList).some((str) => str === targetToToggle) && text.style.display !== "block") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    });
  }
};

container.addEventListener("click", toogle);
