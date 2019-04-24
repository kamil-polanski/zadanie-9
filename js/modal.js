// Get the modal
var modal;
var modal1= document.querySelector("#modal1");
var modal2= document.querySelector("#modal2");

modal1.addEventListener('click', function(){
    modal = document.querySelector('#modalQuit');
    modal.style.display = "block";
  });

  modal2.addEventListener('click', function(){
    modal = document.querySelector('#modalLogin');
    modal.style.display = "block";
  });


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

