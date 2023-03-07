const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const displayNumbersWithDelay = (numbers) => {
  const list = document.createElement("ul");
  document.body.appendChild(list);

  numbers.forEach((number, index) => {
    setTimeout(() => {
      const listItem = document.createElement("li");
      listItem.textContent = number;
      list.appendChild(listItem);
    }, (index + 1) * 1000);
  });
}

displayNumbersWithDelay(numbers);
