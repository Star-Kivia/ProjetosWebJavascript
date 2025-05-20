function calcularValor() {
  const valor = parseFloat(document.getElementById('valor').value);
  const tempo = parseInt(document.getElementById('tempo').value);

  if (isNaN(valor) || isNaN(tempo) || valor <= 0 || tempo <= 0) {
    alert("Por favor, preencha corretamente os campos.");
    return;
  }

  const blocos = Math.ceil(tempo / 15); 
  const total = blocos * valor;

  document.getElementById('resultado').innerHTML =
    `<p>Valor a Pagar R$: ${total.toFixed(2)}</p>`;
}
