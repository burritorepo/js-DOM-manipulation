/* Función para crear objeto "element" que contiene valores del formulario */
function getValues() {
  let element = {
    create: document.querySelector('.js-addelement').value,
    text: document.querySelector('.js-addtext').value,
    color: document.querySelector('.js-addcolor').value,
    class: document.querySelector('.js-addclass').value,
    fontsize: document.querySelector('.js-font').value,
    container: document.querySelector(`${document.querySelector('.js-element').value}`)
  };
  return element;
}

function createElement(x) {
  let newElement = document.createElement(x.create);
  console.log('nuevo', newElement);
  return newElement;
}

function insert(elementValues, newElement) {
  let container = elementValues.container;
  container.appendChild(newElement);
  console.log('container', container);
}


let button = document.querySelector('button');

button.addEventListener('click', function (e) {
  console.log('click');
  e.preventDefault();
  let formvalues = getValues();
  let newelement = createElement(formvalues);
  insert(formvalues, newelement);
})
