const list = document.querySelectorAll("input[type=text]");
const chose = document.querySelectorAll("select");
const button = document.querySelector(".btn");

button.addEventListener("click", function(e) {
  e.preventDefault();
  chose.forEach(function(option) {
    console.log(option.value);
  });
  list.forEach(function(item) {
    console.log(item.value);
  });
});
