
const timer = setInterval(function() {
  const dataAlvo = new Date(2026, 11, 25, 0, 0, 0).getTime();
  const agora = new Date().getTime();
  const diferenca = dataAlvo - agora;

  // Cálculos para dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exibe os resultados nos elementos HTML


  document.querySelector("#days").innerText = dias < 10 ? "0" + dias : dias;
  document.querySelector("#hours").innerText = horas < 10 ? "0" + horas : horas;
  document.querySelector("#minutes").innerText = minutos < 10 ? "0" + minutos : minutos;
  document.querySelector("#seconds").innerText = segundos < 10 ? "0" + segundos : segundos;

  // Se o contador chegar a zero
  if (diferenca < 0) {
    clearInterval(timer);
  }
}, 1000);