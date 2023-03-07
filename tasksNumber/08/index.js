const counterBtn = document.getElementById("counter-btn");
let counter = 1;

counterBtn.addEventListener("click", () => {
  counter += 2;
  counterBtn.innerText = `Contor = ${counter}`;
});
