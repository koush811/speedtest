const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  const val = input.value;
  const text = p.textContent;
  const reg = new RegExp(val, "g");
  const replacedText = text.replaceAll(reg, `<span>${val}</span>`);
  p.innerHTML = replacedText;
  const spans = p.querySelectorAll("span");
  spans.forEach((span) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    span.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
});