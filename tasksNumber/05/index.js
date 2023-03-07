let container = document.getElementById("container");

container.addEventListener("mouseover", () => {
  container.classList.add("verde");
});

container.addEventListener("mouseout", () => {
  container.classList.remove("verde");
});
