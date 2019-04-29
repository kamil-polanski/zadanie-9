var menu = document.querySelector("#menu");

menu.addEventListener('click', function() {

            a = document.querySelectorAll('ul');
            document.querySelector('#menu').style.display = 'none';
            for (ele of a) {
                ele.classList.remove('show');
                ele.classList.add('hide');
            }
        }