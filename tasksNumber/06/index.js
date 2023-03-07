let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  if (i % 2 === 0) {
    paragraphs[i].style.backgroundColor = "blue";
  } else {
    paragraphs[i].style.backgroundColor = "yellow";
  }
}
