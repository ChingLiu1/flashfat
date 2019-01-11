var logInLink = document.querySelector('#logInLink'),
    signUpLink = document.querySelector('#signUpLink'),
    logInForm = document.querySelector('#logInForm'),
    signUpForm = document.querySelector('#signUpForm');

logInLink.addEventListener('click', () => {
    signUpLink.style.backgroundColor = 'green';
    //display login form
    logInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    logInLink.style.backgroundColor = 'limegreen';
});

signUpLink.addEventListener('click', () => {

    logInLink.style.backgroundColor = 'green';
    logInForm.style.display = 'none';
    signUpForm.style.display = 'block';
    signUpLink.style.backgroundColor = 'limegreen';
});
