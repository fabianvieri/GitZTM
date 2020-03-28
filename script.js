const h3CSS = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.body;
const setGradient = () => {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = gradient;
    h3CSS.textContent = body.style.background;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);