function criaOpEstados() {
  const pegaEstados = document.getElementById('estados');
  let opEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < opEstados.length; index +=1) {
    const criaOp = document.createElement('option');
    pegaEstados.appendChild(criaOp).innerText = opEstados[index];
  }
}

criaOpEstados();
