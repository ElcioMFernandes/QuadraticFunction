function enviar() {
  const valorA = parseInt(document.getElementById("inputA").value);
  const valorB = parseInt(document.getElementById("inputB").value);
  const valorC = parseInt(document.getElementById("inputC").value);
  if (!valorA || valorA == 0) {
    alert("O valor de A não pode ser 0!");
    return;
  }

  const delta = calcDelta(valorA, valorB, valorC);
  if (delta < 0) {
    alert("Delta não pode ser negativo!");
    return;
  }

  const raizDelta = Math.sqrt(delta);
  const valorBNegativo = valorB * -1;
  const valorADobro = valorA * 2;

  const x1 = (valorBNegativo + raizDelta) / valorADobro;
  const x2 = (valorBNegativo - raizDelta) / valorADobro;

  const verticeX = (valorB * -1) / valorADobro;
  const verticeY = (delta * -1) / (4 * valorA);

  document.getElementById(
    "resultado"
  ).innerText = `Valor de X' = ${x1} \n Valor de X" = ${x2} \n Vértice = (${verticeX},${verticeY})`;
}
function calcDelta(a, b, c) {
  return eval(b * b - 4 * a * c);
}

function limpar() {
  document.getElementById("inputA").value = "";
  document.getElementById("inputB").value = "";
  document.getElementById("inputC").value = "";
  document.getElementById("resultado").innerText = "";
}
