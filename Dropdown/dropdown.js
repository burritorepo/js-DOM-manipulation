
function dropdown(opt) {
    this.button = opt.class;
    this.innerdiv = this.button.nextElementSibling;
    this.show();
}

dropdown.prototype = {
    show: function () {
        this.button.addEventListener('click', (e) => {
            this.innerdiv.classList.toggle('dropdown-menu');
            console.log(this.innerdiv.className);
        })
    }
}

let menu1 = new dropdown({
    class: document.querySelector('.js_btn1'),
});
let menu2 = new dropdown({
    class: document.querySelector('.js_btn2'),
});
