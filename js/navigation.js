const personal = document.querySelector("#personal");
const general = document.querySelector("#general");
const details = document.querySelector("#details");
const banners = document.querySelector("#banners");
const links = document.querySelector("#links");
const payout = document.querySelector("#payout");
const menu = document.querySelector("#menu");
let disp;

menu.addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('hide');
    document.querySelector('.sidebar-2').classList.toggle('hide');
    document.querySelector('.main').classList.toggle('wide');
    document.querySelector('.nav').classList.toggle('fixed-right');
    document.querySelector('.nav').classList.toggle('wide-nav');
    document.querySelector('.sidebar').classList.toggle('fixed-left');
    document.querySelector('.main').classList.toggle('distance-top-45');
});


function hideSmallMenu() {
    if (window.matchMedia("(max-width: 766px)").matches) {
        document.querySelector('ul').classList.add('hide');
        document.querySelector('.sidebar-2').classList.add('hide');
        document.querySelector('.main').classList.toggle('distance-top-45');
    } else {

    }
}

function display() {
    disp = document.querySelectorAll('.show');
    for (ele of disp) {
        ele.classList.remove('show');
        ele.classList.add('hide');
    }
    hideSmallMenu();
}



personal.addEventListener('click', function() {
    display();
    document.querySelector('.section-p_data').classList.add('show');
});
general.addEventListener('click', function() {
    display();
    document.querySelector('.general').classList.add('show');
});
details.addEventListener('click', function() {
    display();
    document.querySelector('.details').classList.add('show');
});
banners.addEventListener('click', function() {
    display();
    document.querySelector('.banners').classList.add('show');
});
links.addEventListener('click', function() {
    display();
    document.querySelector('.link').classList.add('show');
});
payout.addEventListener('click', function() {
    display();
    document.querySelector('.payout').classList.add('show');
});