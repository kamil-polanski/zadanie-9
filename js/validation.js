document.querySelector('#form').addEventListener('submit', function(event) {

    var isFormValidate = true;
    var mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    var emailAddressInput = event.target.querySelector('input[name="email_address"]')
    console.log(emailAddressInput.value);
    if (mailReg.test(emailAddressInput.value)) {
        console.log('Mail OK');
        emailAddressInput.parentElement.querySelector('.error').innerText = '';
    } else {
        isFormValidate = false;
        emailAddressInput.parentElement.querySelector('.error').innerText = 'Błędny adres e-mail';
    }
    var nameReg = /^[a-zA-Z]{3,}$/;
    var name_input = event.target.querySelector('input[name="name"]')
    console.log(name_input.value);
    if (nameReg.test(name_input.value)) {
        console.log('name OK');
        name_input.parentElement.querySelector('.error').innerText = '';
    } else {
        isFormValidate = false;
        name_input.parentElement.querySelector('.error').innerText = 'Błędne imię';
    }
    var surname_input = event.target.querySelector('input[name="surename"]')
    console.log(surname_input.value);
    if (nameReg.test(surname_input.value)) {
        console.log('surname OK');
        surname_input.parentElement.querySelector('.error').innerText = '';
    } else {
        isFormValidate = false;
        surname_input.parentElement.querySelector('.error').innerText = 'Błędne nazwisko';
    }
    var mobileReg = /^\d{9}$/;
    var mobile_input = event.target.querySelector('input[name="mobile"]')
    console.log(mobile_input.value);
    if (mobileReg.test(mobile_input.value)) {
        console.log('mobile OK');
        mobile_input.parentElement.querySelector('.error').innerText = '';
    } else {
        isFormValidate = false;
        mobile_input.parentElement.querySelector('.error').innerText = 'Błędny numer';
    }

    return !isFormValidate ? event.preventDefault() : true;

})