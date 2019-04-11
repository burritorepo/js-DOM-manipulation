/* Función para crear objeto "element" que contiene valores del formulario */
function getValues() {
  let element = {
    create: document.querySelector(".js-addelement").value,
    text: document.querySelector(".js-addtext").value,
    css: document.querySelector(".js-addcolor").value,
    class: document.querySelector(".js-addclass").value,
    fontsize: document.querySelector(".js-font").value,
    container: document.querySelector(`${document.querySelector(".js-element").value}`)
  };
  return element;
}

function createElement(formvalues) {
  let newElement = document.createElement(formvalues.create);
  return newElement;
}

function insert(formvalues, newElement) {
  let container = formvalues.container;
  let text = document.createTextNode(`${formvalues.text}`);
  container.appendChild(newElement);
  newElement.appendChild(text);
  newElement.style.cssText = `${formvalues.css}`;
}

function addElemenTypetoList(formvalues) {
  let newoption = document.createElement("option");
  let optiontext = document.createTextNode(`${formvalues.create}`)
  newoption.appendChild(optiontext);
  document.querySelector('#inside').appendChild(newoption);
}


let button = document.querySelector(".js-btn");

button.addEventListener('click', (e) => {
  e.preventDefault();
  let formvalues = getValues();
  let newelement = createElement(formvalues);
  insert(formvalues, newelement);
  addElemenTypetoList(formvalues);
});   
