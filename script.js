
const timer1 = setInterval(function() {
  const dataAlvo1 = new Date("2026-06-11T19:00:00Z").getTime();
  const agora = new Date().getTime();
  const diferenca = dataAlvo1 - agora;

  // Cálculos para dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exibe os resultados nos elementos HTML
  const copa = document.getElementById("copa");
  if (!copa) {
    console.error('Elemento #copa não encontrado.');
    return;
  }

  copa.querySelector("#days").innerText = dias < 10 ? "0" + dias : dias;
  copa.querySelector("#hours").innerText = horas < 10 ? "0" + horas : horas;
  copa.querySelector("#minutes").innerText = minutos < 10 ? "0" + minutos : minutos;
  copa.querySelector("#seconds").innerText = segundos < 10 ? "0" + segundos : segundos;

  // Se o contador chegar a zero
  if (diferenca < 0) {
    clearInterval(timer1);
  }
}, 1000);



const timer2 = setInterval(function() {
  const dataAlvo = new Date(2026, 11, 25, 0, 0, 0).getTime();
  const agora = new Date().getTime();
  const diferenca = dataAlvo - agora;

  // Cálculos para dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exibe os resultados nos elementos HTML
  const natal = document.getElementById("natal");
  if (!natal) {
    console.error('Elemento #natal não encontrado.');
    return;
  }

  natal.querySelector("#days").innerText = dias < 10 ? "0" + dias : dias;
  natal.querySelector("#hours").innerText = horas < 10 ? "0" + horas : horas;
  natal.querySelector("#minutes").innerText = minutos < 10 ? "0" + minutos : minutos;
  natal.querySelector("#seconds").innerText = segundos < 10 ? "0" + segundos : segundos;

  // Se o contador chegar a zero
  if (diferenca < 0) {
    clearInterval(timer2);
  }
}, 1000);


