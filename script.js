function printTable() {
  let displayParagraph = document.getElementById("multiplicationTable");

  var a = document.getElementById("input").value;

  displayParagraph.innerHTML = "";

  for (i = 1; i <= 10; i++) {
    displayParagraph.innerHTML += a + " x " + i + " = " + a * i + "<br>";
  }
}
