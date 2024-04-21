
const crearSeccion2 = () => {
  const seccion2 = document.createElement('div');
  seccion2.setAttribute('id', 'seccion2');
  document.body.appendChild(seccion2);

  const h2 = document.createElement('h2');
  h2.textContent = 'Carrusel de Imágenes';
  seccion2.appendChild(h2);

  const carruselDiv = document.createElement('div');
  carruselDiv.classList.add('carrusel');
  seccion2.appendChild(carruselDiv);

  const anteriorButton = document.createElement('button');
  anteriorButton.setAttribute('id', 'anterior');
  anteriorButton.textContent = 'Anterior';
  carruselDiv.appendChild(anteriorButton);

  const imagen = document.createElement('img');
  imagen.setAttribute('id', 'imagen');
  carruselDiv.appendChild(imagen);

  const siguienteButton = document.createElement('button');
  siguienteButton.setAttribute('id', 'siguiente');
  siguienteButton.textContent = 'Siguiente';
  carruselDiv.appendChild(siguienteButton);

  seccion2.style.backgroundColor = 'rgba(116, 113, 113, 0.76)'; 
  seccion2.style.color = 'white'; 
  seccion2.style.border = '2px solid #333';
  seccion2.style.padding = '20px';
  seccion2.style.marginBottom = '20px';
  
  const imagenes = ['img/Ferrari.jpg', 'img/mercedes.jpg', 'img/RollsRoyce.jpg'];
  let indice = 0;
  const imgElement = document.getElementById('imagen');
  
  const mostrarImagen = () => {
    imgElement.src = imagenes[indice];
  };
  
  mostrarImagen();
  
  document.getElementById('anterior').addEventListener('click', () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  });
  
  document.getElementById('siguiente').addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
  });

  document.body.appendChild(seccion2);
  

};


export { crearSeccion2 };