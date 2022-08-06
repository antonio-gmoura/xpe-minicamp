function start() {
  var buttonCalculateIcm = document.querySelector('#button-calculate-imc');
  buttonCalculateIcm.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  console.log('cliquei');
}

start();
