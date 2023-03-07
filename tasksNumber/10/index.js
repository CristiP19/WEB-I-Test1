const disciplineList = document.getElementById("discipline-list");
const displayDisciplineBtn = document.getElementById("display-discipline-btn");
const div = document.getElementById("div");

displayDisciplineBtn.addEventListener("click", () => {
  const selectedOption = disciplineList.options[disciplineList.selectedIndex];
  div.innerText = `Disciplina selectata: ${selectedOption.text}`;
});
