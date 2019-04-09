const list = document.querySelectorAll("input[type=text]");
const chose = document.querySelectorAll("select");
const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
  e.preventDefault();
  chose.forEach(function (option) {
    let newelement = '';
    console.log(option.id);
    if (option.id === "element") {
      if (option.value === "p") {
        newelement = document.createElement(option.value);
        document.body.appendChild(newelement);
      }
    }

    console.log('newElement', newElement)
    newelement.textContent = document.querySelector('.addtext').value;
    newelement.style.backgroundColor = document.querySelector('.addcolor').value;
    newelement.classList.add(document.querySelector('.addclass').value);
  });
})





