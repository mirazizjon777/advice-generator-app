const ovalEl = document.getElementById("oval");
const spanEl = document.querySelector("span");
const textEl = document.querySelector("h2");

ovalEl.addEventListener("click", (e) => {
  getAdvice();
});

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  spanEl.textContent = "#" + data.slip.id;
  textEl.textContent = data.slip.advice;
}

getAdvice();
