const min = +prompt("Introduceti numarul minim");
const max = +prompt("Introduceti numarul maxim");
let n = 0;
for (let i = min; i <= max; ++i) {
  if (!(i % 2)) {
    n = n + i
  }
}
alert(`Suma numerelor pare de la ${min} pana la ${max} este egala cu ${n}`);
