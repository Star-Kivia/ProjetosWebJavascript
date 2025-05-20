function mostrarPromocao() {
  const nome = document.getElementById('medicamento').value;
  const preco = parseFloat(document.getElementById('preco').value);

  if (!nome || isNaN(preco)) {
    alert("Por favor, preencha corretamente os campos.");
    return;
  }

  const precoTotal = preco * 2;
  const precoPromocional = Math.floor(precoTotal);

  document.getElementById('promocao').innerHTML =
    `<p>Promoção de ${nome}</p>
     <p>Leve 2 por apenas R$: ${precoPromocional.toFixed(2)}</p>`;
}