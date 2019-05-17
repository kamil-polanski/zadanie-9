// Get the modal
let modal_content;
let overlay;
let close;
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");

//Add event listener for modals
modal1.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content = document.querySelector('#modalQuit');
    show();
});

modal2.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content = document.querySelector('#modalLogin');
    show();
});

//Add class show to modal content
function show() {
    modal_content.classList.add('show');
}

//close modal by click 'x' button
close = document.querySelectorAll('.close');
for (ele of close) {
    ele.addEventListener('click', function(event) {
        event.preventDefault();
        modal_content.classList.remove('show');
    });

}

//close modal by click on bg
overlay = document.querySelectorAll('.modal').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            overlay.classList.remove('show')
        }
    });
});