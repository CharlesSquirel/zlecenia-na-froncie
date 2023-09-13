const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const btnClose = document.querySelector(".btn-close");
const popup = document.querySelector(".popup-container");
const body = document.querySelector("body");
const buttons = [btn, btnClose, body];

const toogle = (e) => {
  const target = e.target.classList.value;
  if (target === "btn") {
    container.style.display = "none";
    popup.style.display = "flex";
    body.style.background = "#00000080";
  }
  else if (!popup.contains(e.target) || target === "btn-close") {
    container.style.display = "flex";
    popup.style.display = "none";
    body.style.background = "white";
  }
};

buttons.forEach(btn => {
    btn.addEventListener("click", toogle)
})
