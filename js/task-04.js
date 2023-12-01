const form = document.querySelector('.login-form');
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return; }

    var formData = {
    email: emailValue,
    password: passwordValue
    };

    console.log(formData);
    
    form.reset();

})
