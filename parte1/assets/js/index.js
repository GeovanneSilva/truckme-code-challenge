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

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.trim() === "") {
    alert("Por favor, preencha o campo Nome.");
    return false;
  }

  if (email.trim() === "") {
    alert("Por favor, preencha o campo Email.");
    return false;
  } else if (!email.match(emailPattern)) {
    alert("Por favor, insira um endereço de email válido.");
    return false;
  }

  if (subject.trim() === "") {
    alert("Por favor, preencha o campo Assunto.");
    return false;
  }

  if (message.trim() === "") {
    alert("Por favor, preencha o campo Mensagem.");
    return false;
  }
  alert("Formulario enviado com sucesso!");
  return true; // Se todas as validações passarem, o formulário pode ser enviado
}
