var personal=document.querySelector("#personal");
var general=document.querySelector("#general");

personal.addEventListener('click', function(){
    document.querySelector('.x2').style.display="none";
    document.querySelector('.section-p_data').classList.add("display-on");
});

