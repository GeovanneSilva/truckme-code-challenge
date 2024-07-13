function moreText() {
  var text = document.getElementById("mais");
  var verMais = document.getElementById("verMais");

  if (text.style.display === "none") {
    text.style.display = "inline";
    verMais.textContent = "Ver Menos";
  } else {
    text.style.display = "none";
    verMais.textContent = "Ver Mais";
  }
}
