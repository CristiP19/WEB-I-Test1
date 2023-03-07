const generateList = () => {
  let list = document.getElementById("list");

  for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(`Elementul Nr  ${i}`));
    list.appendChild(listItem);
  }
}
setTimeout(generateList, 5000);
