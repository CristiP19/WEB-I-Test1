const findMax = ()  => {
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  let max = Math.max(x, y);
  document.getElementById("max").innerHTML = `Maximul este: ${max}`;
}
