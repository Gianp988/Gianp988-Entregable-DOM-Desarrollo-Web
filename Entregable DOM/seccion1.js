const crearSeccion1 = () => {
  const seccion1 = document.createElement('div');
  seccion1.setAttribute('id', 'seccion1');
  document.body.appendChild(seccion1);

  const h2 = document.createElement('h2');
  h2.textContent = 'Juego de Piedra, Papel o Tijera';
  seccion1.appendChild(h2);

  const buttonsDiv = document.createElement('div');
  const opciones = ['Piedra', 'Papel', 'Tijera'];
  opciones.forEach(opcion => {
    const button = document.createElement('button');
    button.textContent = opcion;
    button.addEventListener('click', jugar); 
    buttonsDiv.appendChild(button);
  });
  seccion1.appendChild(buttonsDiv);

  const resultadoDiv = document.createElement('div');
  resultadoDiv.setAttribute('id', 'resultado');
  seccion1.appendChild(resultadoDiv);

 seccion1.style.backgroundColor = 'rgba(116, 113, 113, 0.76)'; 
  seccion1.style.color = 'white'; 
  seccion1.style.border = '2px solid #333';
  seccion1.style.padding = '20px';
  seccion1.style.marginBottom = '20px';
};

const jugar = (event) => {
  const opciones = ['Piedra', 'Papel', 'Tijera'];
  const seleccionUsuario = event.target.textContent;
  const seleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
  const resultado = document.getElementById('resultado');

  let mensaje = '';

  if (seleccionUsuario === seleccionComputadora) {
    mensaje = 'Empate';
  } else if (
    (seleccionUsuario === 'Piedra' && seleccionComputadora === 'Tijera') ||
    (seleccionUsuario === 'Papel' && seleccionComputadora === 'Piedra') ||
    (seleccionUsuario === 'Tijera' && seleccionComputadora === 'Papel')
  ) {
    mensaje = '¡Ganaste!';
  } else {
    mensaje = '¡Perdiste!';
  }

  resultado.textContent = `Seleccionaste ${seleccionUsuario}. La computadora seleccionó ${seleccionComputadora}. ${mensaje}`;
};

export { crearSeccion1, jugar };
