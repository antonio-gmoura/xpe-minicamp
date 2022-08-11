function start() {
  var inputGasolinePrice = document.querySelector('#input-gasoline-price');
  var inputAlcoholPrice = document.querySelector('#input-alcohol-price');

  inputGasolinePrice.addEventListener('input', handlePriceInput);
  inputAlcoholPrice.addEventListener('input', handlePriceInput);
  handlePriceInput();
}

function handlePriceInput() {
  var inputGasolinePrice = document.querySelector('#input-gasoline-price');
  var inputAlcoholPrice = document.querySelector('#input-alcohol-price');
  var inputRelationConsumption = document.querySelector(
    '#relation-consumption'
  );
  //var imcEvaluation = document.querySelector('#imc-evaluation');

  var priceGasoline = inputGasolinePrice.value;
  var priceAlcohol = inputAlcoholPrice.value;

  var relationConsumption = 0;
  if (priceGasoline != 0) {
    relationConsumption = priceAlcohol / priceGasoline;
  }
  inputRelationConsumption.value = relationConsumption;
  //    Number(calculateImc(weight, height).toFixed(2));
  //  var formattedImc = imc.toFixed(2).replace('.', ',');

  //  imcResult.textContent = formattedImc;

  //  imcEvaluation.textContent = evaluateIcm(imc);
}

start();
