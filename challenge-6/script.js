const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");
const nav = document.querySelector(".nav");
const title = document.querySelector(".title");
const logo = document.querySelector(".logo");
const logoSrc = "./assets/logo.svg";
const darkLogoSrc = "./assets/dark-logo.svg";

const switchDarkMode = () => {
  body.classList.toggle("dark-mode-body-bg");
  circle.classList.toggle("dark-mode-btn");
  title.classList.toggle("dark-mode-text");
  nav.classList.toggle("dark-mode-text");
  logo.setAttribute("src", logo.getAttribute("src") === logoSrc ? darkLogoSrc : logoSrc);
};

btn.addEventListener("click", switchDarkMode);
