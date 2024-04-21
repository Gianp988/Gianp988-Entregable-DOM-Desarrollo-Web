const crearSeccion3 = () => {
  const seccion3 = document.createElement('div');
  seccion3.setAttribute('id', 'seccion3');
  document.body.appendChild(seccion3);

  const h2 = document.createElement('h2');
  h2.textContent = 'Calculadora de IMC (Índice de Masa Corporal)';
  seccion3.appendChild(h2);

  const pesoDiv = document.createElement('div');
  const pesoLabel = document.createElement('label');
  pesoLabel.setAttribute('for', 'peso');
  pesoLabel.textContent = 'Peso (kg): ';
  const pesoInput = document.createElement('input');
  pesoInput.setAttribute('type', 'number');
  pesoInput.setAttribute('id', 'peso');
  pesoInput.setAttribute('min', '0');
  pesoInput.setAttribute('step', '0.1');
  pesoDiv.appendChild(pesoLabel);
  pesoDiv.appendChild(pesoInput);
  seccion3.appendChild(pesoDiv);

  const estaturaDiv = document.createElement('div');
  const estaturaLabel = document.createElement('label');
  estaturaLabel.setAttribute('for', 'estatura');
  estaturaLabel.textContent = 'Estatura (m): ';
  const estaturaInput = document.createElement('input');
  estaturaInput.setAttribute('type', 'number');
  estaturaInput.setAttribute('id', 'estatura');
  estaturaInput.setAttribute('min', '0');
  estaturaInput.setAttribute('step', '0.01');
  estaturaDiv.appendChild(estaturaLabel);
  estaturaDiv.appendChild(estaturaInput);
  seccion3.appendChild(estaturaDiv);

  const calcularButton = document.createElement('button');
  calcularButton.setAttribute('id', 'calcular');
  calcularButton.textContent = 'Calcular IMC';
  seccion3.appendChild(calcularButton);

  const resultadoDiv = document.createElement('div');
  resultadoDiv.setAttribute('id', 'resultado');
  seccion3.appendChild(resultadoDiv);

  const imagenIMC = document.createElement('img');
  imagenIMC.setAttribute('id', 'imagenIMC');

  imagenIMC.setAttribute('src', '');
  imagenIMC.setAttribute('alt', 'IMC');

  imagenIMC.style.display = 'none';
  seccion3.appendChild(imagenIMC);

 
  seccion3.style.border = '2px solid #333';
  seccion3.style.padding = '20px';


  calcularButton.addEventListener('click', calcularIMC);

  seccion3.style.backgroundColor = 'rgba(116, 113, 113, 0.76)'; 
  seccion3.style.color = 'white'; 
  seccion3.style.border = '2px solid #333';
  seccion3.style.padding = '20px';
};

const calcularIMC = () => {
  const peso = parseFloat(document.getElementById('peso').value);
  const estatura = parseFloat(document.getElementById('estatura').value);
  const resultado = document.getElementById('resultado');
  const imagenIMC = document.getElementById('imagenIMC');

  if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
    resultado.textContent = 'Por favor, introduce un peso y una estatura válidos.';
    imagenIMC.style.display = 'none';
    return;
  }

  const imc = peso / (estatura * estatura);
  let mensaje = '';

  if (imc < 18.5) {
    mensaje = 'Bajo peso';
    imagenIMC.src = 'img/PesoBajo.jpg'; 
  } else if (imc >= 18.5 && imc < 24.9) {
    mensaje = 'Normal';
    imagenIMC.src = 'img/Normal.jpg'; 
  } else if (imc >= 24.9 && imc < 29.9) {
    mensaje = 'Sobrepeso';
    imagenIMC.src = 'img/SobrePeso.jpg'; 
  } else {
    mensaje = 'Obesidad';
    imagenIMC.src = 'img/Obesidad.jpg'; 
  }

  resultado.innerHTML = `Tu IMC es ${imc.toFixed(2)} (${mensaje}).`;
  imagenIMC.style.display = 'block'; 


};

export { crearSeccion3 };
