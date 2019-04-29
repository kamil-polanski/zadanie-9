var personal = document.querySelector("#personal");
var general = document.querySelector("#general");
var details = document.querySelector("#details");
var banners = document.querySelector("#banners");
var links = document.querySelector("#links");
var payout = document.querySelector("#payout");
var menu = document.querySelector("#menu");
var a;

menu.addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('hide');
    document.querySelector('.sidebar-2').classList.toggle('hide');
});


function hideSmallMenu() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        document.querySelector('ul').classList.add('hide');
        document.querySelector('.sidebar-2').classList.add('hide');
    } else {

    }
}

function display() {
    a = document.querySelectorAll('.show');
    for (ele of a) {
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